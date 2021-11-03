<template>
  <v-app>
    <app-top />
    <v-main>
      <!-- Sizes your content based upon application components -->
      <!-- Provides the application the proper gutter -->
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
  import AppTop from "./components/AppTop.vue";

  export default {
    name: "App",
    components: { AppTop },
  };
</script>
