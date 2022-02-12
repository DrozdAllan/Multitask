<template>
	<v-container>
		<v-row class="text-h3 green--text" justify="center">
			Chrono
		</v-row>

		<v-row justify="center" class="py-5">
			<v-col>
				<span class="label label-primary text-h3">{{ minutes }}</span>
				minutes
				<span class="label label-primary text-h3">{{ secondes }}</span>
				secondes
			</v-col>
			<!-- TODO: add milliseconds and fix the pause resetting the second -->
		</v-row>

		<v-btn v-show="reset" @click="resetTimer" color="green white--text">{{
			$t("reset")
		}}</v-btn>
		<v-btn v-show="pause" @click="pauseTimer" color="green white--text">{{
			$t("pause")
		}}</v-btn>
		<v-btn v-show="resume" @click="resumeTimer" color="green white--text">{{
			$t("resume")
		}}</v-btn>
		<v-btn v-show="play" @click="startTimer" color="green white--text">{{
			$t("chrono")
		}}</v-btn>
	</v-container>
</template>

<script>
export default {
	name: "Chrono",
	data() {
		return {
			minutes: 0,
			secondes: 0,
			savedTime: 0,
			play: true,
			pause: false,
			reset: false,
			resume: false,
			interval: "",
		};
	},
	methods: {
		startTimer() {
			const start = Date.now();
			this.interval = setInterval(() => {
				const delta = Date.now() - start; // milliseconds elapsed since start
				this.secondes = Math.floor(delta / 1000); // in seconds
			}, 1000); // update about every second
			this.reset = true;
			this.pause = true;
			this.play = false;
		},
		pauseTimer() {
			this.savedTime = this.secondes;
			clearInterval(this.interval);
			this.reset = true;
			this.pause = false;
			this.play = false;
			this.resume = true;
		},
		resumeTimer() {
			const start = Date.now();
			this.interval = setInterval(() => {
				const delta = Date.now() - start; // milliseconds elapsed since start
				this.secondes = Math.floor(delta / 1000) + this.savedTime; // in seconds
			}, 1000); // update about every second
			this.reset = true;
			this.pause = true;
			this.resume = false;
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
	},
};
</script>
