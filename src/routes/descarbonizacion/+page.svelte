<script lang="ts">
	import landing2_01 from '$lib/assets/images/landing2-01.jpg'
	import landing2_02 from '$lib/assets/images/landing2-02.jpg'
	import landing2_03 from '$lib/assets/images/landing2-03.jpg'
	import landing2_04 from '$lib/assets/images/landing2-04.jpg'
	import landing2_05 from '$lib/assets/images/landing2-05.jpg'
	import landing2_06 from '$lib/assets/images/landing2-06.jpg'
	import landing2_07 from '$lib/assets/images/landing2-07.jpg'
	import landing2_08 from '$lib/assets/images/landing2-08.jpg'
	import landing2_09 from '$lib/assets/images/landing2-09.jpg'
	import landing2_10 from '$lib/assets/images/landing2-10.svg'
	import landing2_11 from '$lib/assets/images/landing2-11.jpg'
	import landing2_12 from '$lib/assets/images/landing2-12.jpg'
	import Intersection from '$lib/components/Intersection.svelte'
	let intersection01 = false
	let intersection02 = false
	let intersection03 = false
	let intersection04 = false
	let intersection05 = false
	let intersection06 = false
	let intersection07 = false
	let intersection08 = false
	let intersection09 = false
	let intersection10 = false
	let intersection11 = false
	let intersection12 = false

	const moveImg = (node: HTMLImageElement) => {
		node.addEventListener('mousemove', event => {
			node.style.transform = `translate3d(${event.pageX / -64}px,${event.pageY / -64}px,0) scale(1.05)`
		})
	}
</script>

