<script>
	// On page load or when changing themes, best to add inline in `head` to avoid FOUC
	if (
		localStorage.theme === 'dark' ||
		(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
	) {
		document.documentElement.classList.add('dark');
	} else {
		document.documentElement.classList.remove('dark');
	}

	// Whenever the user explicitly chooses light mode
	localStorage.theme = 'light';

	// Whenever the user explicitly chooses dark mode
	localStorage.theme = 'dark';

	// Whenever the user explicitly chooses to respect the OS preference
	localStorage.removeItem('theme');
</script>

<div>
	<input type="checkbox" name="" id="checkbox" class="hidden" />
	<label for="checkbox" class="cursor-pointer">
		<div class="w-9 h-5 flex items-center bg-gray-300 rounded-full p2">
			<div class="w-4 h-4 bg-white rounded-full shadow" />
		</div>
	</label>
</div>
