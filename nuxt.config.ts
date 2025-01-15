export default defineNuxtConfig({
	modules: [
		"@nuxthq/studio",
		"@nuxt/content",
		"@nuxt/fonts",
		"@nuxtjs/tailwindcss",
	],
	content: {
		documentDriven: true,
	},
	fonts: {
		defaults: {
			weights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
		},
	},
	compatibilityDate: "2025-01-15",
});
