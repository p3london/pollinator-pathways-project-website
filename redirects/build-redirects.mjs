import fs from "fs";
import path from "path";
import dotenv from "dotenv";

dotenv.config();

const IS_EDITABLE = process.env.NEXT_PUBLIC_EDITABLE === "true";

const DIR_CWD = process.cwd();
const DIR_REDIRECTS = path.join(DIR_CWD, "redirects");
const FP_VERCEL_JSON = path.join(DIR_CWD, "vercel.json");
const FP_REDIRECTS = path.join(DIR_REDIRECTS, "redirects.json");
const FP_REDIRECT_TO_EDITABLE = path.join(
  DIR_REDIRECTS,
  "redirect-to-editable.json"
);

main();

async function main() {
  const vercelJson = JSON.parse(fs.readFileSync(FP_VERCEL_JSON, "utf8"));
  //
  //
  const redirectsBase = JSON.parse(fs.readFileSync(FP_REDIRECTS, "utf8"));
  //
  const redirectsAdditional = [];
  if (!IS_EDITABLE) {
    const redirectToEditable = JSON.parse(
      fs.readFileSync(FP_REDIRECT_TO_EDITABLE, "utf8")
    );
    redirectsAdditional.push(...redirectToEditable);
  }
  //
  vercelJson.redirects = [...redirectsBase, ...redirectsAdditional];
  //
  fs.writeFileSync(FP_VERCEL_JSON, JSON.stringify(vercelJson, null, 2), "utf8");
}
