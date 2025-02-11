// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://astro-lite.netlify.app',
	integrations: [
		starlight({
			title: 'AstroLite',
			social: {
				github: 'https://github.com/marcosklender/astrolite',
				linkedin: 'https://www.linkedin.com/in/marcosklender/?locale=en_US',
				email: 'mailto:marcosklender@gmail.com'
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
