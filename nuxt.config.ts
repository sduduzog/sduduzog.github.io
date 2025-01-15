export default defineNuxtConfig({
	routeRules: {
		"/": { prerender: true },
	},

	modules: ["@nuxthq/studio", "@nuxt/content"],
});
