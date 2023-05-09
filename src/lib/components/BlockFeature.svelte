<script lang="ts">
	import Intersection from '$lib/components/Intersection.svelte'
	export let number: string
	export let title: string
	export let description: string
	export let right = false
	let intersecting = false
</script>

<Intersection bind:intersecting>
	<div class="relative mb-20 max-w-4xl gap-8 md:flex" class:ml-auto={right}>
		<span
			class="text-7xl font-bold leading-[.7] text-[#F8EBC0] transition duration-1000 md:text-[15rem]"
			class:opacity-0={!intersecting}
			class:-translate-x-24={!intersecting}>{number}</span
		>
		<div class="transition duration-1000" class:opacity-0={!intersecting} class:translate-x-24={!intersecting}>
			<h3 class="font-display text-3xl max-md:mt-4 md:text-5xl">{title}</h3>
			<p>{@html description}</p>
		</div>
	</div>
</Intersection>
