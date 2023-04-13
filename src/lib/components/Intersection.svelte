<script lang="ts">
	let className = ''
	export { className as class }
	export let intersecting = false
	const container = (node: HTMLDivElement) => {
		const observer = new IntersectionObserver(entries => {
			entries.forEach(entry => (intersecting = entry.isIntersecting))
		})
		observer.observe(node)
		return {
			destroy: () => observer.disconnect()
		}
	}
</script>

<div class={className} use:container>
	<slot />
</div>
