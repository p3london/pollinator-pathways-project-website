import client from "@/lib/tina-client";

export default async function getSitewideData() {
	const { data } = await client.queries.sitewide({
		relativePath: "sitewide.json",
	});
	return data.sitewide;
}
