// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'AstroLite',
			social: {
				github: 'https://github.com/marcosklender/astrolite',
			},
			sidebar: [
				{
					label: 'Start Here',
					autogenerate: { directory: 'start-here' },
				},
				{
					label: 'Blocks',
					autogenerate: { directory: 'blocks' },
				}
			],
		}),
	],
});
