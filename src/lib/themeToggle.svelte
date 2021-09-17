<script>
	function toggle() {
		window.document.body.classList.toggle('dark');
	}
</script>

<div class="flex justify-end items-center space-x-2 mx-auto relative">
	<span class="text-xs font-extralight">Light </span>
	<div>
		<input type="checkbox" name="checkbox" id="checkbox" class="hidden" on:change={toggle} />
		<label for="checkbox" class="cursor-pointer">
			<div class="w-9 h-5 flex items-center bg-gray-300 rounded-full p2">
				<div class="w-4 h-4 bg-white rounded-full shadow switch-ball" />
			</div>
		</label>
	</div>
	<span class="text-xs font-semibold">Dark</span>
</div>

<style>
	#checkbox:checked + label .switch-ball {
		background-color: white;
		transform: translateX(18px);
		transition: transform 0.2s ease-in-out;
	}
</style>
