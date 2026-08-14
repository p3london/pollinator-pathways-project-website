// Components
import { MarkdownContent } from "@/components/markdown-content";
import { PageTitle } from "@/components/page-title";
import { ImageGrid } from "@/components/image-grid";
import Spacer from "@/components/spacer";
// Utils
import { stringFromTinaAst } from "../utils/string-from-tina-ast";
// Styles
import s from "./project-entry.module.css";
// Types
import { ProjectQuery } from "../../../../tina/__generated__/types";

export default function PageServer({ data }: { data: ProjectQuery }) {
	const { body, title, images, date, dateString } = data.project;

	const dateDisplay = dateString ? dateString : null;
	const bodyContentString = stringFromTinaAst(body);
	const hasBodyContent = bodyContentString.trim() !== "";

	return (
		<div className={s.root}>
			<Spacer h="2rem" />
			{dateDisplay ? (
				<div className={s.metadataContainer}>
					<div className={s.metadata}>
						<div className={s.dateDisplay}>{dateDisplay}</div>
					</div>
				</div>
			) : null}

			<PageTitle>{title}</PageTitle>

			<Spacer h="2rem" />

			{Array.isArray(images) ? (
				<div className={s.projectImages}>
					<ImageGrid images={images} />
				</div>
			) : null}

			<Spacer h="2rem" />

			{hasBodyContent ? (
				<div className={s.projectBody}>
					<MarkdownContent content={body} />
				</div>
			) : null}

			<Spacer h="8rem" />
		</div>
	);
}
