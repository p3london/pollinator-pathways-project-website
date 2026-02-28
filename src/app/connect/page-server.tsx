import { ContactForm } from "./components/contact-form";
import PagePlaceholder from "@/components/page-placeholder/page";
import PrimaryButtonLink from "@/components/primary-button-link";
import { Placeholder } from "@/components/placeholder";
import Spacer from "@/components/spacer";
import ThreeFeatures from "./components/three-features";
import s from "./connect-page.module.css";

const ADMIN_EMAIL = "hi@zch.sh";
const EMAIL_SUBJECT = "Hello from your website!";

export default function ConnectPage() {
  return (
    <>
      {/*<PagePlaceholder name="Connect">*/}
      {/*<Placeholder name="Contact Form">
					<ContactForm />
				</Placeholder>*/}
      <div className={s.connectWithUs}>
        <div className={s.connectWithUs_contents}>
          <h2 className={s.connectWithUs_heading}>Connect with us!</h2>
          <Spacer h="1rem" />
          <p className={s.connectWithUs_text}>
            If you want to get involved, sponsor us, purchase a pollinator kit,
            need help planning a pollinator garden, or have any questions for
            us, we’d love to hear&nbsp;from&nbsp;you.
          </p>
          <Spacer h="1.5rem" />
          <PrimaryButtonLink href="https://example.com">
            <span className={s.connectWithUs_button_iconAndText}>
              <img
                className={s.connectWithUs_button_icon}
                src="/uploads/Site-wide/icon-email.png"
                alt=""
              />
              Email us
            </span>
          </PrimaryButtonLink>
        </div>
      </div>
      <div className={s.volunteerOpportunities}>
        <div className={s.volunteerOpportunities_contents}>
          <h2 className={s.volunteerOpportunities_heading}>
            Volunteer with us!
          </h2>
          <Spacer h="1rem" />
          <p className={s.volunteerOpportunities_text}>
            Looking for a way to get involved with the Pollinator Pathways
            Project? We’d love your contribution! We’re currently looking for
            builders, writers, and gardeners. Email us to get started!
          </p>
        </div>
      </div>
      <ThreeFeatures
        items={[
          {
            // iconSr/c: "/uploads/Home Page/icon-house.png",
            title: "Builders",
            text: "We are looking for builders to help us with our pollinator gardens.  We are looking for experienced, and inexperienced alike.  We need help with building pollinator garden planter boxes.  We also have insect hotels to be made, these include bee, butterfly, and other insect homes.  Access to a woodworking shop of sorts is ideal.",
            // linkText: "Browse kits",
            // linkUrl: "/pollinator-kits",
          },
          {
            // iconSrc: "/uploads/Home Page/icon-potted-plant.png",
            title: "Writers",
            text: "We are looking for a writer to join our community group,  someone who can contribute a blog article (300-500 words) once a month or a social media post once a week. As a writer, you need not have extensive experience with writing. Ideally, you should have some interest in environmental conservation and protection of wild species.",
            // linkText: "Help me plan",
            // linkUrl: "/connect",
          },
          {
            // iconSrc: "/uploads/Home Page/icon-handshake.png",
            title: "Gardeners",
            text: "We are looking for volunteers to help keep our public gardens beautiful and pollinators happy by maintaining a good mix of pollinator plants and keeping the gardens tidy and watered. Gardener volunteers may help with weeding, watering, and planting. No experience necessary, we look forward to hearing from you!",
            // linkText: "Get in touch",
            // linkUrl: "/connect",
          },
        ]}
      />
      {/*<Placeholder name="Questions? Email us">
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							maxWidth: "30rem",
							margin: "0 auto",
							padding: "1rem",
						}}
					>
						<div style={{ textAlign: "center" }}>Questions? Email us</div>
						<Spacer h="1rem" />
						<PrimaryButtonLink
							href={`mailto:${ADMIN_EMAIL}?subject=${EMAIL_SUBJECT}`}
						>
							Email us
						</PrimaryButtonLink>
					</div>
				</Placeholder>*/}
      {/*<Placeholder name="Participate in Pollinator Map" />*/}
      {/*</PagePlaceholder>*/}
    </>
  );
}
