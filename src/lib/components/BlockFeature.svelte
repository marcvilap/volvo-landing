<script lang="ts">
	import Intersection from '$lib/components/Intersection.svelte'
	export let number: string
	export let title: string
	export let description: string
	export let right = false
	let intersecting = false
</script>

<Intersection bind:intersecting class="mx-auto max-w-4xl">
	<div class="relative mb-24 max-w-2xl gap-8 md:flex" class:ml-auto={right}>
		<span
			class="text-7xl font-bold leading-[.7] text-[#F8EBC0] transition duration-1000 md:text-[10rem]"
			class:opacity-0={!intersecting}
			class:-translate-x-24={!intersecting}>{number}</span
		>
		<div class="transition duration-1000" class:opacity-0={!intersecting} class:translate-x-24={!intersecting}>
			<h3 class="font-display text-3xl max-md:mt-4">{title}</h3>
			<p>{@html description}</p>
		</div>
	</div>
</Intersection>
