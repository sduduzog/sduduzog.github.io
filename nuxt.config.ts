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
	compatibilityDate: "2025-01-15",
});
