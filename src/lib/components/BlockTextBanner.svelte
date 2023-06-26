<script lang="ts">
	import Intersection from '$lib/components/Intersection.svelte'
	export let image: string
	export let text: string
	let intersecting = false
</script>

<div class="relative flex min-h-[32rem] items-center py-24 text-center text-white">
	<img class="absolute left-0 top-0 h-full w-full object-cover" src={image} loading="lazy" decoding="async" alt="" />
	<Intersection bind:intersecting class="container relative">
		<h3
			class="mx-auto max-w-4xl text-2xl font-bold transition duration-1000 md:text-4xl"
			class:opacity-0={!intersecting}
			class:translate-y-24={!intersecting}
		>
			{text}
		</h3>
	</Intersection>
</div>
