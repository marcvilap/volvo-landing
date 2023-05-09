module.exports = {
	printWidth: 120,
	tabWidth: 2,
	useTabs: true,
	semi: false,
	singleQuote: true,
	quoteProps: 'as-needed',
	trailingComma: 'es5',
	bracketSpacing: true,
	bracketSameLine: false,
	arrowParens: 'avoid',
	proseWrap: 'never',
	plugins: ['prettier-plugin-svelte', 'prettier-plugin-tailwindcss'],
	pluginSearchDirs: false,
	overrides: [
		{
			files: '*.svelte',
			options: {
				parser: 'svelte',
			},
		},
	],
}
