<script lang="ts">
	import { onMount } from 'svelte'
	import Swiper from 'swiper'
	import 'swiper/css'
	import bgNav from '$lib/assets/images/bg-nav.jpg'
	import circle01 from '$lib/assets/images/circle01.svg'
	import circle02 from '$lib/assets/images/circle02.svg'
	import circle03 from '$lib/assets/images/circle03.png'
	import circle04 from '$lib/assets/images/circle04.svg'
	let theSwiper: HTMLDivElement
	let swiper: Swiper
	onMount(() => {
		swiper = new Swiper(theSwiper, {
			modules: [],
			slidesPerView: 1,
			spaceBetween: 32,
			loop: true,
			breakpoints: {
				720: {
					slidesPerView: 2,
					spaceBetween: 32,
				},
				1024: {
					slidesPerView: 3,
					spaceBetween: 32,
				},
			},
		})
	})

	const items = [
		{
			title: 'For Life',
			description:
				'El nuevo posicionamiento de Volvo que nos hace recordar los inventos que cambiaron la seguridad para siempre',
			color: '#fff',
			background: '#07AAA2',
			link: 'https://www.eltiempo.es/bc/pioneros/forlife/index.html',
			image: circle01,
		},
		{
			title: 'Transporte',
			description: 'El reto del sector para cumplir con los objetivos de descarbonización del futuro',
			color: '#021B44',
			background: '#EAC343',
			link: 'https://www.eltiempo.es/bc/pioneros/Transporte/index.html',
			image: circle02,
		},
		{
			title: 'IA',
			description: '¿Cómo se usa la Inteligencia Artifical en la movilidad?',
			color: '#021B44',
			background: '#e0f3fd',
			link: 'https://www.eltiempo.es/bc/pioneros/ia/index.html',
			image: circle03,
		},
		{
			title: 'EX30',
			description: 'Los pequelos gestos que han creado las hazañas sostenibles de la historia',
			color: '#021B44',
			background: '#92815d',
			link: 'https://www.eltiempo.es/bc/pioneros/ex30/index.html',
			image: circle04,
		},
		{
			title: '',
			description: '',
			color: '#fff',
			background: '#666',
			link: null,
			image: circle01,
		},
		{
			title: '',
			description: '',
			color: '#fff',
			background: '#666',
			link: null,
			image: circle01,
		},
		{
			title: '',
			description: '',
			color: '#fff',
			background: '#666',
			link: null,
			image: circle01,
		},
		{
			title: '',
			description: '',
			color: '#fff',
			background: '#666',
			link: null,
			image: circle01,
		},
		{
			title: '',
			description: '',
			color: '#fff',
			background: '#666',
			link: null,
			image: circle01,
		},
		{
			title: '',
			description: '',
			color: '#fff',
			background: '#666',
			link: null,
			image: circle01,
		},
	]
</script>

<div class="relative mb-4 py-24">
	<img class="absolute left-0 top-0 h-full w-full object-cover" src={bgNav} loading="lazy" decoding="async" alt="" />
	<div class="container relative">
		<div class="swiper" bind:this={theSwiper}>
			<div class="swiper-wrapper">
				{#each items as { title, description, color, background, link, image }}
					<a class="swiper-slide" href={link}>
						<div class="relative overflow-hidden rounded-full p-2" style="color:{color};background:{background}">
							<img class="w-full rounded-full bg-white opacity-50" src={image} alt="" />
							<div class="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
								{#if title}
									<h4 class="font-display text-4xl">{title}</h4>
								{/if}
								{#if description}
									<p class="text-lg font-bold">{description}</p>
								{/if}
								{#if !link}
									<svg class="w-16" fill="currentColor" viewBox="0 0 75 102">
										<path
											d="M8.8 102c-1.7-.5-3.4-1-4.9-2.2a9.9 9.9 0 0 1-3.9-8V59a10 10 0 0 1 10.4-10.1h53.2a10 10 0 0 1 10.4 10v33c0 5-3.4 8.9-8.4 10l-.4.1H8.8Zm24.8-22v5c0 1.8 1 3 2.4 3.5 2.3.6 4.3-1 4.4-3.5v-9.5c0-.8.1-1.2.8-1.7a6.5 6.5 0 0 0 2-7.6 6.8 6.8 0 0 0-6.4-4.2c-3 .2-5.3 2-6.2 4.7-.9 2.7 0 5.4 2.5 7.3.2.3.5.7.5 1v5Zm-8.9-38H8l-.1-.7L8 28c.3-5.6 2.2-10.7 5.5-15.3A29.5 29.5 0 0 1 31.7.7C39.1-.9 46.3.2 53 4a29.6 29.6 0 0 1 15.5 26v12h-16c-.8 0-1-.2-1-1V29.4a13.2 13.2 0 0 0-12.4-12.7 13.3 13.3 0 0 0-14.5 13.8V42Z"
										/>
									</svg>
								{/if}
							</div>
						</div>
					</a>
				{/each}
			</div>
		</div>

		<nav class="mt-12 flex justify-center gap-12">
			<button class="w-8" on:click={() => swiper.slidePrev()}>
				<svg fill="#fff" viewBox="0 0 64 44">
					<path
						d="M10.2 19H64v6H10.2l14 13.9a3 3 0 0 1 0 4.2 3 3 0 0 1-4.2 0L.9 24.1a3 3 0 0 1 0-4.2l19-19a3 3 0 0 1 4.3 0 3 3 0 0 1 0 4.2l-14 14Z"
					/>
				</svg>
			</button>
			<button class="w-8" on:click={() => swiper.slideNext()}>
				<svg fill="#fff" viewBox="0 0 64 44">
					<path
						d="M53.8 19H0v6h53.8l-14 13.9a3 3 0 0 0 0 4.2 3 3 0 0 0 4.2 0l19.1-19a3 3 0 0 0 0-4.2l-19-19a3 3 0 0 0-4.3 0 3 3 0 0 0 0 4.2l14 14Z"
					/>
				</svg>
			</button>
		</nav>
	</div>

	<div class="absolute -top-2 left-0 flex items-center">
		<span class="w-14 border-t-4 border-white" />
		<span class="relative h-5 w-5 rounded-full bg-white">
			<span class="absolute inset-0 animate-ping rounded-full bg-white" />
		</span>
	</div>

	<div class="absolute -bottom-2 right-0 flex items-center">
		<span class="relative h-5 w-5 rounded-full bg-white">
			<span class="absolute inset-0 animate-ping rounded-full bg-white" />
		</span>
		<span class="w-14 border-t-4 border-white" />
	</div>
</div>
