import { component$ } from "@builder.io/qwik";
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


