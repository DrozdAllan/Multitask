<template>
  <v-footer app absolute padless dark>
    <v-container class="text-center">
      <v-row align="center" no-gutters>
        <v-col>
          <router-link to="About" class="white--text text-decoration-none">
            {{ $t('about') }}
          </router-link
          >
        </v-col>
        <v-spacer class="hidden-md-and-down"/>
        <v-col>
          <v-btn elevation="0" @click="$root.$i18n.locale = 'en'">
            <v-icon x-large>$vuetify.icons.englishFlag</v-icon>
          </v-btn>
          <v-btn elevation="0" @click="$root.$i18n.locale = 'fr'">
            <v-icon x-large>$vuetify.icons.frenchFlag</v-icon>
          </v-btn>
          <v-btn elevation="0" @click="$root.$i18n.locale = 'de'">
            <v-icon x-large>$vuetify.icons.germanFlag</v-icon>
          </v-btn>
          <v-btn elevation="0" @click="$root.$i18n.locale = 'ja'">
            <v-icon x-large>$vuetify.icons.japaneseFlag</v-icon>
          </v-btn>
          <v-btn elevation="0" @click="$root.$i18n.locale = 'es'">
            <v-icon x-large>$vuetify.icons.spanishFlag</v-icon>
          </v-btn>
          <v-btn elevation="0" @click="$root.$i18n.locale = 'ru'">
            <v-icon x-large>$vuetify.icons.russianFlag</v-icon>
          </v-btn>
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