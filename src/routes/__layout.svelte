<script>
	import Header from '$lib/header.svelte';
</script>

<div class="p-8 max-w-6xl mx-auto">
	<Header />
	<main>
		<slot />
	</main>
</div>

<style>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>
