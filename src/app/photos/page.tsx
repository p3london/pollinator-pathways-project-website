// Layout
import getSitewideData from "@/lib/get-sitewide-data";
import LayoutRoot from "@/components/layout-root";
// Components
import { ImageGrid } from "./components/image-grid";
import PagePlaceholder from "@/components/page-placeholder/page";
import Link from "next/link";
// Utils
import { fetchPhotosList } from "./utils/fetch-photos-list";

export default async function Page() {
  const photoEntries = await fetchPhotosList();

  const { footer, nav } = await getSitewideData();

  return (
    <LayoutRoot footer={footer} navBarItems={nav.items} pathname="/photos">
      <PagePlaceholder name="Photos Landing">
        <div style={{ margin: "0 auto", maxWidth: "800px" }}>
          <h1>Featured Photo Albums</h1>
          <p>
            Take a look below at photos from our team who have helped put up
            Gardens as well as photos that are publicly submitted to give others
            an idea of how to structure their own gardens.
          </p>
          <br />
          <p>
            Submit your photos by clicking the button and using the automated
            email function or directly emailing to
            pollinatorpathwaysproject@gmail.com
          </p>
          <br />
          <a href="mailto:pollinatorpathwaysproject@gmail.com?subject=Photo Submission - Pollinator Garden">
            Submit Your Photos
          </a>
        </div>
        <br />
        <br />

        <ul>
          {photoEntries.map((entry) => (
            <li key={entry.filename}>
              <Link href={`/photos/${entry.filename}`}>{entry.title}</Link>
            </li>
          ))}
        </ul>

        <br />
        <br />
        {photoEntries.map((entry) => {
          const validImages: string[] = Array.isArray(entry.images)
            ? (entry.images.filter((e) => typeof e === "string") as string[])
            : [];
          return (
            <div
              key={entry.title}
              style={{ margin: "0 auto", maxWidth: "800px" }}
            >
              <h2>{entry.title}</h2>
              {validImages.length > 0 ? (
                <ImageGrid images={validImages} />
              ) : null}
              {/* <pre>
							<code>{JSON.stringify(entry, null, 2)}</code>
						</pre> */}
              <br />
              <br />
            </div>
          );
        })}
      </PagePlaceholder>
    </LayoutRoot>
  );
}
