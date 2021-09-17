<script>
	import { page } from '$app/stores';
	import ThemeToggle from './themeToggle.svelte';
</script>

<nav>
	<ul class="flex justify-center w-full">
		<li class:active={$page.path === '/'}>
			<a class="mx-4 text-lg" href="/">Home</a>
		</li>
		<li class:active={$page.path === '/about'}>
			<a class="mx-4 text-lg" href="/about">About</a>
		</li>
		<li>
			<ThemeToggle />
		</li>
	</ul>
</nav>

<style>
	.active {
		border-bottom: 2px solid red;
	}
</style>
