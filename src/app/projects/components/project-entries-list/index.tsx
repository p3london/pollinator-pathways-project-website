// Components
import { ProjectCard } from "../project-card";
// Styles
import s from "./style.module.css";

export function ProjectEntriesList({
  projectEntries,
}: {
  projectEntries: $TSFixMe;
}) {
  return (
    <div className={s.root}>
      {/* Note: removed category display for now, not needed yet */}
      {/*<BlogCategoryLinks blogCategories={blogCategories} />*/}
      {projectEntries.length > 0 ? (
        <ul className={s.projectEntriesList}>
          {projectEntries.map((entry: $TSFixMe) => (
            <li key={entry.filename}>
              <ProjectCard entry={entry} />
              {/*<Link href={`/projects/${entry.filename}`}>{entry.title}</Link>*/}
            </li>
          ))}
        </ul>
      ) : (
        <p className={s.noEntries}>No projects yet. Check back soon!</p>
      )}
    </div>
  );
}