<main class="overflow-hidden md:text-2xl">
	<div class="relative text-center text-white">
		<img use:moveImg class="absolute left-0 top-0 h-full w-full scale-105 object-cover" src={landing2_01} alt="" />
		<Intersection
			bind:intersecting={intersection01}
			class="container pointer-events-none relative flex min-h-screen flex-col pb-8 pt-24"
		>
			<a class="animate-scale mb-8 w-20" href="/">
				<svg viewBox="0 0 90 90">
					<circle fill="#f8ebc0" cx="45" cy="45" r="45" />
					<path
						fill="#034541"
						d="M64.9 62.98H34.3l.01-3.23h27.35V40.17l-16.15-14.8-16.28 14.8V54.6H26V38.74L45.51 21 64.9 38.75v24.23Zm-33.2-5.77v5.7H26v-5.7h5.7Z"
					/>
				</svg>
			</a>

			<div
				class="my-auto transition duration-1000"
				class:opacity-0={!intersection01}
				class:translate-y-24={!intersection01}
			>
				<h2 class="mb-8 text-lg uppercase md:text-3xl">Descarbonización del transporte</h2>
				<h1 class="mb-8 font-display text-3xl uppercase md:text-6xl">
					¿Qué tiene que ver un embalse o la arena con crear un coche 100% neutro en emisiones?
				</h1>
				<p class="mx-auto max-w-4xl">
					La emergencia climática ha empujado a gobiernos y empresas a apostar por la innovación tecnológica para
					encontrar alternativas que permitan reducir la huella de carbono hasta llegar al objetivo de neutralidad de
					CO2 en 2050. Y el transporte es uno de los sectores que tiene que realizar un mayor ajuste para cumplir con
					esos objetivos.
				</p>
			</div>

			<a class="mx-auto mt-8 w-12 animate-bounce" href="#down">
				<svg viewBox="0 0 56 74" fill="#F8EBC0">
					<path
						d="m46.7.4 8.9 9a1.5 1.5 0 0 1 0 2L29 38.3c-.5.6-1.5.6-2 0L.4 11.5a1.5 1.5 0 0 1 0-2.1l9-9c.5-.5 1.4-.5 2 0L28 17.1 44.6.4a1.5 1.5 0 0 1 2 0Zm-1 3.2L29 20.3a1.5 1.5 0 0 1-2 0L10.4 3.6l-6.8 6.8L28 35l24.4-24.6-6.8-6.8Zm1 32.2 8.9 9a1.5 1.5 0 0 1 0 2L29 73.7c-.5.5-1.5.5-2 0L.4 46.9a1.5 1.5 0 0 1 0-2.2l9-8.9c.5-.6 1.4-.6 2 0L28 52.5l16.6-16.7c.6-.6 1.5-.6 2 0Zm-1 3.2L29 55.7a1.5 1.5 0 0 1-2 0L10.4 39l-6.8 6.8L28 70.4l24.4-24.6-6.8-6.8Z"
					/>
				</svg>
			</a>
		</Intersection>
	</div>

	<div id="down" class="bg-[#F8EBC0] py-24">
		<Intersection bind:intersecting={intersection02} class="container">
			<div
				class="mx-auto max-w-4xl transition duration-1000"
				class:opacity-0={!intersection02}
				class:translate-y-24={!intersection02}
			>
				<p>
					<span class="float-left -mt-2 mr-4 text-9xl font-bold leading-[.75] text-[#07AAA2] md:text-[20rem]">E</span>n
					2018, el tráfico por carretera significaba el 26% de las emisiones de dióxido de carbono en la Unión Europea,
					una subida de diez puntos respecto al 16% de 1990. Por ello, los fabricantes de automóviles, como
					<strong>Volvo Cars</strong>, se han lanzado a una carrera para
					<a class="text-[#07AAA2] underline" target="_blank" href="https://link.com"
						>democratizar el vehículo eléctrico</a
					> y otras formas de movilidad sostenible.
				</p>
				<p>
					Y aunque pueda parecer que la solución pasa exclusivamente por electrificar el parque automóvil, el problema
					va más allá.
				</p>
			</div>
		</Intersection>
	</div>

	<div class="relative bg-neutral-600 py-32 text-center text-white">
		<img class="absolute left-0 top-0 h-full w-full object-cover opacity-50" src={landing2_02} alt="" />
		<Intersection bind:intersecting={intersection03} class="container relative">
			<h3
				class="text-2xl font-bold transition duration-1000 md:text-5xl"
				class:opacity-0={!intersection03}
				class:translate-y-24={!intersection03}
			>
				Los fabricantes de automóviles, como Volvo Cars, se han lanzado a una carrera para democratizar el vehículo
				eléctrico y otras formas de movilidad sostenible
			</h3>
		</Intersection>
	</div>

	<div class="bg-[#F8EBC0] py-24">
		<div class="container">
			<Intersection bind:intersecting={intersection04}>
				<div
					class="mx-auto mb-24 max-w-3xl transition duration-1000"
					class:opacity-0={!intersection04}
					class:translate-y-24={!intersection04}
				>
					<p class="mb-4">
						Tanto el proceso productivo como la generación de la energía que alimenta dichos vehículos pueden formar
						parte del problema si se emplean fuentes de origen fósil. Es en este punto en el que la <strong
							>innovación llega para jugar un papel esencial, y Volvo Cars lo sabe</strong
						>: proveer la energía limpia suficiente que no solo mueva a los coches del mañana sino que también impulse
						su fabricación. Porque la sostenibilidad es tan importante como el costo y la calidad.
					</p>
					<p>
						A continuación, vemos solo algunos ejemplos de cómo <strong
							>tecnologías innovadoras están ayudando a descarbonizar la economía</strong
						>, ya sea a corto o a medio plazo.
					</p>
				</div>
			</Intersection>

			<Intersection bind:intersecting={intersection05} class="mb-24 grid gap-y-8 lg:grid-cols-2">
				<div
					class="transition duration-1000 lg:pr-24"
					class:opacity-0={!intersection05}
					class:-translate-x-24={!intersection05}
				>
					<div>
						<img class="relative z-10 -mb-[40%] w-full px-[14%]" src={landing2_03} alt="" />
						<img class="w-full" src={landing2_04} alt="" />
					</div>
				</div>
				<div
					class="relative transition duration-1000"
					class:opacity-0={!intersection05}
					class:translate-x-24={!intersection05}
				>
					<span
						class="text-7xl font-bold leading-[.7] text-[#07AAA2] md:text-[15rem] lg:absolute lg:-left-32 lg:-top-10"
						>1</span
					>
					<h2 class="mb-4 font-display text-3xl md:text-5xl">Utilizar la arena para almacenar energía</h2>
					<p class="mb-4">
						Uno de los problemas a los que se enfrentan las energías renovables está relacionado con el almacenamiento
						de la energía generada para no malgastar la producción que se da cuando el viento sopla más fuerte de lo
						normal o las placas fotovoltaicas trabajan a pleno rendimiento en verano.
					</p>
					<p>
						Las baterías todavía siguen siendo una tecnología costosa, y que ha mostrado algunos problemas de
						eficiencia, pero la compañía finlandesa Polar Night Energy cree haber dado con <strong
							>una solución para almacenar el calor generado</strong
						>. La tecnología de esta empresa transfiere el calor que luego se transformará en electricidad a un banco de
						arena, que puede llegar a calentarse hasta a 1000º de temperatura y donde se encuentran unos receptores de
						calor. Estos receptores son capaces de mantener la energía almacenada durante meses con pérdidas mínimas.
					</p>
				</div>
			</Intersection>

			<Intersection bind:intersecting={intersection06} class="mb-24 grid gap-y-8 lg:grid-cols-2">
				<div
					class="relative transition duration-1000 lg:mt-96"
					class:opacity-0={!intersection06}
					class:-translate-x-24={!intersection06}
				>
					<span
						class="text-7xl font-bold leading-[.7] text-[#07AAA2] md:text-[15rem] lg:absolute lg:-left-16 lg:-top-10"
						>2</span
					>
					<div class="lg:translate-x-24">
						<h2 class="mb-4 font-display text-3xl md:text-5xl">Placas solares que flotan en el agua</h2>
						<p class="mb-4">
							A diferencia de los molinos de viento, las placas solares necesitan espacio. Mucho espacio. Y aunque en
							países como España con grandes zonas despobladas no debería ser un problema, si puede suponer una pega en
							áreas donde se pueda necesitar ese suelo para fines agrícolas.
						</p>
						<p class="mb-4">
							Ya existen alternativas que proponen construir placas solares encima de infraestructuras cubiertas por
							agua (desde acueductos hasta canales o embalses) de manera que se logran varios beneficios a la vez: los
							paneles proporcionan sombra y evitan que el agua se evapore, esta enfría los paneles ayudando a una mayor
							eficiencia energética y se libera espacio que se puede dedicar a la agricultura.
						</p>
						<p>
							En España ya existen algunos ejemplos de esta tecnología, como en la Comunidad Valenciana, y en Portugal <strong
								>se inauguró en 2022 la mayor planta europea fotovoltaica sobre un embalse</strong
							>. Esta medida, además, aprovecha la conexión eléctrica de la central situada a escasos metros y que estas
							plantas no utilizan de manera constante.
						</p>
					</div>
				</div>
				<div
					class="transition duration-1000 lg:pl-24"
					class:opacity-0={!intersection06}
					class:translate-x-24={!intersection06}
				>
					<img class="relative -ml-[40%] w-full" src={landing2_05} alt="" />
					<div class="-mt-[20%] pl-[20%]">
						<img class="w-full" src={landing2_06} alt="" />
						<p class="mt-4 text-sm">
							Paneles solares fotovoltaicos instalados por EDP flotan sobre la laguna artificial del embalse del
							Alqueva, en el río Guadiana, en Portugal. (Vía El País)
						</p>
					</div>
				</div>
			</Intersection>

			<Intersection bind:intersecting={intersection07} class="grid gap-y-8 lg:grid-cols-2">
				<div
					class="transition duration-1000 lg:pr-24"
					class:opacity-0={!intersection07}
					class:-translate-x-24={!intersection07}
				>
					<img class="w-full pr-[20%]" src={landing2_07} alt="" />
					<img class="-mt-[20%] w-full pl-[20%]" src={landing2_08} alt="" />
				</div>
				<div
					class="relative transition duration-1000"
					class:opacity-0={!intersection07}
					class:translate-x-24={!intersection07}
				>
					<span
						class="text-7xl font-bold leading-[.7] text-[#07AAA2] md:text-[15rem] lg:absolute lg:-left-40 lg:-top-10"
						>3</span
					>
					<h2 class="mb-4 font-display text-3xl md:text-5xl">Hidrógeno limpio para impulsar la industria</h2>
					<p class="mb-4">
						Uno de los grandes retos a los que se enfrenta el planeta para abastecer la producción industrial es la
						generación de grandes volúmenes de energía de origen limpio. La Unión Europea estima que la <strong
							>electricidad será la principal fuente de energía en 2050</strong
						> con una cuota de mercado superior al 50% (respecto al 22% que tenía en 2015). Esto implica que es necesario
						dar con una alternativa sostenible para cumplir con los objetivos de neutralidad de carbono de cara a mediados
						del siglo XXI.
					</p>
					<p>
						Desde Volvo Cars, lo tienen claro: es necesario pasarse a la <a
							class="text-[#07AAA2] underline"
							href="https://link.com">economía circular</a
						>, y para ello hay que actuar ya. La circularidad es buena tanto para el planeta como para el negocio,
						comenzando a plantear cómo se pueden reducir las emisiones en
						<strong>2,5 millones de toneladas mediante iniciativas circulares.</strong>
					</p>
				</div>
			</Intersection>
		</div>
	</div>

	<div class="py-24">
		<div class="container">
			<Intersection bind:intersecting={intersection08} class="grid items-center gap-8 gap-x-24 lg:grid-cols-2">
				<div
					class="transition duration-1000"
					class:opacity-0={!intersection08}
					class:-translate-x-24={!intersection08}
					class:-skew-x-12={!intersection08}
					class:-skew-y-12={!intersection08}
				>
					<h3 class="mb-4 text-5xl font-bold">
						“Si queremos alcanzar nuestros objetivos, tenemos que pasarnos a la economía circular”
					</h3>
					<p class="text-base font-bold">Anders Kärrberg, director de sostenibilidad global</p>
				</div>
				<div class="transition duration-1000" class:opacity-0={!intersection08} class:translate-x-24={!intersection08}>
					<img src={landing2_09} alt="" />
				</div>
			</Intersection>
		</div>
	</div>

	<div class="bg-[#F8EBC0] py-24">
		<div class="container">
			<Intersection bind:intersecting={intersection09}>
				<div
					class="mx-auto mb-24 max-w-3xl text-center transition duration-1000"
					class:opacity-0={!intersection09}
					class:translate-y-24={!intersection09}
				>
					<p>
						El hidrógeno que se utiliza en la actualidad se extrae del gas natural, el carbón o de la biomasa, con una
						huella de carbono notable. Pero es posible producir hidrógeno a partir de un elemento tan abundante como el
						agua. Mediante electrólisis, que también se debe producir con energías renovables, se pueden separar las
						moléculas de hidrógeno de las de oxígeno presentes en el agua. Este proceso <a
							class="text-[#07AAA2] underline"
							target="_blank"
							href="https://link.com">abriría la puerta a una forma de energía limpia</a
						> y para la que, en España, ya tenemos proyectos aprobados para construir gasoductos que puedan transportar este
						gas a todo el continente europeo.
					</p>
				</div>
			</Intersection>

			<Intersection bind:intersecting={intersection10}>
				<div
					class="relative mx-auto my-32 max-w-[38rem] transition duration-1000"
					class:opacity-0={!intersection10}
					class:scale-50={!intersection10}
				>
					<img class="rounded-full border-[.75rem] border-[#07AAA2] bg-white" src={landing2_10} alt="" />
					<div class="absolute -inset-8">
						<svg class="animate-rotate-l h-full w-full" viewBox="0 0 100 100">
							<circle fill="none" stroke="#07AAA2" stroke-width="2" stroke-dasharray="6,3" cx="50" cy="50" r="49" />
						</svg>
					</div>
					<div class="absolute -inset-16">
						<svg class="animate-rotate-r h-full w-full" viewBox="0 0 100 100">
							<circle fill="none" stroke="#07AAA2" stroke-width="2" stroke-dasharray="10,5" cx="50" cy="50" r="49" />
						</svg>
					</div>
				</div>
			</Intersection>
		</div>
	</div>
	<div class="relative flex min-h-screen items-center bg-gray-800 py-24 text-white">
		<img class="absolute left-0 top-0 h-full w-full object-cover" src={landing2_11} alt="" />
		<Intersection bind:intersecting={intersection11} class="relative px-8 xl:px-24">
			<div
				class="max-w-md text-xl transition duration-1000"
				class:opacity-0={!intersection11}
				class:-translate-x-24={!intersection11}
			>
				<p class="mb-4">
					El sector de la automoción es uno en los que mejor se puede observar la importancia de la innovación en la
					producción energética. No se trata solo de que los vehículos que circulan por las carreteras no contaminen,
					sino de que tanto el proceso de manufactura como sus recargas estén <strong
						>alimentadas por electricidad verde</strong
					>.
				</p>
				<p>
					Un informe de Volvo Cars sobre la <a class="text-[#07AAA2] underline" href="https://link.com"
						>Evaluación del Ciclo de Vida del C40 Recharge</a
					> ha demostrado que la huella de carbono del vehículo durante todos sus años de uso es de 27 toneladas de CO2 siempre
					que se recarga con energías alternativas. El mismo modelo, con motor de combustión, emite 59 toneladas. Pero existe
					otro dato significativo: las 27 toneladas de un eléctrico aumentan hasta 50 si el vehículo se recarga con electricidad
					que proviene de combustibles fósiles.
				</p>
			</div>
		</Intersection>
	</div>
	<div class="relative flex min-h-screen items-center bg-gray-900 py-24 text-white">
		<img class="absolute left-0 top-0 h-full w-full object-cover" src={landing2_12} alt="" />
		<Intersection bind:intersecting={intersection12} class="container relative text-center">
			<p
				class="mx-auto max-w-4xl transition duration-1000"
				class:opacity-0={!intersection12}
				class:translate-y-24={!intersection12}
			>
				La innovación no solo es necesaria en la carretera sino en toda la cadena productiva. Desde las factorías hasta
				las fuentes de energía, la única manera de alcanzar un futuro libre de emisiones de CO2 es actuando sobre todo
				el ciclo de fabricación. Y para acelerar el crecimiento sostenible, Volvo Cars abrirá una nueva fábrica de
				vehículos eléctricos en Eslovaquia, un paso fundamental para el camino hacia la electrificación total para 2030.
			</p>
		</Intersection>
	</div>
</main>
