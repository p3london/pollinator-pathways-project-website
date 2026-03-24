import client from "@/../tina/__generated__/client";

import PageClient from "./page-client";
import PageServer from "./page-server";
import LayoutRoot from "@/components/layout-root";
import getSitewideData from "@/lib/get-sitewide-data";
// Types
import type { Metadata, ResolvingMetadata } from "next";
// Server functions
import path from "path";
import sharp from "sharp";
import { fetchBlogList } from "../utils/fetch-blog-list";
import { getIsEditableDeployment } from "@/lib/get-is-editable-deployment";
import { getBaseUrl } from "@/lib/get-base-url";

/**
 * TODO: investigate in more detail why this whole "page/-server/-client"
 * business is necessary. Seems related to TinaCMS not fully supporting
 * Next.js's `app` router.
 */
export default async function Page({ params: { filename } }: $TSFixMe) {
  const res = await client.queries.blog({ relativePath: `${filename}.md` });
  const { footer, nav } = await getSitewideData();
  const isPreviewEnabled = getIsEditableDeployment();

  return (
    <LayoutRoot
      footer={footer}
      navBarItems={nav.items}
      pathname={`/blog/${filename}`}
    >
      {isPreviewEnabled ? (
        <PageClient
          query={res.query}
          variables={res.variables}
          data={res.data}
        />
      ) : (
        <PageServer data={res.data} />
      )}
    </LayoutRoot>
  );
}

const METADATA_TITLE_SUFFIX = " | Pollinator Pathways Project";
const BASE_URL = getBaseUrl();

export async function generateMetadata(
  { params }: { params: Promise<{ filename: string }> },
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const { filename } = await params;
  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];
  // grab the blog data
  const res = await client.queries.blog({ relativePath: `${filename}.md` });
  const blogTitle = res.data.blog.title;
  const blogImage = res.data.blog.coverImage;
  const blogImagesOpenGraph: {
    url: string;
    width?: number;
    height?: number;
  }[] = [];
  if (blogImage) {
    const blogImageFilePathRaw = path.join(process.cwd(), "public", blogImage);
    // Replace assets.tina.io URL
    // https:/assets.tina.io/e5dfefc8-2897-4502-afe4-796304188e98
    const blogImageFilePath = blogImageFilePathRaw.replace(
      /https?:(\/)+assets\.tina\.io\/[^\/]+/,
      "/uploads"
    );
    // Get the width and height of the image using sharp.js
    let width = undefined;
    let height = undefined;
    try {
      const sharpMetadata = await sharp(blogImageFilePath).metadata();
      width = sharpMetadata.width;
      height = sharpMetadata.height;
    } catch (e) {}
    // TODO: figure out width and height for blogImage, if applicable
    // console.log({ blogImageFilePath, width, height });
    const blogImageUrl = `${BASE_URL}${blogImage}`;
    blogImagesOpenGraph.push({ url: blogImageUrl, width, height });
  }
  const openGraphImages = [...previousImages, ...blogImagesOpenGraph];
  const blogUrlAbsolute = `${BASE_URL}/blog/${filename}`;
  // console.log({ blogUrlAbsolute });
  return {
    title: blogTitle + METADATA_TITLE_SUFFIX,
    openGraph: {
      title: blogTitle,
      url: blogUrlAbsolute,
      siteName: "Pollinator Pathways Project",
      images: openGraphImages,
      locale: "en_CA",
      type: "website",
    },
  };
}

export async function generateStaticParams() {
  const blogEntries = await fetchBlogList();
  if (!Array.isArray(blogEntries) || blogEntries.length === 0) {
    return [{ filename: "not-found" }];
  }
  const staticParams = blogEntries.map(({ filename }) => ({ filename }));
  return staticParams;
}
