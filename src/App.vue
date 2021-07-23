<template>
  <v-app>
    <app-top/>
    <v-main>
      <!-- Sizes your content based upon application components -->
      <!-- Provides the application the proper gutter -->
      <router-view/>
    </v-main>
    <app-footer/>
  </v-app>
</template>

<script>
	import AppFooter from "./components/AppFooter.vue";
	import AppTop from "./components/AppTop.vue";

	export default {
		name: "App",
		components: {AppFooter, AppTop},
	};
</script>
