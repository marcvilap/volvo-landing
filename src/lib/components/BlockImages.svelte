<script lang="ts">
	import Intersection from '$lib/components/Intersection.svelte'
	export let image1: string
	export let image2: string
	let intersecting = false
</script>

<Intersection bind:intersecting class="grid items-center grid-cols-2 -mb-14">
	<div class="transition duration-1000 -mr-20 md:-mr-40" class:opacity-0={!intersecting} class:scale-75={!intersecting}>
		<img src={image1} alt="" />
	</div>
	<div class="transition duration-1000" class:opacity-0={!intersecting} class:scale-75={!intersecting}>
		<img src={image2} alt="" />
	</div>
</Intersection>
