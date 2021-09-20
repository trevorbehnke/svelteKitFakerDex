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

<main>
	<h1 class="text-4xl text-center my-8">SvelteKit FakerDex</h1>
	<input
		class="w-full rounded-md text-lg p-4 border-2 text-black"
		bind:value={searchTerm}
		placeholder="Search Users..."
	/>
	<div class="py-4 grid gap-4 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2">
		{#each filteredList as { avatar, lastName }}
			<a
				sveltekit:prefetch
				href={`/${lastName}`}
				class="box list-none p-6 text-black dark:text-white bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-center rounded-md shadow-sm hover:shadow-md hover:bg-gray-300 flex flex-col items-center"
			>
				<img src={avatar} alt={lastName} />
				<h2>{lastName}</h2>
			</a>
		{/each}
	</div>
</main>
