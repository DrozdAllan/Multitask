<template>
  <v-container>
    <span class="text-h3 light-green--text">Chrono</span>
    <hr>
      <span class="label label-primary">{{ minutes }}</span> minutes
      <span class="label label-primary">{{ secondes }}</span> secondes
    <br>
    <p>
      <v-btn v-show="reset" @click="resetTimer">Reset</v-btn>
      <v-btn v-show="pause" @click="pauseTimer">Pause</v-btn>
      <v-btn v-show="resume" @click="resumeTimer">Resume</v-btn>
      <v-btn v-show="play" @click="startTimer" color="light-green white--text">Play</v-btn>
    </p>
  </v-container>
</template>

<script>

	export default {
		name: 'Chrono',
		data() {
			return {
				minutes: 0,
				secondes: 0,
				savedTime: 0,
				play: true,
				pause: false,
				reset: false,
				resume: false,
				interval: '',
			}
		},
		methods: {
			startTimer() {
				const start = Date.now();
				this.interval = setInterval(() => {
					const delta = Date.now() - start; // milliseconds elapsed since start
					this.secondes = Math.floor(delta / 1000); // in seconds
				}, 1000); // update about every second
				this.reset = true
				this.pause = true
				this.play = false
			},
			pauseTimer() {
				this.savedTime = this.secondes;
				clearInterval(this.interval);
				this.reset = true
				this.pause = false
				this.play = false
				this.resume = true
			},
			resumeTimer() {
				const start = Date.now();
				this.interval = setInterval(() => {
					const delta = Date.now() - start; // milliseconds elapsed since start
					this.secondes = Math.floor(delta / 1000) + this.savedTime; // in seconds
				}, 1000); // update about every second
				this.reset = true
				this.pause = true
				this.resume = false
			},
			resetTimer() {
				clearInterval(this.interval);
				this.minutes = 0;
				this.secondes = 0;
				this.reset = false;
				this.pause = false;
				this.play = true;
				this.savedTime = 0;
				this.resume = false;
			},
		}
	}
</script>