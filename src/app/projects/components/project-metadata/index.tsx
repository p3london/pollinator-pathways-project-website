import s from "./style.module.css";

export function ProjectMetadata({ metadata }: { metadata: { date: string } }) {
	const { date } = metadata;
	return (
		<div className={s.metadata}>
			{/*<div className={s.author}>
        <div className={s.authorIcon}>🌻</div>
        <div className={s.authorName}>{author}</div>
      </div>*/}
			{/*<div className={s.metadataDivider}>•</div>*/}
			<div className={s.date}>{date}</div>
			{/* TODO: actually implement reading time */}
			{/*<div className={s.metadataDivider}>•</div>*/}
			{/*<div className={s.readingTime}>{`2 min read`}</div>*/}
		</div>
	);
}
