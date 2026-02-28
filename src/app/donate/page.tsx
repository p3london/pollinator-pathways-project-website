import LayoutRoot from "@/components/layout-root";
import getSitewideData from "@/lib/get-sitewide-data";
import HtmlEmbed from "./html-embed";
import s from "./donate-page.module.css";

/**
 * TODO: make this an input in TinaCMS, so that the embed code can be changed.
 * Also wire up the heading and subheading.
 */
const ZEFFY_FORM_EMBED = `<div style="position:relative;overflow:hidden;height:1500px;width:100%;"><iframe title='Donation form powered by Zeffy' style='position: absolute; border: 0; top:0;left:0;bottom:0;right:0;width:100%;height:100%' src='https://www.zeffy.com/embed/donation-form/48743740-4ed5-4402-a81b-20be4e41f4b3' allowpaymentrequest allowTransparency="true"></iframe></div>`;

export default async function Page() {
  const { footer } = await getSitewideData();
  return (
    <LayoutRoot footer={footer} pathname="/donate">
      <div className={s.background}>
        <div className={s.main}>
          <div className={s.titleAndSubheading}>
            <h1 className={s.title}>Donate</h1>
            <p className={s.subheading}>
              Donating helps us build more gardens, and keep our ecosystems
              healthy.
            </p>
          </div>
          <HtmlEmbed html={ZEFFY_FORM_EMBED} />
        </div>
      </div>
    </LayoutRoot>
  );
}
