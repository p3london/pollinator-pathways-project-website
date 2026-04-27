import { TinaMarkdownContent } from "tinacms/dist/rich-text";

/**
 * Given a TinaMarkdown AST node or nodes,
 * and an optional list of target node types to extract from,
 * Return the text content as a string.
 *
 * @param {TinaMarkdownContent | TinaMarkdownContent[]} nodeOrNodes
 * @param {string[]} targetTypes
 * @returns {string}
 */
export function extractTextFromTinaMarkdownNodes(
  nodeOrNodes: TinaMarkdownContent | TinaMarkdownContent[],
  targetTypes: string[] = []
): string {
  if (Array.isArray(nodeOrNodes)) {
    return nodeOrNodes
      .map((e) => extractTextFromTinaMarkdownNodes(e, targetTypes))
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
      .map((e) => extractTextFromTinaMarkdownNodes(e, targetTypes))
      .join("");
  } else {
    return "";
  }
}
