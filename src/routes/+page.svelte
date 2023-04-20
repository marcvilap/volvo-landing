<script lang="ts">
	import video from '$lib/assets/videos/video.mp4'
	import image2 from '$lib/assets/images/image2.jpg'
	import image3 from '$lib/assets/images/image3.svg'
	import image4 from '$lib/assets/images/image4.jpg'
	import image5 from '$lib/assets/images/image5.jpg'
	import image6 from '$lib/assets/images/image6.jpg'
	import image7 from '$lib/assets/images/image7.jpg'
	import image8 from '$lib/assets/images/image8.jpg'
	import item1 from '$lib/assets/images/item1.png'
	import item2 from '$lib/assets/images/item2.png'
	import Intersection from '$lib/components/Intersection.svelte'
	import BlockFeature from '$lib/components/BlockFeature.svelte'
	import BlockImages from '$lib/components/BlockImages.svelte'
	let intersection01 = false
	let intersection02 = false
	let intersection03 = false
	let intersection04 = false
</script>

<main class="overflow-hidden text-white bg-[#057C76] md:text-2xl">
	<div class="relative text-center">
		<video
			class="absolute left-0 top-0 w-full h-full object-cover opacity-80"
			src={video}
			autoplay
			loop
			muted
			playsinline
		/>
		<Intersection bind:intersecting={intersection01} class="container pt-24 pb-8 min-h-screen relative flex flex-col">

			<a class="w-20 mb-8" href="/">
				<svg viewBox="0 0 90 90">
					<circle fill="#f8ebc0" cx="45" cy="45" r="45" />
					<path
						fill="#034541"
						d="M64.9 62.98H34.3l.01-3.23h27.35V40.17l-16.15-14.8-16.28 14.8V54.6H26V38.74L45.51 21 64.9 38.75v24.23Zm-33.2-5.77v5.7H26v-5.7h5.7Z"
					/>
				</svg>
			</a>

			<div class="transition duration-1000 my-auto" class:opacity-0={!intersection01} class:translate-y-24={!intersection01}>
				<h2 class="mb-8 uppercase text-lg md:text-3xl">Nuevo posicionamiento <strong>‘For Life’</strong></h2>
				<h1 class="mb-8 uppercase font-display text-3xl md:text-6xl">
					10 inventos que nos recuerdan que la seguridad es sinónimo de libertad
				</h1>
				<p class="mx-auto max-w-4xl">
					Seguridad es un concepto que abarca muchas áreas, desde las medidas que tomamos cada día para evitar males
					mayores hasta aspectos tan cotidianos como los semáforos en las calles o el cinturón de seguridad. Tecnologías
					con las que ahora mismo sería impensable vivir.
				</p>
			</div>

			<a class="mt-8 mx-auto w-12 animate-bounce" href="#down">
				<svg viewBox="0 0 56 74" fill="#F8EBC0">
					<path
						d="m46.7.4 8.9 9a1.5 1.5 0 0 1 0 2L29 38.3c-.5.6-1.5.6-2 0L.4 11.5a1.5 1.5 0 0 1 0-2.1l9-9c.5-.5 1.4-.5 2 0L28 17.1 44.6.4a1.5 1.5 0 0 1 2 0Zm-1 3.2L29 20.3a1.5 1.5 0 0 1-2 0L10.4 3.6l-6.8 6.8L28 35l24.4-24.6-6.8-6.8Zm1 32.2 8.9 9a1.5 1.5 0 0 1 0 2L29 73.7c-.5.5-1.5.5-2 0L.4 46.9a1.5 1.5 0 0 1 0-2.2l9-8.9c.5-.6 1.4-.6 2 0L28 52.5l16.6-16.7c.6-.6 1.5-.6 2 0Zm-1 3.2L29 55.7a1.5 1.5 0 0 1-2 0L10.4 39l-6.8 6.8L28 70.4l24.4-24.6-6.8-6.8Z"
					/>
				</svg>
			</a>
		</Intersection>
	</div>

	<div id="down" class="py-20">
		<Intersection bind:intersecting={intersection02} class="container">
			<div
				class="transition duration-1000 mx-auto max-w-4xl"
				class:opacity-0={!intersection02}
				class:translate-y-24={!intersection02}
			>
				<p>
					<span class="float-left font-bold -mt-2 mr-4 text-[#F8EBC0] leading-[.75] text-9xl md:text-[20rem]">E</span>sa seguridad juega un papel 
					fundamental en nuestras vidas y en nuestro bienestar mental, y Volvo Cars lo sabe. Por esta razón, acaba de lanzar 
					<a rel="sponsored" class="underline" target="_blank" href="https://tecvolucion.com/for-life-conducir-seguro-vivir-seguro/"
						>For Life</a
					>, su nuevo posicionamiento en el que nos recuerda, como empresa que durante casi un siglo ha estado volcado en protegernos en la carretera, que no hay mayor definición de libertad que 
					aquella que va de la mano de la nueva era de seguridad. Porque
					<strong class="text-[#F8EBC0]"
						>sin seguridad (en nuestra salud, bienestar o economía) no hay progreso, ni libertad.</strong
					>
				</p>
				<p>
					Incluso al montar en un coche podemos sentir esa sensación de seguridad. El simple gesto de abrocharse el
					cinturón implica que un desplazamiento debería ser simplemente eso: moverse de un punto A a un punto B sin
					mayores imprevistos.
				</p>
			</div>
		</Intersection>
	</div>

	<div class="py-32 relative text-center bg-neutral-600">
		<img class="absolute left-0 top-0 w-full h-full object-cover opacity-50" src={image2} alt="" />
		<Intersection bind:intersecting={intersection03} class="container relative">
			<h3
				class="transition duration-1000 font-bold text-2xl md:text-5xl"
				class:opacity-0={!intersection03}
				class:translate-y-24={!intersection03}
			>
				Volvo Cars acaba de lanzar For Life, su nuevo posicionamiento en el que nos recuerda que no hay mayor definición de 
				libertad que aquella que va de la mano de la nueva era de seguridad
			</h3>
		</Intersection>
	</div>

	<div class="pt-20 relative">
		<div class="container">
			<p class="mx-auto max-w-4xl mb-20">
				Con el lema ¿y si sentirte seguro te hiciese sentir verdaderamente libre? Volvo Cars nos invita a una nueva era
				de seguridad para todos, para disfrutar de la libertad más segura. Así fue como empezaron siendo los pioneros
				con el cinturón de seguridad antaño, continuaron innovando en la protección de las personas en el presente, y
				piensan en el futuro con el objetivo de colisiones cero y una conducción autónoma.
			</p>
			<Intersection bind:intersecting={intersection04}>
				<img
					class="transition duration-1000 mx-auto mb-20 w-[38rem]"
					class:opacity-0={!intersection04}
					class:scale-75={!intersection04}
					src={image3}
					alt=""
				/>
			</Intersection>
			<p class="mx-auto mb-20 max-w-4xl font-bold text-xl md:text-3xl">
				Para hacer homenaje a For Life, la nueva plataforma de Volvo Cars, repasamos algunos de los avances de la humanidad que han contribuido a este presente en el que la nueva era de seguridad es sinónimo de libertad.
			</p>

			<BlockImages image1={image4} image2={image5} />
			<BlockFeature
				number="1"
				title="Penicilina"
				description="Aunque existen ejemplos en la historia antigua, fue Alexander Fleming el catalizador de una serie de investigaciones durante las primeras décadas del siglo XX que cristalizaron en el compuesto que daría pie a los primeros antibióticos y que dispararon la esperanza de vida del ser humano."
			/>
			<BlockFeature
				right
				number="2"
				title="Bombillas"
				description="Un invento tan sencillo ha cambiado para siempre nuestra relación con la noche. La bombilla nos ha permitido iluminar casas, calles y carreteras, haciendo más segura la vida nocturna y permitiendo los desplazamientos por las carreteras cuando el sol ya se ha puesto."
			/>
			<BlockFeature
				number="3"
				title="Cinturón de seguridad de tres puntos"
				description="Ideado por Nils Bohlin en 1959, se le considera responsable de haber salvado más de un millón de vidas en las carreteras.<a rel='sponsored' target='_blank' href='https://www.volvocars.com/es/v/safety/highlights?utm_source=other&utm_medium=referral&utm_content=lifestyle_tracking_1x1_cinturon-seguridad&utm_campaign=es_lifestyle_awareness_2303_masterbrand_other_branded-content&sourceapplicationinformation=es_lst_awr_mbr&utm_id=362481354&dclid=CPbmyYnbuP4CFd4RBgAdGwEJYw'><u>El cinturón de seguridad</u></a> mantiene al pasajero de un vehículo a motor sujetado a su asiento, de manera que evita que salga disparado del habitáculo o se golpee contra otros elementos de su interior, protegiéndole de impactos que podrían ser mortales."
			/>
			<BlockFeature
				right
				number="4"
				title="Airbag"
				description="Existen colisiones tan fuertes para los que incluso un cinturón de seguridad no es suficiente. Es aquí donde entran en juego los airbags, una tecnología tan sencilla como una bolsa que se llena de aire cuando el vehículo detecta una colisión, y que ha añadido un plus de seguridad dentro de los vehículos."
			/>
			<BlockFeature
				number="5"
				title="Vacunas"
				description="La pandemia del Covid-19 nos ha recordado la importancia de las vacunas, no solo para salvar vidas sino para vivirlas con total normalidad. Los primeros ejemplos datan de finales del siglo XVIII (la de la viruela) y todos parten de un mismo principio: generar inmunidad contra una enfermedad mediante la estimulación de la producción de anticuerpos."
			/>
			<BlockImages image1={image6} image2={image7} />
			<BlockFeature
				right
				number="6"
				title="Alarma anti incendios"
				description="Un buen detector de humo es capaz de significar la diferencia entre apagar a tiempo un fuego o ver arrasada una propiedad. El primer ejemplo data de 1902 y en la actualidad son capaces de detectar gases y humos invisibles para el ser humano además de otros que sí son perceptibles a simple vista."
			/>
			<BlockFeature
				number="7"
				title="Semáforo"
				description="Estos sistemas para controlar el tráfico se comenzaron a utilizar en Londres en la segunda mitad del siglo XIX. La adopción masiva de los coches los convirtió en una herramienta indispensable de las ciudades tanto para ordenar el tráfico como para garantizar la <a href='https://www.volvocars.com/es/for-life/?utm_source=other&utm_medium=referral&utm_content=lifestyle_tracking_1x1_for-life&utm_campaign=es_lifestyle_awareness_2303_masterbrand_other_branded-content&sourceapplicationinformation=es_lst_awr_mbr&utm_id=362480976&dclid=CIqG9PXcuP4CFdTZ1Qodv74FpQ' target='_blank' rel='sponsored'><u> segura convivencia</u></a> entre vehículos y peatones."
			/>
			<BlockFeature
				right
				number="8"
				title="CASCO"
				description="Ya sea en la construcción, escalando una montaña, encima de una bicicleta, montando un patinete o desplazándote en motocicleta, esta sencilla estructura se encarga de proteger nuestro órgano más preciado: el cerebro."
			/>
			<BlockFeature
				number="9"
				title="Chaleco salvavidas"
				description="Este objeto cumple una sola función, mantener a flote a la persona que lo lleva, incluso si está inconsciente, de manera que su cabeza queda siempre por encima del agua y así evita que se ahogue. Imprescindibles en embarcaciones, ya sean de recreo o grandes cruceros."
			/>
			<BlockFeature
				right
				number="10"
				title="Detectores de fatiga"
				description="La última tecnología a bordo de los coches es capaz de detectar cuando un conductor se queda dormido al volante o está a punto de hacerlo. Y cuando eso sucede, el vehículo emite señales de alarma para informar al conductor de que su conducción está siendo errática y que necesita tomarse un descanso."
			/>
		</div>

		<div class="absolute top-[62rem] left-0 flex items-center max-md:hidden">
			<span class="w-14 border-t-4 border-white"></span>
			<span class="w-5 h-5 bg-white rounded-full relative">
				<span class="absolute inset-0 bg-white rounded-full animate-ping"></span>
			</span>
		</div>

		<div class="absolute top-[76rem] right-0 flex items-center max-md:hidden">
			<span class="w-5 h-5 bg-white rounded-full relative">
				<span class="absolute inset-0 bg-white rounded-full animate-ping"></span>
			</span>
			<span class="w-14 border-t-4 border-white"></span>
		</div>


	</div>

	<div class="py-20 relative mb-20">
		<img class="absolute left-0 top-0 w-full h-full object-cover opacity-80" src={image8} alt="" />
		<div class="container relative">
			<div class="grid gap-8 md:grid-cols-3">
				<div class="overflow-hidden relative rounded-full border-8 border-[#07AAA2]">
					<img class="w-full" src={item1} alt="" />
					<div class="absolute inset-0 flex flex-col justify-center p-8 text-center items-center bg-[#07AAA2]/50">
						<h4 class="text-4xl font-display">FOR LIFE</h4>
						<p class="text-lg font-bold">
							El nuevo posicionamiento de Volvo que nos hace recordar los inventos que cambiaron la seguridad para
							siempre
						</p>
					</div>
				</div>

				<div class="overflow-hidden relative rounded-full border-8 border-gray-600">
					<img class="w-full" src={item2} alt="" />
					<div class="absolute inset-0 flex flex-col justify-center p-8 text-center items-center bg-gray-600/50">
						<svg class="w-16" fill="currentColor" viewBox="0 0 75 102">
							<path
								d="M8.8 102c-1.7-.5-3.4-1-4.9-2.2a9.9 9.9 0 0 1-3.9-8V59a10 10 0 0 1 10.4-10.1h53.2a10 10 0 0 1 10.4 10v33c0 5-3.4 8.9-8.4 10l-.4.1H8.8Zm24.8-22v5c0 1.8 1 3 2.4 3.5 2.3.6 4.3-1 4.4-3.5v-9.5c0-.8.1-1.2.8-1.7a6.5 6.5 0 0 0 2-7.6 6.8 6.8 0 0 0-6.4-4.2c-3 .2-5.3 2-6.2 4.7-.9 2.7 0 5.4 2.5 7.3.2.3.5.7.5 1v5Zm-8.9-38H8l-.1-.7L8 28c.3-5.6 2.2-10.7 5.5-15.3A29.5 29.5 0 0 1 31.7.7C39.1-.9 46.3.2 53 4a29.6 29.6 0 0 1 15.5 26v12h-16c-.8 0-1-.2-1-1V29.4a13.2 13.2 0 0 0-12.4-12.7 13.3 13.3 0 0 0-14.5 13.8V42Z"
							/>
						</svg>
					</div>
				</div>

				<div class="overflow-hidden relative rounded-full border-8 border-gray-600">
					<img class="w-full" src={item2} alt="" />
					<div class="absolute inset-0 flex flex-col justify-center p-8 text-center items-center bg-gray-600/50">
						<svg class="w-16" fill="currentColor" viewBox="0 0 75 102">
							<path
								d="M8.8 102c-1.7-.5-3.4-1-4.9-2.2a9.9 9.9 0 0 1-3.9-8V59a10 10 0 0 1 10.4-10.1h53.2a10 10 0 0 1 10.4 10v33c0 5-3.4 8.9-8.4 10l-.4.1H8.8Zm24.8-22v5c0 1.8 1 3 2.4 3.5 2.3.6 4.3-1 4.4-3.5v-9.5c0-.8.1-1.2.8-1.7a6.5 6.5 0 0 0 2-7.6 6.8 6.8 0 0 0-6.4-4.2c-3 .2-5.3 2-6.2 4.7-.9 2.7 0 5.4 2.5 7.3.2.3.5.7.5 1v5Zm-8.9-38H8l-.1-.7L8 28c.3-5.6 2.2-10.7 5.5-15.3A29.5 29.5 0 0 1 31.7.7C39.1-.9 46.3.2 53 4a29.6 29.6 0 0 1 15.5 26v12h-16c-.8 0-1-.2-1-1V29.4a13.2 13.2 0 0 0-12.4-12.7 13.3 13.3 0 0 0-14.5 13.8V42Z"
							/>
						</svg>
					</div>
				</div>
			</div>

			<nav class="flex gap-12 justify-center mt-12">
				<button class="w-8">
					<svg fill="currentColor" viewBox="0 0 64 44">
						<path
							d="M10.2 19H64v6H10.2l14 13.9a3 3 0 0 1 0 4.2 3 3 0 0 1-4.2 0L.9 24.1a3 3 0 0 1 0-4.2l19-19a3 3 0 0 1 4.3 0 3 3 0 0 1 0 4.2l-14 14Z"
						/>
					</svg>
				</button>
				<button class="w-8">
					<svg fill="currentColor" viewBox="0 0 64 44">
						<path
							d="M53.8 19H0v6h53.8l-14 13.9a3 3 0 0 0 0 4.2 3 3 0 0 0 4.2 0l19.1-19a3 3 0 0 0 0-4.2l-19-19a3 3 0 0 0-4.3 0 3 3 0 0 0 0 4.2l14 14Z"
						/>
					</svg>
				</button>
			</nav>
		</div>


		<div class="absolute -top-2 left-0 flex items-center">
			<span class="w-14 border-t-4 border-[#F8EBC0]"></span>
			<span class="w-5 h-5 bg-[#F8EBC0] rounded-full relative">
				<span class="absolute inset-0 bg-[#F8EBC0] rounded-full animate-ping"></span>
			</span>
		</div>

		<div class="absolute -bottom-2 right-0 flex items-center">
			<span class="w-5 h-5 bg-[#F8EBC0] rounded-full relative">
				<span class="absolute inset-0 bg-[#F8EBC0] rounded-full animate-ping"></span>
			</span>
			<span class="w-14 border-t-4 border-[#F8EBC0]"></span>
		</div>

	</div>
</main>
