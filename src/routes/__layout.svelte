<script>
	import Header from '$lib/header.svelte';
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Patrick+Hand&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div class="text-black dark:text-white bg-white dark:bg-gray-900 min-h-screen">
	<div class="p-8 max-w-6xl mx-auto">
		<Header />
		<main>
			<slot />
		</main>
	</div>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Montserrat');

	@tailwind base;
	@tailwind components;
	@tailwind utilities;

	* {
		font-family: 'Montserrat';
	}
</style>
