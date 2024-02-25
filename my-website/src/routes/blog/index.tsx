import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";

import directus from '../../../lib/directus';
import { readItems } from '@directus/sdk';

export const useGetPosts = routeLoader$(async () => {
  return directus.request(
    readItems("posts", {
        fields: ['slug', 'title', 'publish_date', { author: ['name'] }],
		sort: ['-publish_date'],
    })
    );
});

export default component$(() => {
  const posts = useGetPosts().value;
  return (
    <div>
      <h1>Blog</h1>
      <ul>
			{posts.map((post) => {
				return (
					<li key={post.slug}>
						<h2>
						<a href={`/blog/${post.slug}`}>
							{post.title}
						</a>
						</h2>
						<span>
							{post.publish_date} &bull; {post.author.name}
						</span>
					</li>
				);
			})}
		</ul>
    </div>
  );
});