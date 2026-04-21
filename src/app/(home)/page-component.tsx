// Third-party
import { TinaMarkdown, TinaMarkdownContent } from "tinacms/dist/rich-text";
// Components
import PrimaryButtonLink from "@/components/primary-button-link";
import Spacer from "@/components/spacer";
import SponsorsSection from "./components/sponsors-section";
import TextImageSplit from "./components/text-image-split";
import ThreeFeatures from "./components/three-features";
import VideoHero from "./components/video-hero";
// Styles
import s from "./home-page.module.css";
import MessageBar from "./components/message-bar";

export default function Home({ data }: $TSFixMe) {
  const {
    heading,
    infoSections,
    callsToAction,
    sponsorsHeading,
    sponsorsText,
    sponsors,
    messageBars,
  } = data.homepage;

  // const messageBars = [
  //   {
  //     emoji: "📅",
  //     title: "Join us for some event!",
  //     body: {
  //       type: "root",
  //       children: [
  //         {
  //           type: "p",
  //           children: [
  //             {
  //               type: "text",
  //               text: "On this date, blah blah blah, pollinator species are responsible for 1 out of every 3 bites of food we eat. Pollination is a crucial process in the reproductive system of plants.",
  //             },
  //           ],
  //         },
  //       ],
  //     },
  //     links: [
  //       { linkText: "Link one", linkUrl: "https://www.example.com" },
  //       { linkText: "Link two", linkUrl: "https://www.example.com" },
  //     ],
  //   },
  //   {
  //     emoji: "🪴",
  //     title: "Plant sale!",
  //     body: {
  //       type: "root",
  //       children: [
  //         {
  //           type: "p",
  //           children: [
  //             {
  //               type: "text",
  //               text: "On this date, blah blah blah, pollinator species are responsible for 1 out of every 3 bites of food we eat. Pollination is a crucial process in the reproductive system of plants.",
  //             },
  //           ],
  //         },
  //       ],
  //     },
  //     links: [
  //       { linkText: "Link one", linkUrl: "https://www.example.com" },
  //       { linkText: "Link two", linkUrl: "https://www.example.com" },
  //     ],
  //   },
  // ];

  return (
    <main className={s.root}>
      {/* <pre>
					<code>{JSON.stringify(data.homepage, null, 2)}</code>
				</pre> */}
      <VideoHero
        videoSrc={"/pollinator-pathways-video.mp4"}
        heading={heading}
      />
      {Array.isArray(messageBars) && messageBars.length > 0
        ? messageBars.map((bar, index) => (
            <MessageBar
              key={index}
              emoji={bar.emoji}
              title={bar.title}
              body={bar.body as unknown as TinaMarkdownContent}
              links={bar.links}
            />
          ))
        : null}

      <div className={s.infoSections}>
        {infoSections.map((section: $TSFixMe, index: number) => {
          const flipOrder = index % 2 !== 0;
          return (
            <TextImageSplit
              key={index}
              flipOrder={flipOrder}
              heading={section.title}
              image={section.image}
            >
              <div className={s.textImageBody}>
                <TinaMarkdown content={section.body} />
              </div>
              {section.linkText && section.linkUrl ? (
                <PrimaryButtonLink
                  className={s.textImageLink}
                  href={section.linkUrl}
                >
                  {section.linkText}
                </PrimaryButtonLink>
              ) : null}
            </TextImageSplit>
          );
        })}
      </div>
      <Spacer h="2rem" />
      <ThreeFeatures items={callsToAction} />
      <SponsorsSection
        heading={sponsorsHeading}
        text={sponsorsText}
        sponsors={sponsors}
      />
    </main>
  );
}
