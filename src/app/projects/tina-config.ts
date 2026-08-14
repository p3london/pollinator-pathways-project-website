// Tina CMS Client
import client from "../../../tina/__generated__/client";
// Utils
import { slugifyForTina } from "../../lib/slugify-for-tina";
// Types
import type { Collection } from "tinacms";
import { fetchProjectsList } from "./utils/fetch-projects-list";

/**
 * Fetch data for this specific page. Varies from page to page.
 * Exported for use in `_edit` pages.
 */
export async function tinaQuery() {
	return await client.queries.projectsLanding({
		relativePath: "projects-landing.json",
	});
}

/**
 * Fetch data that does not need to be directly editable in TinaCMS
 */
export async function getServerProps() {
	const projectEntries = await fetchProjectsList();
	return { projectEntries };
}

export const tinaConfigProjectsLanding: Collection = {
	name: "projectsLanding",
	label: "Projects Landing",
	path: "content/projects-landing",
	format: "json",
	ui: {
		allowedActions: {
			create: true,
			delete: true,
		},
		router: () => `/projects`,
	},
	fields: [
		{
			type: "string",
			name: "title",
			label: "Title",
			required: true,
		},
		{
			type: "string",
			name: "subtitle",
			label: "Subtitle",
			required: false,
		},
		{
			type: "string",
			name: "currentProjectsTitle",
			label: "Current Projects Title",
			required: true,
		},
		{
			type: "string",
			name: "currentProjectsSubtitle",
			label: "Current Projects Subtitle",
			required: false,
		},
		{
			type: "string",
			name: "pastProjectsTitle",
			label: "Past Projects Title",
			required: true,
		},
		{
			type: "string",
			name: "pastProjectsSubtitle",
			label: "Past Projects Subtitle",
			required: false,
		},
	],
};

/**
 * Define the shape of this data in the CMS.
 * This is the data that ultimately gets saved to a JSON file.
 */
export const tinaConfigProjects: Collection = {
	name: "project",
	label: "Projects",
	path: "content/projects",
	fields: [
		{
			type: "string",
			name: "title",
			label: "Title",
			isTitle: true,
			required: true,
		},
		{
			type: "image",
			name: "coverImage",
			label: "Cover Image",
			required: false,
		},
		{
			type: "string",
			name: "coverImageAlt",
			label: "Cover Image Description",
			required: false,
		},
		{
			type: "datetime",
			name: "date",
			label: "Date for sorting",
		},
		{
			type: "string",
			name: "dateString",
			label: "Date for display",
		},
		{
			type: "string",
			name: "projectStatus",
			label: "Project Status",
			options: [
				{ label: "Current", value: "current" },
				{ label: "Past", value: "past" },
			],
		},
		{
			type: "string",
			name: "shortDescription",
			label: "Short Description",
		},
		{
			type: "rich-text",
			name: "body",
			label: "Body",
			isBody: true,
		},
		{
			type: "image",
			label: "Images",
			name: "images",
			list: true,
		},
	],
	ui: {
		router: ({ document }) => `/projects/${document._sys.filename}`,
		filename: {
			// Disable slug editing, it causes more confusion than it's worth.
			// If we ever need to change the slug of a post, we can do so
			// manually... but it's rarely a good idea, because it breaks links.
			readonly: true,
			// Custom slugify function, default does not lower-case
			slugify: (values) => slugifyForTina(values?.title),
		},
	},
};
