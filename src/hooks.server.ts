import type { Handle } from '@sveltejs/kit'
import { building } from '$app/environment'
import { minify, type Options } from 'html-minifier-terser'

const minification_options = {
	collapseBooleanAttributes: true,
	collapseWhitespace: true,
	conservativeCollapse: true,
	decodeEntities: true,
	html5: true,
	ignoreCustomComments: [/^#/],
	minifyCSS: true,
	minifyJS: true,
	removeAttributeQuotes: false,
	removeComments: false, // some hydration code needs comments, so leave them in
	removeOptionalTags: false,
	removeRedundantAttributes: true,
	removeScriptTypeAttributes: true,
	removeStyleLinkTypeAttributes: true,
	sortAttributes: false,
	sortClassName: false,
} satisfies Options

export const handle = (async ({ event, resolve }) => {
	let page = ''
	return await resolve(event, {
		transformPageChunk: async ({ html, done }) => {
			page += html
			if (done) {
				return building ? await minify(page, minification_options) : page
			}
		},
	})
}) satisfies Handle
