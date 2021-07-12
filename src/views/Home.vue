<template>
  <v-container class="text-center">
    Welcome to multitask <br>
    If you want to access to all functionalities, please enter a nickname :
    <v-row>
      <v-col>
        <todo-list/>
      </v-col>
      <v-col>
        <Calendar/>
      </v-col>
    </v-row>

    <weather/>

    <chrono/>
    ajouter chronometre, ajouter horloges mondiales, ajouter mode nuit et traductions dans le footer
  </v-container>
</template>

<script>
	import TodoList from "../components/TodoList";
	import Calendar from "../components/Calendar";
	import Weather from "../components/Weather";
	import Chrono from "../components/Timer";

	export default {
		name: 'Home',

		components: {
			Chrono,
			Weather,
			Calendar,
			TodoList
		},
	}
</script>
