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
			weights: [400, 600, 700],
		},
	},
	compatibilityDate: "2025-01-15",
});
