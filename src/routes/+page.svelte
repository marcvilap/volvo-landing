<script lang="ts">
	import video01 from '$lib/assets/videos/video.mp4'
	import forlife01 from '$lib/assets/images/forlife01.jpg'
	import forlife02 from '$lib/assets/images/forlife02.jpg'
	import forlife03 from '$lib/assets/images/forlife03.jpg'
	import forlife04 from '$lib/assets/images/forlife04.jpg'
	import forlife05 from '$lib/assets/images/forlife05.jpg'

	import circle01 from '$lib/assets/images/circle01.svg'
	import Intersection from '$lib/components/Intersection.svelte'
	import BlockHero from '$lib/components/BlockHero.svelte'
	import BlockTextBanner from '$lib/components/BlockTextBanner.svelte'
	import BlockFeature from '$lib/components/BlockFeature.svelte'
	import BlockImages from '$lib/components/BlockImages.svelte'
	import BlockCircle from '$lib/components/BlockCircle.svelte'
	import BlockNav from '$lib/components/BlockNav.svelte'
	let intersection01 = false
</script>

<svelte:head>
	<style>
		body {
			background: #057c76;
			color: #fff;
		}
	</style>
</svelte:head>

<main class="overflow-hidden">
	<BlockHero
		video={video01}
		text1="Nuevo posicionamiento ‘For Life’"
		text2="10 inventos que nos recuerdan que la seguridad es sinónimo de libertad"
		text3=""
		text4="Seguridad es un concepto que abarca muchas áreas, desde las medidas que tomamos cada día para evitar males mayores hasta aspectos tan cotidianos como los semáforos en las calles o el cinturón de seguridad. Tecnologías con las que ahora mismo sería impensable vivir."
	/>

	<div class="py-24">
		<Intersection bind:intersecting={intersection01} class="container">
			<div
				class="prose prose-capitalize prose-dark mx-auto max-w-xl transition duration-1000"
				class:opacity-0={!intersection01}
				class:translate-y-24={!intersection01}
			>
				<p>
					Esa seguridad juega un papel fundamental en nuestras vidas y en nuestro bienestar mental, y Volvo Cars lo
					sabe. Por esta razón, acaba de lanzar
					<a target="_blank" href="https://tecvolucion.com/for-life-conducir-seguro-vivir-seguro/">For Life</a>, su
					nuevo posicionamiento en el que nos recuerda, como empresa que durante casi un siglo ha estado volcado en
					protegernos en la carretera, que no hay mayor definición de libertad que aquella que va de la mano de la nueva
					era de seguridad. Porque
					<strong>sin seguridad (en nuestra salud, bienestar o economía) no hay progreso, ni libertad.</strong>
				</p>
				<p>
					Incluso al montar en un coche podemos sentir esa sensación de seguridad. El simple gesto de abrocharse el
					cinturón implica que un desplazamiento debería ser simplemente eso: moverse de un punto A a un punto B sin
					mayores imprevistos.
				</p>
			</div>
		</Intersection>
	</div>

	<BlockTextBanner
		image={forlife01}
		text="Volvo Cars acaba de lanzar For Life, su nuevo posicionamiento en el que nos recuerda que no hay mayor definición de libertad que aquella que va de la mano de la nueva era de seguridad"
	/>

	<div class="relative pt-24">
		<div class="container">
			<p class="mx-auto max-w-xl">
				Con el lema ¿y si sentirte seguro te hiciese sentir verdaderamente libre? Volvo Cars nos invita a una nueva era
				de seguridad para todos, para disfrutar de la libertad más segura. Así fue como empezaron siendo los pioneros
				con el cinturón de seguridad antaño, continuaron innovando en la protección de las personas en el presente, y
				piensan en el futuro con el objetivo de colisiones cero y una conducción autónoma.
			</p>

			<div class="pb-24" />

			<BlockCircle image={circle01} color="#F8EBC0" />

			<div class="pb-24" />

			<p class="mx-auto mb-24 max-w-xl text-xl font-bold">
				Para hacer homenaje a For Life, la nueva plataforma de Volvo Cars, repasamos algunos de los avances de la
				humanidad que han contribuido a este presente en el que la nueva era de seguridad es sinónimo de libertad.
			</p>

			<BlockImages image1={forlife02} image2={forlife03} />

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
			<BlockImages image1={forlife04} image2={forlife05} />
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

		<div class="absolute left-0 top-[62rem] flex items-center max-md:hidden">
			<span class="w-14 border-t-4 border-white" />
			<span class="relative h-5 w-5 rounded-full bg-white">
				<span class="absolute inset-0 animate-ping rounded-full bg-white" />
			</span>
		</div>

		<div class="absolute right-0 top-[76rem] flex items-center max-md:hidden">
			<span class="relative h-5 w-5 rounded-full bg-white">
				<span class="absolute inset-0 animate-ping rounded-full bg-white" />
			</span>
			<span class="w-14 border-t-4 border-white" />
		</div>
	</div>

	<BlockNav />
</main>
