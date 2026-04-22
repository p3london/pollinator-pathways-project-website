// Third-party
import { TinaMarkdown, TinaMarkdownContent } from "tinacms/dist/rich-text";
// Components
import MessageBar from "./components/message-bar";
import PrimaryButtonLink from "@/components/primary-button-link";
import Spacer from "@/components/spacer";
import SponsorsSection from "./components/sponsors-section";
import TextImageSplit from "./components/text-image-split";
import ThreeFeatures from "./components/three-features";
import VideoHero from "./components/video-hero";
// Styles
import s from "./home-page.module.css";

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
  return (
    <main className={s.root}>
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
