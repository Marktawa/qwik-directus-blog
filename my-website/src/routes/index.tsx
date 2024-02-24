import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { routeLoader$ } from "@builder.io/qwik-city";

import directus from '../../lib/directus';
import { readItems } from '@directus/sdk';

export const useGetGlobals = routeLoader$(async () => {
  return directus.request(readItems("global"));
});

export default component$(() => {
  const global = useGetGlobals().value;
  return (
    <>
      <h1>{global.title}</h1>
      <p>{global.description}</p>
    </>
  );
});

export const head: DocumentHead = {
  title: "Directus Rocks",
  meta: [
    {
      name: "description",
      content: "This is a fake website used as part of a demo for Directus + Qwik City using @directus/sdk",
    },
  ],
};
