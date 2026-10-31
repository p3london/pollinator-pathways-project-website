"use client";

import { useTina } from "tinacms/dist/react";
import PageComponent from "./page-component";

/**
 * Note: this component is meant to be identical for any page editable with
 * TinaCMS. I've been bashing my head against trying to find a way to cleanly
 * abstract this pattern, but I haven't been able to come up with anything.
 */
export function PageWithTinaHook({ tina }: any) {
  const { data } = useTina(tina) as { data: any };
  return <PageComponent data={data} />;
}
