<script>
	// import { fade } from 'svelte/transition';
	export let pokeman;
</script>

<a
	class="list-none p-6 text-black dark:text-white bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-center rounded-md shadow-sm hover:shadow-md hover:bg-gray-300 flex flex-col items-center"
	href={`/pokemon/${pokeman.id}`}
>
	<img class="h-40 w-40 " src={pokeman.image} alt={pokeman.name} />
	<h2 class="uppercase text-2xl">{pokeman.id}. {pokeman.name}</h2>
</a>
