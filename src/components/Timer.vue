<template>
  <v-container>
    <span class="text-h3 indigo--text">Timer</span>
    <v-container>
      <v-row justify="center">
        <v-col cols="2">
          <v-select color="indigo" label="Minutes" :items="items" v-model="minutes"/>
        </v-col>
        <v-col cols="2">
          <v-select color="indigo" label="Seconds" :items="items" v-model="seconds"/>
        </v-col>
      </v-row>
    </v-container>
    <v-btn color="indigo white--text" v-if="timer === false" @click="startTimer()">
      Start !
    </v-btn>
    <v-btn color="red" v-if="timer === true" @click="stopTimer()">
      Stop !
    </v-btn>
    <v-row justify="center" class="py-5">
      <vac v-if="timer" :left-time="leftTime">
        <template
                v-slot:process="{ timeObj }">
          <span>{{ `${timeObj.m}m ${timeObj.s}s` }}</span>
        </template>
        <template
                v-slot:finish>
          <span>Done!</span>
        </template>
      </vac>
    </v-row>

  </v-container>
</template>

<script>
	export default {
		name: 'Timer',
		data() {
			return {
				minutes: 0,
				seconds: 0,
				timer: false,
				time: "",
				leftTime: "",
				items: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
			}
		},
		computed: {
			timeToMs() {
				// minutes are worth 60 seconds. Hours are worth 60 minutes.
				const seconds = (this.minutes) * 60 + (this.seconds);

				const ms = seconds * 1000;

				return ms;
			}
		},
		methods: {
			startTimer() {
				this.timer = true;
				this.leftTime = this.timeToMs; // doit être en milliseconds
			},
			stopTimer() {
				this.timer = false;
			}
		},
	}
</script>