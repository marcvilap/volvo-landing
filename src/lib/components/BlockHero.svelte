<script lang="ts">
	import Intersection from '$lib/components/Intersection.svelte'
	export let image = ''
	export let video = ''
	export let text1 = ''
	export let text2 = ''
	export let text3 = ''
	export let text4 = ''
	let intersecting = false
</script>

<div class="relative bg-[#057C76] text-center text-white">
	{#if image}
		<img class="absolute left-0 top-0 h-full w-full object-cover" src={image} alt="" />
	{/if}
	{#if video}
		<video
			class="absolute left-0 top-0 h-full w-full object-cover opacity-80"
			src={video}
			autoplay
			loop
			muted
			playsinline
		/>
	{/if}

	<Intersection bind:intersecting class="container relative flex min-h-screen flex-col items-center pb-8 pt-24">
		<a class="animate-scale mb-8 w-14 self-start" href="https://www.eltiempo.es/bc/pioneros/">
			<svg viewBox="0 0 90 90">
				<circle fill="#f8ebc0" cx="45" cy="45" r="45" />
				<path
					fill="#034541"
					d="M64.9 62.98H34.3l.01-3.23h27.35V40.17l-16.15-14.8-16.28 14.8V54.6H26V38.74L45.51 21 64.9 38.75v24.23Zm-33.2-5.77v5.7H26v-5.7h5.7Z"
				/>
			</svg>
		</a>

		<div class="my-auto transition duration-1000" class:opacity-0={!intersecting} class:translate-y-24={!intersecting}>
			{#if text1}
				<h2 class="mb-8 text-xl uppercase">{text1}</h2>
			{/if}
			{#if text2}
				<h1 class="mx-auto mb-8 max-w-4xl font-display text-5xl">{text2}</h1>
			{/if}
			{#if text3}
				<h3 class="mx-auto mb-8 max-w-2xl text-3xl font-bold uppercase">{text3}</h3>
			{/if}
			{#if text4}
				<p class="mx-auto max-w-xl">{text4}</p>
			{/if}
		</div>

		<a class="mt-8 w-6 animate-bounce" href="#down">
			<svg viewBox="0 0 56 74" fill="#F8EBC0">
				<path
					d="m46.7.4 8.9 9a1.5 1.5 0 0 1 0 2L29 38.3c-.5.6-1.5.6-2 0L.4 11.5a1.5 1.5 0 0 1 0-2.1l9-9c.5-.5 1.4-.5 2 0L28 17.1 44.6.4a1.5 1.5 0 0 1 2 0Zm-1 3.2L29 20.3a1.5 1.5 0 0 1-2 0L10.4 3.6l-6.8 6.8L28 35l24.4-24.6-6.8-6.8Zm1 32.2 8.9 9a1.5 1.5 0 0 1 0 2L29 73.7c-.5.5-1.5.5-2 0L.4 46.9a1.5 1.5 0 0 1 0-2.2l9-8.9c.5-.6 1.4-.6 2 0L28 52.5l16.6-16.7c.6-.6 1.5-.6 2 0Zm-1 3.2L29 55.7a1.5 1.5 0 0 1-2 0L10.4 39l-6.8 6.8L28 70.4l24.4-24.6-6.8-6.8Z"
				/>
			</svg>
		</a>
	</Intersection>
</div>
<div id="down" class="h-[1px]" />
