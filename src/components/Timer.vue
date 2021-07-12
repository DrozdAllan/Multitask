<template>
  <v-container>
    Chrono/Timer
    Set a timer :
    <v-time-picker
            format="24hr"
            use-seconds
            v-model="time"
    ></v-time-picker>
    <v-btn @click="startChrono()">
      Start !
    </v-btn>
    <vac v-if="chrono" :left-time="leftTime">
      <template
              v-slot:process="{ timeObj }">
        <span>{{ `${timeObj.m}m ${timeObj.s}s` }}</span>
      </template>
      <template
              v-slot:finish>
        <span>Done!</span>
      </template>
    </vac>

  </v-container>
</template>

<script>
	export default {
		name: 'Chrono',
		data() {
			return {
				chrono: false,
				time: "",
				leftTime: "",
			}
		},
		computed: {
			timeToMs() {
				let hms = this.time;   // your input string
				const a = hms.split(':'); // split it at the colons

				// minutes are worth 60 seconds. Hours are worth 60 minutes.
				const seconds = (+a[0]) * 60 * 60 + (+a[1]) * 60 + (+a[2]);

				const ms = seconds * 1000;

				return ms;
			}
		},
		methods: {
			startChrono() {
				this.chrono = true;
				this.leftTime = this.timeToMs; // doit etre en milliseconds
			}
		},
	}
</script>