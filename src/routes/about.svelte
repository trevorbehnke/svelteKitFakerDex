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
	<p>This is a really cool demo that uses that pokemon api to build a pokedex</p>
</section>
