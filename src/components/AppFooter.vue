<template>
  <v-footer app inset absolute padless dark>
    <v-container fluid class="pt-0 text-center">
      <v-row>
        <v-col class="px-0 px-md-3">
          <a class="white--text">
            Credits </a
          ></v-col>
        <v-spacer class="hidden-md-and-down"/>
        <v-col>
          <v-btn elevation="0" @click="$root.$i18n.locale = 'en'"><v-icon x-large>$vuetify.icons.englishFlag</v-icon></v-btn>
          <v-btn elevation="0" @click="$root.$i18n.locale = 'fr'"><v-icon x-large>$vuetify.icons.frenchFlag</v-icon></v-btn>
          <v-btn elevation="0" @click="$root.$i18n.locale = 'de'"><v-icon x-large>$vuetify.icons.germanFlag</v-icon></v-btn>
          <v-btn elevation="0" @click="$root.$i18n.locale = 'ja'"><v-icon x-large>$vuetify.icons.japaneseFlag</v-icon></v-btn>
          <v-btn elevation="0" @click="$root.$i18n.locale = 'es'"><v-icon x-large>$vuetify.icons.spanishFlag</v-icon></v-btn>
          <v-btn elevation="0" @click="$root.$i18n.locale = 'ru'"><v-icon x-large>$vuetify.icons.russianFlag</v-icon></v-btn>
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