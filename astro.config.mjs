import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';
import vue from '@astrojs/vue';

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
			sidebar: [
				{
					label: "Inhaltsverzeichnis",
					items: [
						{
							label: "Startseite",
							link: "/"
						},
						{
							label: 'Tutorial',
							autogenerate: { directory: 'Tutorial' },
						},
						{
							label: 'Sammlung',
							autogenerate: { directory: 'sammlung' },
						},
					],
				},
			],
			components: {

				Footer:  './src/layouts/footer.astro',
			},
			customCss: ['./src/tailwind.css'],
		}),
		tailwind({ applyBaseStyles: true }),
		vue(),
		
	],
	
});
