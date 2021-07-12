<template>
  <v-app>
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
	import AppNavigation from "./components/AppNavigation.vue";

	export default {
		name: "App",
		components: {AppNavigation, AppFooter},
	};
</script>
