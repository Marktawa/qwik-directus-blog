import { component$, Slot } from "@builder.io/qwik";
import { Link } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <>
        <nav>
          <Link href="/">Home</Link>{' | '}
          <Link href="/about">About</Link>{' | '}
          <Link href="/conduct">Code of Conduct</Link>{' | '}
          <Link href="/privacy">Privacy Policy</Link>{' | '}
          <Link href="/blog">Blog</Link>
        </nav>
        <main><Slot /></main>
    </>
  );
});
