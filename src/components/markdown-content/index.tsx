import clsx from "clsx";
import { TinaMarkdown } from "tinacms/dist/rich-text";
// Components
import { ButtonLink } from "../primary-button-link";
// Styles
import s from "./markdown-content.module.css";
// Types
import type { Components, TinaMarkdownContent } from "tinacms/dist/rich-text";
import { stringFromTinaAst } from "@/app/projects/utils/string-from-tina-ast";
import { isValidElement, PropsWithChildren } from "react";
import type { ReactElement, ReactNode } from "react";

function mdA(props: $TSFixMe) {
	const { type, title, url, _content_source, children, ...restProps } = props;
	// Get text from children
	const childAstNodes = children.props?.content;
	const text = stringFromTinaAst({ type: "root", children: childAstNodes });
	// Determine if it's a PDF link based on both URL and text
	// NOTE: alternative might be to only let "link alone in paragraph"
	// be a PDF link, since these links don't display well inline...
	// But this seems fine for now, and author control is a little more direct.
	const isPdfLink = url?.endsWith(".pdf") && text?.endsWith(".pdf");

	if (isPdfLink) {
		const icon = "/uploads/Site-wide/icon-file.png";
		return (
			<ButtonLink
				{...restProps}
				styleVariant="primary"
				href={url}
				target="_blank"
			>
				<span className={s.mdA_iconAndText}>
					<img className={s.mdA_buttonIcon} src={icon} alt="" />
					{children}
				</span>
			</ButtonLink>
		);
	} else {
		return (
			<a {...restProps} href={url} className={s.mdA}>
				{children}
			</a>
		);
	}
}

/**
 * Custom blockquote component that makes up for TinaCMS's weird handling
 * of blockquotes in markdown.
 *
 * Tina's parser flattens blockquote content to inline nodes, so paragraphs
 * are lost. Authors can separate paragraphs with two hard breaks (`\` line
 * endings in markdown, shift+enter twice in the editor). We split on those
 * double breaks (or longer multi-line breaks) to render each paragraph as
 * a `<p>` tag, as markdown was kinda meant to work in blockquotes.
 *
 * Note that we expect `children` to be a <TinaMarkdown /> element wrapping
 * the blockquote's AST. If we don't find the `children` we expect, we
 * return early and bail from trying to add custom paragraph breaks.
 */
function mdBlockquote({ children }: PropsWithChildren<{}> = {}) {
	// If it's not a single element, or it's not `<TinaMarkdown />`, return early
	if (!isTinaMarkdownElement(children)) {
		return <blockquote>{children}</blockquote>;
	}
	// `children` is a <TinaMarkdown /> element wrapping the blockquote's AST
	const tinaAstNodes: TinaMarkdownContent[] = children.props.content;
	const paragraphs = splitNodesToParagraphs(tinaAstNodes);
	return (
		<blockquote>
			{paragraphs.map((paragraph, i) => (
				<p key={i}>
					<TinaMarkdown
						content={paragraph}
						components={markdownComponentMapping}
					/>
				</p>
			))}
		</blockquote>
	);
}

/**
 * Check whether a node is a single `<TinaMarkdown />` element with an
 * array of AST nodes as its `content`, which is how TinaMarkdown passes
 * `children` to custom components.
 */
function isTinaMarkdownElement(
	node: ReactNode,
): node is ReactElement<{ content: TinaMarkdownContent[] }> {
	const isSingleJsxElement = isValidElement<{ content?: unknown }>(node);
	return (
		isSingleJsxElement &&
		node.type === TinaMarkdown &&
		Array.isArray(node.props.content)
	);
}

/**
 * Given a flat list of inline Tina AST nodes, such as the children of a
 * blockquote, split them into paragraphs wherever two consecutive `break`
 * nodes appear.
 *
 * Double breaks and multi-line breaks are dropped, while single-line
 * breaks are maintained.
 *
 * @param {TinaMarkdownContent[]} nodes
 * @returns {TinaMarkdownContent[][]} An array of paragraphs, each an array
 * of inline nodes.
 */
function splitNodesToParagraphs(nodes: TinaMarkdownContent[]) {
	const paragraphsRaw: TinaMarkdownContent[][] = [];
	let currentParagraph: TinaMarkdownContent[] = [];
	let breakCounter = 0;
	for (let i = 0; i < nodes.length; i++) {
		const currentNode = nodes[i];
		// If we have a line break, count it, and move on
		const isBreak = currentNode.type === "break";
		if (isBreak) {
			breakCounter++;
			continue;
		}
		//
		// Handle single line breaks
		//
		// If we just came out of a single break, push a single break
		// node to the current paragraph before continuing
		const wasSingleBreak = breakCounter === 1;
		if (wasSingleBreak) {
			currentParagraph.push(nodes[i - 1]);
		}
		//
		// Handle paragraph construction around multi-line breaks
		//
		const wasMultiBreak = breakCounter > 1;
		if (wasMultiBreak) {
			paragraphsRaw.push(currentParagraph);
			currentParagraph = [];
		}
		// Push the current node to the current paragraph
		currentParagraph.push(currentNode);
		// Reset the line break counter
		breakCounter = 0;
	}
	paragraphsRaw.push(currentParagraph);
	// Filter out any empty paragraphs
	const paragraphs = paragraphsRaw.filter((e) => e.length > 0);
	return paragraphs;
}

const markdownComponentMapping: Components<{}> = {
	a: mdA,
	blockquote: mdBlockquote,
};

export function MarkdownContent({
	content,
	className,
}: {
	content: TinaMarkdownContent | TinaMarkdownContent[];
	className?: string;
}) {
	return (
		<div className={clsx(s.root, className)}>
			<TinaMarkdown content={content} components={markdownComponentMapping} />
		</div>
	);
}
