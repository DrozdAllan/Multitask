<template>
  <v-container class="text-center">
    <v-row>
      <v-spacer class="col-3"/>
      <v-col cols="6">
        <router-link to="/" class="text-h4 text-decoration-none"><span class="blue--text">Mü</span>
          <span class="cyan--text">lt</span>
          <span class="teal--text">it</span>
          <span class="green--text">as</span>
          <span class="light-green--text">kÿ</span>
        </router-link>
      </v-col>
      <v-col cols="3">
        <v-btn small rounded :color="dynamicDarkMode1()" @click="toggleDarkMode">
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
				return this.$store.getters.getDarkMode
			},
		},
		methods: {
			toggleDarkMode() {
				this.$store.commit('toggleDarkMode');
			},
			dynamicDarkMode1() {
				if (this.darkMode === true) {
					return 'white';
				} else {
					return 'black';
				}
			},
			dynamicDarkMode2() {
				if (this.darkMode === true) {
					return 'black';
				} else {
					return 'white';
				}
			}
		}
	}
</script>