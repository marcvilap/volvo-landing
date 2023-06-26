<script lang="ts">
	import Intersection from '$lib/components/Intersection.svelte'
	export let image1: string
	export let image2: string
	let intersecting = false
</script>

<Intersection bind:intersecting class="mx-auto -mb-8 grid max-w-3xl grid-cols-2 items-center">
	<div class="-mr-20 transition duration-1000 md:-mr-40" class:opacity-0={!intersecting} class:scale-75={!intersecting}>
		<img class="w-full" src={image1} loading="lazy" decoding="async" alt="" />
	</div>
	<div class="transition duration-1000" class:opacity-0={!intersecting} class:scale-75={!intersecting}>
		<img class="w-full" src={image2} loading="lazy" decoding="async" alt="" />
	</div>
</Intersection>
