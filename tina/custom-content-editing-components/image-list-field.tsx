"use client";

import React from "react";
import { GroupListField } from "tinacms";

/**
 * Shape of each entry in an image list, eg `images` on a `project`.
 */
interface ImageListItem {
	src?: string;
	caption?: string;
}

/**
 * Drop-in replacement for Tina's default object list field, for lists of
 * `{ src, caption }` image objects.
 *
 * Tina's default list only shows a text label for each object, which makes
 * images hard to tell apart. This keeps Tina's own list (drag to reorder,
 * click to edit, delete, add), and swaps each item's label for an image
 * thumbnail with its caption underneath.
 *
 * Usage, on an object field with `list: true`:
 *   ui: { component: ImageListField }
 */
// Tina's schema types `ui.component` as if every field were a single string
// field, so we accept loosely-typed props here and cast them to what Tina
// actually passes to object list fields.
export function ImageListField(fieldProps: any) {
	const props = fieldProps as React.ComponentProps<typeof GroupListField>;
	const field = React.useMemo(
		() => ({
			...props.field,
			// Tina renders the item `label` as the children of the list item,
			// so a React node works here, even though it's typed as a string.
			itemProps: (item: ImageListItem) => ({
				label: (<ImageListItemLabel item={item} />) as unknown as string,
				// Tina only starts a drag once the handle has been held for a
				// moment. Moving sooner than that starts a native text and image
				// selection instead, which then gets in the way of later drags,
				// so we disable selection on each list item.
				className: "select-none",
			}),
		}),
		[props.field]
	);
	return <GroupListField {...props} field={field} />;
}

/**
 * Size of the square each thumbnail is contained within, in pixels.
 * Set inline, as Tina's admin uses a custom Tailwind spacing scale.
 */
const THUMBNAIL_SIZE = 80;

/**
 * Narrowest the caption can be beside the thumbnail, in pixels. With less
 * space than this, the caption wraps below the thumbnail instead.
 */
const CAPTION_MIN_WIDTH = 160;

/**
 * Small thumbnail with the caption beside it, for a single image list item.
 * The caption wraps below the thumbnail when space is limited.
 * Image styles are based on Tina's own image field preview.
 */
function ImageListItemLabel({ item }: { item: ImageListItem }) {
	const { src, caption } = item || {};
	return (
		<span className="flex flex-wrap items-center gap-3 py-1">
			<span
				className="flex flex-none items-center justify-center rounded shadow overflow-hidden bg-gray-100"
				style={{ width: THUMBNAIL_SIZE, height: THUMBNAIL_SIZE }}
			>
				{src ? (
					<img
						src={src}
						alt=""
						// Prevent native image dragging, which cancels Tina's drag
						draggable={false}
						className="block w-full h-full object-contain m-0"
					/>
				) : (
					<span className="text-center text-gray-300 font-normal">
						No image
					</span>
				)}
			</span>
			{caption ? (
				<span
					className="block min-w-0 whitespace-normal font-normal"
					style={{ flex: `1 1 ${CAPTION_MIN_WIDTH}px` }}
				>
					{caption}
				</span>
			) : (
				<span
					className="block min-w-0 font-normal italic text-gray-300"
					style={{ flex: `1 1 ${CAPTION_MIN_WIDTH}px` }}
				>
					No caption
				</span>
			)}
		</span>
	);
}
