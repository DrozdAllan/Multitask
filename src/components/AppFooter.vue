<template>
  <v-footer app inset absolute padless dark>
    <v-container fluid class="pt-0 text-center">
      <v-row>
        <v-spacer class="hidden-md-and-down"/>
        <v-col class="px-0 px-md-3">
          <v-col cols="12" class="px-0"
          ><span class="text-h6 text-md-h5">About</span></v-col
          >
          <a class="white--text">
            Contact </a
          > <br>
          <router-link
                  to="privacyPolicy"
                  class="text-decoration-none white--text"
          >Politique de confidentialité
          </router-link
          >
        </v-col>
        <v-spacer class="hidden-md-and-down"/>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
	export default {
		name: "AppFooter",
	}
</script>