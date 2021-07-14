<template>
  <v-footer app inset absolute padless dark>
    <v-container fluid class="pt-0 text-center">
      <v-row>
        <v-col class="px-0 px-md-3">
          <a class="white--text">
            DarkMode </a
          ></v-col>
        <v-spacer class="hidden-md-and-down"/>
        <v-col>
          <router-link
                  to="privacyPolicy"
                  class="text-decoration-none white--text"
          >Language Btns
          </router-link
          >
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
	export default {
		name: "AppFooter",
	}
</script>