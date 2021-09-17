<script>
	import Header from '$lib/header.svelte';
</script>

<div class="bg-white dark:bg-gray-800 min-h-screen">
	<div class="p-8 max-w-6xl mx-auto">
		<Header />
		<main>
			<slot />
		</main>
	</div>
</div>

<style>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>
