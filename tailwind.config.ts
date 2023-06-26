import type { Config } from 'tailwindcss'

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		screens: {
			sm: '28rem',
			md: '48rem',
			lg: '64rem',
			xl: '80rem',
		},
		container: {
			center: true,
			padding: {
				DEFAULT: '1rem',
				sm: '2rem',
				xl: '6rem',
			},
		},
		extend: {
			fontFamily: {
				sans: '"Bradesco Sans", sans-serif',
				display: '"Globoface Gothic Display 2001", sans-serif',
			},
		},
	},
} satisfies Config
