// Utils
import { extractTextFromTinaMarkdownNodes } from "./extract-text-from-tina-markdown-nodes";
// Types
import { TinaMarkdownContent } from "tinacms/dist/rich-text";

type TinaMarkdownAst = TinaMarkdownContent | TinaMarkdownContent[];

/**
 * Given a Tina Markdown AST, returns an excerpt with a specific character length.
 *
 * @param {TinaMarkdownAst} tinaMarkdownAst - The Tina Markdown AST to excerpt.
 * @param {number} maxLength - The maximum number of characters to include in the excerpt.
 * @returns {string} The excerpted Tina Markdown AST.
 */
export function getTinaMarkdownExcerpt(
  tinaMarkdownAst: TinaMarkdownAst,
  maxLength: number
): string {
  const paragraphTextFromNodes = extractTextFromTinaMarkdownNodes(
    tinaMarkdownAst,
    ["root", "p"]
  );
  // Extract words from the paragraph text, stopping before the maxLength
  const excerptWords = [];
  const words = paragraphTextFromNodes.split(" ");
  for (const word of words) {
    if (excerptWords.join(" ").length + word.length + 1 <= maxLength) {
      excerptWords.push(word);
    } else {
      break;
    }
  }
  return excerptWords.join(" ");
}
