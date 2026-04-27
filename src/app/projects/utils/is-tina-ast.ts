// Types
import type { TinaMarkdownContent } from "tinacms/dist/rich-text";

/**
 * Given an unknown value, determine whether
 * the value is a TinaMarkdownContent AST, and if so,
 * Return `true`, with a type assertion.
 *
 * @param {unknown} maybeAst
 * @returns {boolean}
 */
export function isTinaAst(maybeAst: unknown): maybeAst is TinaMarkdownContent {
  return (
    typeof maybeAst === "object" &&
    maybeAst !== null &&
    "type" in maybeAst &&
    "children" in maybeAst &&
    Array.isArray(maybeAst.children)
  );
}
