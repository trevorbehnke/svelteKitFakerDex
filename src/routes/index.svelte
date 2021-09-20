<script context="module">
	export async function load({ fetch }) {
		const res = await fetch('/api');

		if (res.ok) return { props: { users: await res.json() } };
		return {
			status: res.status,
			error: new Error()
		};
	}
</script>

<script>
	export let users;
	let searchTerm = '';
	let filteredList = [];
	$: {
		if (searchTerm) {
			filteredList = users.filter((user) =>
				user.lastName.toLowerCase().includes(searchTerm.toLowerCase())
			);
		} else {
			filteredList = [...users];
		}
	}
</script>

<svelte:head>
	<title>FakerDex</title>
</svelte:head>

<section>
	<h1 class="text-4xl text-center my-8">SvelteKit FakerDex</h1>
	<input
		class="w-full rounded-md text-lg p-4 border-2 text-black"
		bind:value={searchTerm}
		placeholder="Search Users..."
	/>

	<main>
		{#each filteredList as { avatar, lastName }}
			<a sveltekit:prefetch href={`/${lastName}`} class="box">
				<img src={avatar} alt={lastName} />
				<h2>{lastName}</h2>
			</a>
		{/each}
	</main>
</section>

<style>
	main {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}
	.box {
		padding: 0.25rem;
		margin: 1.5rem;
		color: salmon;
		box-shadow: 4px 5px 11px 2px lightgray;
	}
	.box:hover {
		box-shadow: 4px 5px 11px 10px lightgray;
	}
	img {
		width: 10rem;
		object-fit: contain;
	}
</style>
