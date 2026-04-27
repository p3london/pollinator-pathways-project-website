// Types
import type { TinaMarkdownContent } from "tinacms/dist/rich-text";
import { isTinaAst } from "./is-tina-ast";

/**
 * Given a TinaMarkdown AST,
 * Return the text content as a string.
 *
 * @param {TinaMarkdownContent}
 * @returns {string}
 */
export function stringFromTinaAst(ast: TinaMarkdownContent): string {
  if (!isTinaAst(ast)) {
    return "";
  }
  return ast.children
    .map((child) => {
      if ("text" in child) {
        return child.text;
      }
      if ("children" in child) {
        return stringFromTinaAst(child);
      }
      return "";
    })
    .join("");
}
