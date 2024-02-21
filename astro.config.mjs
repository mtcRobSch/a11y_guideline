import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'a11y@mtc.berlin',
			defaultLocale: 'root',
			locales: {
				root: {
					label: 'Deutsch',
					lang: 'de-DE',
				},
			},
			
			
			customCss: ['./src/tailwind.css'],
		}),
		tailwind({ applyBaseStyles: false }),
	],
});
