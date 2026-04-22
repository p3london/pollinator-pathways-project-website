// Components
import PrimaryButtonLink from "@/components/primary-button-link";
import Spacer from "@/components/spacer";
import ThreeFeatures from "./components/three-features";
import { PageTitle } from "@/components/page-title";
// Styles
import s from "./connect-page.module.css";
import { ConnectPageQuery } from "../../../tina/__generated__/types";

// TODO: lift METADATA_TITLE_SUFFIX into sitewide data
const METADATA_TITLE_SUFFIX = " | Pollinator Pathways Project";

export const metadata = {
  title: "Connect" + METADATA_TITLE_SUFFIX,
  description:
    "Pollinator Pathways Project is a grassroots community organization started in London, Canada that educates how to grow a pollinator garden.",
};

export default function ConnectPage({ data }: { data: ConnectPageQuery }) {
  const {
    mainHeading,
    mainText,
    mainLink,
    volunteerHeading,
    volunteerText,
    volunteerOpportunities,
  } = data.connectPage;

  return (
    <>
      <div className={s.connectWithUs_contents}>
        <Spacer h="2rem" />
        <PageTitle>{mainHeading}</PageTitle>
        <Spacer h="2rem" />
        <p className={s.connectWithUs_text}>{mainText}</p>
        <Spacer h="1.5rem" />

        <PrimaryButtonLink href={mainLink.url}>
          <span className={s.connectWithUs_button_iconAndText}>
            <img
              className={s.connectWithUs_button_icon}
              src={mainLink.icon}
              alt=""
            />
            {mainLink.text}
          </span>
        </PrimaryButtonLink>
        <Spacer h="4rem" />
      </div>
      <div className={s.volunteerOpportunities}>
        <div className={s.volunteerOpportunities_contents}>
          <h2 className={s.volunteerOpportunities_heading}>
            {volunteerHeading}
          </h2>
          <Spacer h="1rem" />
          <p className={s.volunteerOpportunities_text}>{volunteerText}</p>
        </div>
      </div>
      <ThreeFeatures items={volunteerOpportunities} />
    </>
  );
}
