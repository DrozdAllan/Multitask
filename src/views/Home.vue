<template>
  <v-container class="text-center">
    <h3><span class="blue--text">Mu</span><span class="indigo--text">lt</span><span class="teal--text">it</span><span
            class="light-green--text">ask</span>
    </h3>
    <v-row>
      <v-spacer/>
      <v-col v-if="!loggedIn" cols="4">
        If you want to access to all functionalities, please enter a nickname :
        <v-row no-gutters class="py-5">
          <v-spacer/>
          <v-text-field color="red" label="Nickname" v-model="logName"></v-text-field>
          <v-btn @click="logIn" color="red white--text">Log !</v-btn>
          <v-spacer/>
        </v-row>
      </v-col>
      <v-col v-else cols="4">
        <span class="text-h2">Hello {{ nickname }} !</span>
      </v-col>
      <v-spacer/>
    </v-row>
    <v-row>
      <v-col cols="12">
        <Calendar/>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="7" id="goToClock">
        <todo-list/>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <timer/>
      </v-col>
      <v-col>
        <weather/>
      </v-col>
      <v-col>
        <chrono/>
      </v-col>
    </v-row>


    ajouter horloges mondiales, ajouter mode nuit et traductions dans le footer
  </v-container>
</template>

<script>
	import TodoList from "../components/TodoList";
	import Calendar from "../components/Calendar";
	import Weather from "../components/Weather";
	import Timer from "../components/Timer";
	import Chrono from "../components/Chrono";

	export default {
		name: 'Home',
		components: {
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
			}
		},
		methods: {
			logIn() {
				const logName = this.logName;
				this.$store.dispatch('login', {logName});
			}
		}
	}
</script>
