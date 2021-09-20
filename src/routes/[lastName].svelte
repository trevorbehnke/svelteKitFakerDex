<script context="module">
	export async function load({ fetch, page }) {
		const { lastName } = page.params;
		const res = await fetch(`/api/${lastName}`);

		if (res.ok) return { props: { user: await res.json() } };
		return {
			status: res.status,
			error: new Error()
		};
	}
</script>

<script>
	export let user;
</script>

<main class="flex justify-center">
	<div class="card bordered flex items-center justify-center mt-12">
		<div class="w-72">
			<figure>
				<img src={user.avatar} alt={user.lastName} class="w-full mt-12" />
			</figure>
		</div>
		<div class="card-body">
			<h2 class="card-title">{user.firstName} {user.lastName}</h2>
			<ul>
				<li><strong>Title: </strong>{user.title}</li>
				<li><strong>Phone: </strong>{user.phone}</li>
				<li><strong>Email: </strong>{user.email}</li>
			</ul>
			<div class="card-actions">
				<div class="badge badge-ghost">{user.cpa}</div>
				<div class="badge badge-ghost">{user.noun}</div>
			</div>
		</div>
	</div>
</main>
