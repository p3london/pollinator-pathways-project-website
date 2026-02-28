// Components
import Footer from "@/components/footer/footer";
import Min100Layout from "@/components/min-100-layout/min-100-layout";
import NavBar from "@/components/nav-bar/nav-bar";
import SiteHeader from "@/components/site-header/site-header";
// Font faces
import { Inter, Orelega_One, Lato } from "next/font/google";
// Styles
import "../styles/reset.css";
import "../styles/custom-properties.css";
import "../styles/globals.css";
import { CSSProperties } from "react";

const inter = Inter({ subsets: ["latin"] });
const gFontLato = Lato({ weight: "400", subsets: ["latin"] });
const orelegaOne = Orelega_One({ weight: "400", subsets: ["latin"] });

const fontFamilyCssVariables = {
  "--font-display": `${orelegaOne.style.fontFamily}`,
  "--font-body": `${inter.style.fontFamily}`,
} as CSSProperties;

export const metadata = {
  title: "Pollinator Pathways Project | London",
  description:
    "Pollinator Pathways Project is a grassroots community organization started in London, Canada that educates how to grow a pollinator garden.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={fontFamilyCssVariables} className={gFontLato.className}>
        {children}
      </body>
    </html>
  );
}
