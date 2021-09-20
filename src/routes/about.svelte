<script context="module">
	import { browser, dev } from '$app/env';
	export const hydrate = dev;
	export const router = browser;
	export const prerender = true;
</script>

<svelte:head>
	<title>About</title>
</svelte:head>

<section>
	<h1 class="text-4xl text-center my-8 uppercase">About</h1>
	<p>
		This is a really cool demo app built using SvelteKit Public Beta. You can search a large set of
		users almost instantaneously. Clicking a user will dynamically route to the specific user page
		with more information. I used Tailwind CSS and Daisy UI for the styling. Deployed on Netlify.
	</p>
</section>
