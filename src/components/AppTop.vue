<template>
  <v-container class="text-center">
    <v-row align="center">
      <v-col cols="3">
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              small
              rounded
              class="multicolor white--text"
              v-bind="attrs"
              v-on="on"
            >
              <v-icon>mdi-translate</v-icon>
            </v-btn>
          </template>

          <v-list>
            <v-list-item>
              <v-icon class="mx-auto" x-large @click="$root.$i18n.locale = 'en'"
                >$vuetify.icons.englishFlag</v-icon
              >
            </v-list-item>
            <v-list-item>
              <v-icon class="mx-auto" x-large @click="$root.$i18n.locale = 'fr'"
                >$vuetify.icons.frenchFlag</v-icon
              >
            </v-list-item>
            <v-list-item>
              <v-icon class="mx-auto" x-large @click="$root.$i18n.locale = 'de'"
                >$vuetify.icons.germanFlag</v-icon
              >
            </v-list-item>
            <v-list-item>
              <v-icon class="mx-auto" x-large @click="$root.$i18n.locale = 'ja'"
                >$vuetify.icons.japaneseFlag</v-icon
              >
            </v-list-item>
            <v-list-item>
              <v-icon class="mx-auto" x-large @click="$root.$i18n.locale = 'es'"
                >$vuetify.icons.spanishFlag</v-icon
              >
            </v-list-item>
            <v-list-item>
              <v-icon class="mx-auto" x-large @click="$root.$i18n.locale = 'ru'"
                >$vuetify.icons.russianFlag</v-icon
              >
            </v-list-item>
          </v-list>
        </v-menu>
      </v-col>
      <v-col cols="6">
        <router-link to="/" class="text-h5 text-md-h3 text-decoration-none"
          ><span class="blue--text">Mü</span>
          <span class="cyan--text">lt</span>
          <span class="teal--text">it</span>
          <span class="green--text">as</span>
          <span class="light-green--text">kÿ</span>
        </router-link>
        <router-link to="/about" class="text-decoration-none">
          <v-icon> mdi-information-variant </v-icon>
        </router-link>
      </v-col>
      <v-col cols="3">
        <v-btn
          small
          rounded
          :color="dynamicDarkMode1()"
          @click="toggleDarkMode"
        >
          <v-icon :color="dynamicDarkMode2()"> mdi-theme-light-dark</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: "AppTop",
    computed: {
      darkMode() {
        return this.$store.getters.getDarkMode;
      },
    },
    methods: {
      toggleDarkMode() {
        this.$store.commit("toggleDarkMode");
      },
      dynamicDarkMode1() {
        if (this.darkMode === true) {
          return "white";
        } else {
          return "black";
        }
      },
      dynamicDarkMode2() {
        if (this.darkMode === true) {
          return "black";
        } else {
          return "white";
        }
      },
    },
  };
</script>

<style lang="sass" scoped>
  .multicolor
      background: linear-gradient(to right, #2196F3, #00BCD4, #009688, #4CAF50, #8BC34A)
</style>
