import baseClient from "@/../tina/__generated__/client";

/**
 * Tina Cloud rewrites repo-based media paths like `/uploads/foo.jpg` to
 * `https://assets.tina.io/<clientId>/foo.jpg`. Media is only synced to
 * assets.tina.io from the default branch, so images added on a feature
 * branch 404 on preview deployments until the branch is merged.
 *
 * This is kind of annoying: it prevents deploy previews from loading images
 * and other assets that have been added on the branch... which kind of defeats
 * the purpose of deploy previews.
 *
 * So... on any deployment that isn't built from `main`, we rewrite those
 * `assets.tina.io` URLs back to local `/uploads/...` paths, which every
 * deployment serves from `public/`.
 *
 * Note: if we want to undo this change, just replace:
 * `export default client` (at the bottom of this file) with
 * `export default baseClient`.
 */
const USE_TINA_ASSETS_CDN = process.env.VERCEL_GIT_COMMIT_REF === "main";
const TINA_ASSETS_URL = /https?:\/\/assets\.tina\.io\/[^/"]+/g;

// Rewrite all URLs in an object from `assets.tina.io` to local `/uploads`
function rewriteTinaAssetUrls<T>(data: T): T {
	return JSON.parse(JSON.stringify(data).replace(TINA_ASSETS_URL, "/uploads"));
}

/**
 * Note: `baseClient` is only read lazily, inside the proxy handlers, never at
 * module load. `tina/config.ts` imports this file indirectly, and during
 * `tinacms build` the config is loaded before `tina/__generated__` exists, so
 * `baseClient` is a stub at that point. Touching it at import time would break
 * the Tina build.
 */

/**
 * For all queries, rewrite URLs in the data retrieved from
 * those queries, swapping in local `/uploads` URLs.
 */
type Queries = typeof baseClient.queries;
const queries = new Proxy({} as Queries, {
	get(_target, prop) {
		const target = baseClient.queries;
		const query = Reflect.get(target, prop);
		if (USE_TINA_ASSETS_CDN || typeof query !== "function") {
			return query;
		}
		return async (...args: unknown[]) => {
			const res = await query.apply(target, args);
			return { ...res, data: rewriteTinaAssetUrls(res.data) };
		};
	},
});

/**
 * Proxy the default Tina client,
 * but swap in the rewritten local `/uploads` URLs.
 */
const client = new Proxy({} as typeof baseClient, {
	get(_target, prop) {
		if (prop === "queries") return queries;
		const value = Reflect.get(baseClient, prop);
		return typeof value === "function" ? value.bind(baseClient) : value;
	},
});

export default client;
