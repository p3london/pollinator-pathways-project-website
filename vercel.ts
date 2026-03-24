import fs from "fs";
import path from "path";

import { type VercelConfig } from "@vercel/config/v1";

//
const IS_EDITABLE = process.env.NEXT_PUBLIC_EDITABLE === "true";

//
const DIR_CWD = process.cwd();
const DIR_REDIRECTS = path.join(DIR_CWD, "redirects");

const REDIRECTS_BASE = JSON.parse(
  fs.readFileSync(path.join(DIR_REDIRECTS, "redirects.json"), "utf8")
);
const REDIRECTS_TO_EDITABLE = JSON.parse(
  fs.readFileSync(path.join(DIR_REDIRECTS, "redirect-to-editable.json"), "utf8")
);

const REDIRECTS = IS_EDITABLE
  ? REDIRECTS_BASE
  : [...REDIRECTS_BASE, ...REDIRECTS_TO_EDITABLE];

export const config: VercelConfig = {
  cleanUrls: true,
  trailingSlash: false,
  redirects: REDIRECTS,
};
