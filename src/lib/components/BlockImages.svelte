<script lang="ts">
	import Intersection from '$lib/components/Intersection.svelte'
	export let image1: string
	export let image2: string
	let intersecting = false
</script>

<Intersection bind:intersecting class="-mb-14 grid grid-cols-2 items-center">
	<div class="-mr-20 transition duration-1000 md:-mr-40" class:opacity-0={!intersecting} class:scale-75={!intersecting}>
		<img src={image1} alt="" />
	</div>
	<div class="transition duration-1000" class:opacity-0={!intersecting} class:scale-75={!intersecting}>
		<img src={image2} alt="" />
	</div>
</Intersection>
