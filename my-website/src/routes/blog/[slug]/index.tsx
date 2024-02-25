import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";

import directus from '../../../../lib/directus';
import { readItem } from '@directus/sdk';

export const useGetPost = routeLoader$(async ({ params, status }) => {
	try {
		const post = await directus.request(
			readItem('posts', params.slug, {
				fields: ['*', { image: ['filename_disk'], author: ['name'] }],
			})
		);

		return post;
	} catch(error) {
		status(404);
	}
});

export default component$(() => {
	const post = useGetPost().value;
	return (
		<>
			<img src={`${directus.url}assets/${post.image.filename_disk}?width=600`} alt="" />
			<h1>{post.title}</h1>
			<div dangerouslySetInnerHTML={post.content}></div>
		</>
	);
});
