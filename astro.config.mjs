import tailwindcss from "@tailwindcss/vite";
import { defineConfig, envField } from "astro/config";
import compress from "@playform/compress";
import icon from "astro-icon"; // https://www.astroicon.dev/guides/upgrade/v1/

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
	site: "https://kzieber.github.io",
	env: {
		schema: {
			RESEND_API_KEY: envField.string({ context: "server", access: "secret" }),
		},
	},
	integrations: [
		compress({
			HTML: true,
			JavaScript: true,
			CSS: false,
			Image: false, // astro:assets handles this. Enabling this can dramatically increase build times
			SVG: false, // astro-icon handles this
		}),
		icon({
			// I include only the icons I use. This is because if you use SSR, ALL icons will be included (no bueno)
			// https://www.astroicon.dev/reference/configuration#include
			include: {
				tabler: [
					"bulb",
					"alert-triangle",
					"flame",
					"info-circle",
					"arrow-narrow-left",
					"arrow-narrow-right",
					"menu-2",
					"x",
					"chevron-down",
					"category",
					"calendar-event",
				],
			},
		}),
	],

	vite: {
		plugins: [tailwindcss()],
		// stop inlining short scripts to fix issues with ClientRouter: https://github.com/withastro/astro/issues/12804
		build: {
			assetsInlineLimit: 0,
		},
	},

	adapter: netlify(),
});
