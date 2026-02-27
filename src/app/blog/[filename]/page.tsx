import client from "@/../tina/__generated__/client";
import { fetchBlogList } from "../utils/fetch-blog-list";
import { getIsEditableDeployment } from "@/lib/get-is-editable-deployment";
import PageClient from "./page-client";
import PageServer from "./page-server";
import LayoutRoot from "@/components/layout-root";
import getSitewideData from "@/lib/get-sitewide-data";
import { Placeholder } from "@/components/placeholder";
import Link from "next/link";

/**
 * TODO: actually implement recent posts
 */
const RECENT_POSTS = [
  {
    title: "Program Overview: Central London Pathway",
    slug: "program-overview-central-london-pathway",
  },
  {
    title: "Earth Day Is Everyday",
    slug: "earth-day-is-everyday",
  },
  {
    title: "Six Bees To Look Out For This Spring & Summer",
    slug: "six-bees-to-look-out-for-this-spring-summer",
  },
];

/**
 * TODO: investigate in more detail why this whole "page/-server/-client"
 * business is necessary. Seems related to TinaCMS not fully supporting
 * Next.js's `app` router.
 */
export default async function Page({ params: { filename } }: $TSFixMe) {
  const res = await client.queries.blog({ relativePath: `${filename}.md` });
  const { footer } = await getSitewideData();
  const isPreviewEnabled = getIsEditableDeployment();

  /**
   * TODO: actually fetch recent posts
   */
  const recentPosts = RECENT_POSTS;

  return (
    <LayoutRoot footer={footer} pathname="/blog">
      {isPreviewEnabled ? (
        <PageClient
          query={res.query}
          variables={res.variables}
          data={res.data}
        />
      ) : (
        <PageServer data={res.data} />
      )}
      <Placeholder name="<BlogRecentPosts />">
        {recentPosts?.length ? (
          <div
            style={{
              maxWidth: "30em",
              textAlign: "center",
              margin: "0 auto",
              padding: "2rem 1rem",
            }}
          >
            <h2>Recent Posts</h2>
            <ul style={{ listStyle: "none", padding: "0" }}>
              {recentPosts.map((post) => (
                <li key={post.slug}>
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </Placeholder>
    </LayoutRoot>
  );
}

export async function generateStaticParams() {
  const blogEntries = await fetchBlogList();
  return blogEntries.map(({ filename }) => ({ params: { filename } }));
}
