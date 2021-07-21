<template>
  <v-container class="text-center">
    <v-row>
      <v-spacer class="col-3"/>
      <v-col cols="6">
        <h3><span class="blue--text">Mü</span>
          <span class="cyan--text">lt</span>
          <span class="teal--text">it</span>
          <span class="green--text">as</span>
          <span class="light-green--text">kÿ</span>
        </h3>
      </v-col>
      <v-col cols="3">
        <v-btn small rounded color="black" @click="toggleDarkMode">
          <v-icon color="white">mdi-theme-light-dark</v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-spacer/>
      <v-col v-if="!loggedIn" cols="4">
        Enter a nickname to save your tasks online<br>
        <v-row no-gutters class="py-5">
          <v-spacer/>
          <v-col cols="12">
            <v-text-field dense outlined @keyup.enter="logIn" color="green" hint="nb: these are NOT saved by any security password, so anybody can get what you upload here with only your
        nickname" class="text-center" label="Nickname" v-model="logName"></v-text-field>
          </v-col>
          <v-spacer/>
          <v-col>
            <v-btn @click="logIn" class="multi" color="white--text">Log !</v-btn>
          </v-col>
        </v-row>
      </v-col>
      <v-col v-else cols="4">
        <span class="text-h2">Hello {{ nickname }} !</span>
      </v-col>
      <v-spacer/>
    </v-row>
    <v-row :class="[ darkMode ? 'border-gradient-first-black' : 'border-gradient-first']">
      <v-col cols="12">
        <Calendar/>
      </v-col>
      <v-col cols="12" id="goToClock">
        <todo-list/>
      </v-col>
    </v-row>

    <v-row class="my-15" :class="[ darkMode ? 'border-gradient-black' : 'border-gradient-first']">
      <v-col>
        <timer/>
      </v-col>
      <v-divider vertical/>
      <v-col>
        <weather/>
      </v-col>
      <v-divider vertical/>
      <v-col>
        <chrono/>
      </v-col>
    </v-row>

    <v-row class="my-10" :class="[ darkMode ? 'border-gradient-world-black' : 'border-gradient-world']">
      <v-col>
        <world/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
	import TodoList from "../components/TodoList";
	import Calendar from "../components/Calendar";
	import Weather from "../components/Weather";
	import Timer from "../components/Timer";
	import Chrono from "../components/Chrono";
	import World from "@/components/World";

	export default {
		name: 'Home',
		components: {
			World,
			Chrono,
			Timer,
			Weather,
			Calendar,
			TodoList
		},
		data() {
			return {
				logName: '',
			}
		},
		computed: {
			loggedIn() {
				return this.$store.getters.getLoggedIn
			},
			nickname() {
				return this.$store.getters.getNickname
			},
			darkMode() {
				return this.$store.getters.getDarkMode
			}
		},
		methods: {
			logIn() {
				const logName = this.logName;
				this.$store.dispatch('login', {logName});
			},
			toggleDarkMode() {
				this.$store.commit('toggleDarkMode');
			}
		}
	}
</script>

<style scoped>
  .multi {
    background: linear-gradient(to right, #2196F3, #00BCD4, #009688, #4CAF50, #8BC34A);
  }

  .border-gradient-first {
    border-width: 5px;
    border-style: solid;
    border-color: transparent;
    border-radius: 30px;
    background-image: linear-gradient(white, white),
    linear-gradient(to bottom, #2196F3, #1E88E5);
    background-origin: border-box;
    background-clip: content-box, border-box;
  }

  .border-gradient-first-black {
    border-width: 5px;
    border-style: solid;
    border-color: transparent;
    border-radius: 30px;
    background-image: linear-gradient(#212121, #212121),
    linear-gradient(to bottom, #2196F3, #1E88E5);
    background-origin: border-box;
    background-clip: content-box, border-box;
  }

  .border-gradient {
    border-width: 5px;
    border-style: solid;
    border-color: transparent;
    border-radius: 30px;
    background-image: linear-gradient(white, white),
    linear-gradient(to right, #00BCD4, #009688, #4CAF50);
    background-origin: border-box;
    background-clip: content-box, border-box;
  }

  .border-gradient-black {
    border-width: 5px;
    border-style: solid;
    border-color: transparent;
    border-radius: 30px;
    background-image: linear-gradient(#212121, #212121),
    linear-gradient(to right, #00BCD4, #009688, #4CAF50);
    background-origin: border-box;
    background-clip: content-box, border-box;
  }

  .border-gradient-world {
    border-width: 5px;
    border-style: solid;
    border-color: transparent;
    border-radius: 30px;
    background-image: linear-gradient(white, white),
    linear-gradient(to bottom, #8BC34A, #7CB342);
    background-origin: border-box;
    background-clip: content-box, border-box;
  }
  .border-gradient-world-black {
    border-width: 5px;
    border-style: solid;
    border-color: transparent;
    border-radius: 30px;
    background-image: linear-gradient(#212121, #212121),
    linear-gradient(to bottom, #8BC34A, #7CB342);
    background-origin: border-box;
    background-clip: content-box, border-box;
  }
</style>
