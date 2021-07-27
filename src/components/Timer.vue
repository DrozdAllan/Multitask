<template>
  <v-container>
    <v-row class="text-h3 cyan--text" justify="center">
      Timer
    </v-row>

    <v-row justify="center" class="py-2">
      <v-col cols="3">
        <v-text-field color="cyan" :label="$t('minutes')" v-model.number="minutes"></v-text-field>
      </v-col>
      <v-col cols="3">
        <v-text-field color="cyan" :label="$t('seconds')" v-model.number="seconds"></v-text-field>
      </v-col>
    </v-row>

    <v-btn color="cyan white--text" v-if="timer === false" @click="startTimer()">
      {{ $t('timer') }}
    </v-btn>

    <v-btn color="cyan white--text" v-if="timer === true" @click="stopTimer()">
      {{ $t('timerStop') }}
    </v-btn>
    <v-row justify="center" class="py-5">
      <countdown v-if="timer" :end-time="new Date().getTime() + timeToMs">
        <template
                v-slot:process="{ timeObj }">
          <v-progress-circular
                  :rotate="-90"
                  :size="300"
                  :width="20"
                  :value="value"
                  color="cyan"
          >
            {{ `${timeObj.m}m ${timeObj.s}s` }}
          </v-progress-circular>
        </template>
        <template
                v-slot:finish>
          <v-progress-circular
                  :rotate="-90"
                  :size="300"
                  :width="20"
                  :value="value"
                  color="cyan"
          >
            {{ $t('done') }}
          </v-progress-circular>
        </template>
      </countdown>
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
				interval: {},
				value: 100
			}
		},
		computed: {
			timeToMs() {
				return ((this.minutes * 60) + this.seconds) * 1000;
			},
		},
		methods: {
			startTimer() {
				this.timer = true;
				this.leftTime = this.timeToMs; // doit être en milliseconds
				this.interval = setInterval(() => {
					if (this.value === 0) {
						return (this.value = 100)
					}
					this.value -= 100 / (this.timeToMs / 1000);
				}, 1000)
			},
			stopTimer() {
				this.timer = false;
				clearInterval(this.interval);
				this.value = 100;
			}
		},
	}
</script>