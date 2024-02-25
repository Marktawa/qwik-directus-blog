import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";

import directus from '../../../lib/directus';
import { readItem } from '@directus/sdk';

export const useGetPages = routeLoader$(async ({ params, status }) => {
  try {
    const page = await directus.request(readItem('pages', params.slug));
    return page;
  } catch(error) {
    status(404);
  }
});

export default component$(() => {
  const page = useGetPages().value;
  return (
    <>
      <h1>{page.title}</h1>
      <div dangerouslySetInnerHTML={page.content}></div>
    </>
  );
});