"use server";

// Third-party
import clsx from "clsx";
// Utils
import { fetchProjectsList } from "../../utils/fetch-projects-list";
import Link from "next/link";
// Styles
import s from "./style.module.css";

export async function ProjectEntriesList() {
  const projectEntries = await fetchProjectsList();

  return (
    <>
      {/* Note: removed category display for now, not needed yet */}
      {/*<BlogCategoryLinks blogCategories={blogCategories} />*/}
      {projectEntries.length > 0 ? (
        <ul className={s.projectEntriesList}>
          {projectEntries.map((entry) => (
            <li key={entry.filename}>
              <Link href={`/projects/${entry.filename}`}>{entry.title}</Link>
            </li>
          ))}
        </ul>
      ) : (
        <p className={s.noEntries}>
          No blog entries found. <Link href="/projects">View all projects</Link>
          .
        </p>
      )}
    </>
  );
}
