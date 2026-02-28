// Components
import LayoutRoot from "@/components/layout-root";
import PagePlaceholder from "@/components/page-placeholder/page";
import { Placeholder } from "@/components/placeholder";
// Utils
import getSitewideData from "@/lib/get-sitewide-data";
// Styles
import s from "./style.module.css";
import { PropsWithChildren } from "react";

const POLLINATOR_KIT_EMBEDS = [
  {
    title: "Flower Planter",
    htmlEmbed: `<div style="position:relative;overflow:hidden;height:1500px;width:100%;padding-top:1500px;"><iframe title='Donation form powered by Zeffy' style='position: absolute; border: 0; top:0;left:0;bottom:0;right:0;width:100%;height:100%' src='https://www.zeffy.com/embed/ticketing/e3b620a6-3a84-40c5-a38b-316cceb65f78' allowpaymentrequest allowTransparency="true"></iframe></div>`,
    imageSrc: "/images/flower_planter.jpeg",
    // TODO: convert to markdown, via TinaCMS
    children: (
      <>
        <p>Kit contains:</p>
        <ol>
          <li>
            One 19&Prime; L x 19&Prime; W x 18&Prime; H wooden container made
            from new pressure-treated lumber to ensure that it will stand up to
            our environment
          </li>
          <li>Two 25L bags of black earth to fill the wooden container</li>
          <li>Landscape fabric to line the planter</li>
          <li>1-2 native plants</li>
          <li>One instruction booklet</li>
        </ol>
      </>
    ),
  },
  {
    title: "Vegetable Planter",
    htmlEmbed: `<div style="position:relative;overflow:hidden;height:1500px;width:100%;padding-top:1500px;"><iframe title='Donation form powered by Zeffy' style='position: absolute; border: 0; top:0;left:0;bottom:0;right:0;width:100%;height:100%' src='https://www.zeffy.com/embed/ticketing/7920dc15-a36a-4b66-8f99-779da31d0d21' allowpaymentrequest allowTransparency="true"></iframe></div>`,
    imageSrc: "/images/vegetable_planter.jpeg",
    // TODO: convert to markdown, via TinaCMS
    children: (
      <>
        <p>
          Vegetables that require insect pollination include melons, pumpkins,
          cucumbers, squash, and zucchini. Vegetable Planter kit can also be
          used for flowering plants (not included)
        </p>
        <p>Kit contains:</p>
        <ol>
          <li>
            One 41&Prime;L x 22&Prime;H x 18&Prime;H wooden container made from
            new pressure-treated lumber
          </li>
          <li>Three 25L bags of black earth to fill the wooden container</li>
          <li>Landscape fabric to line the planter</li>
        </ol>
      </>
    ),
  },
  {
    title: "Bee Hotel",
    htmlEmbed: `<div style="position:relative;overflow:hidden;height:1500px;width:100%;padding-top:1500px;"><iframe title='Donation form powered by Zeffy' style='position: absolute; border: 0; top:0;left:0;bottom:0;right:0;width:100%;height:100%' src='https://www.zeffy.com/embed/ticketing/d52397df-4c24-4a8f-ac70-5194d4d7a2ae' allowpaymentrequest allowTransparency="true"></iframe></div>`,
    imageSrc: "/images/bee_hotel.jpeg",
    // TODO: convert to markdown, via TinaCMS
    children: (
      <>
        <p>
          Since solitary bees don&apos;t have a hive to protect, there is less
          chance that they will sting you. The Bee Hotel provides single cells
          for these solitary bees to lay their eggs.
        </p>
        <p>Kit contains:</p>
        <ol>
          <li>
            One untreated wood slab, approximately 8&Prime; thick and 20&Prime;
            in diameter, with a series of holes drilled into the slab. There is
            an overhanging roof to protect the holes from getting wet
          </li>
          <li>One hook and rope to hang the hotel in your garden</li>
          <li>
            One information booklet &ldquo;Attracting Solitary Bees&rdquo;
          </li>
        </ol>
      </>
    ),
  },
  {
    title: "Butterfly House",
    htmlEmbed: `<div style="position:relative;overflow:hidden;height:1500px;width:100%;padding-top:1500px;"><iframe title='Donation form powered by Zeffy' style='position: absolute; border: 0; top:0;left:0;bottom:0;right:0;width:100%;height:100%' src='https://www.zeffy.com/embed/ticketing/0fbccfd9-f6f1-48bd-8f86-b45fcd4d57ad' allowpaymentrequest allowTransparency="true"></iframe></div>`,
    imageSrc: "/images/butterfly_house.jpeg",
    // TODO: convert to markdown, via TinaCMS
    children: (
      <>
        <p>
          Butterfly Houses not only entice and keep butterflies, but are an
          attractive addition to your garden or yard. The slim entrances provide
          protection against predators while blocking out the elements.
        </p>
        <p>Kit contains:</p>
        <ol>
          <li>
            One 24&Prime; H x 5-1/2&Prime; W x 6-1/2&Prime; D wooden house, with
            an overhanging roof, made from new pressure-treated lumber
          </li>
          <li>
            One 5 foot long copper tube to insert in the ground and support the
            house
          </li>
          <li>
            Two hooks and a rope as an optional method to hang the house in your
            garden
          </li>
          <li>
            One information booklet &ldquo;Attracting Butterflies to a Butterfly
            House&rdquo;
          </li>
        </ol>
      </>
    ),
  },
];

export default async function PollinatorKitsPage() {
  const { footer } = await getSitewideData();
  return (
    <LayoutRoot footer={footer} pathname="/pollinator-kits">
      <PagePlaceholder name="Pollinator Kits">
        <Placeholder name="<PageTitle />">
          <h1 className={s.pageTitle}>Pollinator-In-A-Box Kits</h1>
        </Placeholder>
        <Placeholder name="Intro Text">
          <p className={s.introText}>
            Bees, butterflies, and pollination go hand-in-hand. Providing
            shelter, along with a floral buffet, is the best way to ensure these
            friendly guests visit your garden season after season. Pollinators
            prefer native flowering plants that have adapted alongside them over
            the generations. Locally adapted native plants attract solitary
            bees, butterflies, and other pollinators. Any of these kits would
            make a great gift or addition to your home garden or business -- and
            the pollinators will thank you!
          </p>
        </Placeholder>
        <Placeholder name="PDF Link">
          <a href="/resources/pollinator_kit_flyer.pdf" className={s.pdfLink}>
            Click here for more information about our Pollinator Kits
          </a>
        </Placeholder>
        {POLLINATOR_KIT_EMBEDS.map(
          ({ title, htmlEmbed, imageSrc, children }, idx) => {
            return (
              <PollinatorKitEmbed
                key={`${title}-${idx}`}
                title={title}
                htmlEmbed={htmlEmbed}
              >
                <img src={imageSrc} alt={title} />
                {children}
              </PollinatorKitEmbed>
            );
          }
        )}
      </PagePlaceholder>
    </LayoutRoot>
  );
}

function PollinatorKitEmbed({
  title,
  children,
  htmlEmbed,
}: PropsWithChildren<{ title: string; htmlEmbed: string }>) {
  return (
    <Placeholder name="<PollinatorKitEmbed />">
      <h2 className={s.kitEmbedHeading}>{title}</h2>
      <div className={s.kitEmbedEntry}>
        <div className={s.kitEmbedImageAndText}>{children}</div>
        <div
          className={s.kitEmbedContainer}
          dangerouslySetInnerHTML={{
            __html: htmlEmbed,
          }}
        ></div>
      </div>
    </Placeholder>
  );
}
