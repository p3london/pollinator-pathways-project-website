import EmailSubscribeForm from "@/components/email-subscribe-form/email-subscribe-form";
import s from "./footer.module.css";
import PrimaryButtonLink from "../primary-button-link";
import VisuallyHidden from "../visually-hidden";

/**
 * TODO: remove placeholders once all pages are wired up
 */
function Footer({
  links = [],
  pathname,
}: {
  links?: $TSFixMe[];
  pathname?: string;
}) {
  const isEditablePage =
    typeof pathname === "string" && !["/projects"].includes(pathname);

  return (
    <>
      <div className={s.root}>
        <div className={s.content}>
          {/*<EmailSubscribeForm
            subscribeHeading={subscribeHeading}
            subscribePlaceholder={subscribePlaceholder}
          />*/}
          <ul className={s.list}>
            {links.map(
              ({ text, url, icon, showIconOnly }: $TSFixMe, idx: number) => (
                <li key={idx}>
                  <PrimaryButtonLink
                    href={url}
                    target="_blank"
                    className={showIconOnly ? s.iconOnlyButton : ""}
                  >
                    <span className={s.iconAndText}>
                      <img className={s.buttonIcon} src={icon} alt="" />
                      {showIconOnly ? (
                        <VisuallyHidden>{text}</VisuallyHidden>
                      ) : (
                        text
                      )}
                    </span>
                  </PrimaryButtonLink>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
      <div className={s.lowerFooterBarRoot}>
        <div className={s.lowerFooterBar}>
          <div>© 2026</div>
          <a
            className={s.lowerFooterBarLink}
            href={
              isEditablePage
                ? `/admin/index.html#/~${pathname}`
                : "/admin/index.html"
            }
            target="_blank"
            // Tell search engines not to follow this link,
            // as edit links are meant for site editors only
            rel="nofollow"
          >
            {isEditablePage ? "Edit this page" : "Edit this website"}&nbsp;
            <span style={{ fontFamily: "var(--font-system-sans)" }}>↗</span>
          </a>
        </div>
      </div>
    </>
  );
}

export default Footer;
