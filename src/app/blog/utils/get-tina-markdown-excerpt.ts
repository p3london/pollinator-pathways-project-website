import { TinaMarkdownContent } from "tinacms/dist/rich-text";

type TinaMarkdownAst = TinaMarkdownContent | TinaMarkdownContent[];

/**
 * Given a Tina Markdown AST, returns an excerpt with a specific character length.
 *
 * @param {TinaMarkdownAst} tinaMarkdownAst - The Tina Markdown AST to excerpt.
 * @param {number} maxLength - The maximum number of characters to include in the excerpt.
 * @returns {string} The excerpted Tina Markdown AST.
 */
function getTinaMarkdownExcerpt(
  tinaMarkdownAst: TinaMarkdownAst,
  maxLength: number
): string {
  const paragraphTextFromNodes = extractTextFromNodes(tinaMarkdownAst, [
    "root",
    "p",
  ]);
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

function extractTextFromNodes(
  nodeOrNodes: TinaMarkdownAst,
  targetTypes: string[] = []
): string {
  if (Array.isArray(nodeOrNodes)) {
    return nodeOrNodes
      .map((e) => extractTextFromNodes(e, targetTypes))
      .join("")
      .trim();
  } else if ("text" in nodeOrNodes && typeof nodeOrNodes.text === "string") {
    return nodeOrNodes.text + " ";
  } else if ("children" in nodeOrNodes && Array.isArray(nodeOrNodes.children)) {
    const isTarget =
      targetTypes.length === 0 || targetTypes.includes(nodeOrNodes.type);
    if (!isTarget) {
      return "";
    }
    return nodeOrNodes.children
      .map((e) => extractTextFromNodes(e, targetTypes))
      .join("");
  } else {
    // TODO: maybe throw error here, this is a bit unexpected!
    return "";
  }
}

export default getTinaMarkdownExcerpt;
