<template>
  <v-container>
    <v-row class="text-h3 teal--text" justify="center">
      Weather
    </v-row>

    <v-row justify="center" class="py-5">
      <v-form ref="formWeather"
              v-model="validFormWeather" lazy-validation>
        <v-text-field :label="$t('city')"
                      color="teal"
                      v-model="city"
                      :rules="cityRules">
        </v-text-field>

      </v-form>
    </v-row>

    <v-btn color="teal white--text" :disabled="!validFormWeather" @click="searchWeather" class="mb-3">
      {{$t("weather")}}
    </v-btn>

    <v-card v-if="weatherName !== ''">
      <v-img height="500px" class="white--text text-outline" :src="weatherInfo.imageFile" >
        <div class="text-h4 justify-center pt-3">{{ weatherName }}</div>
        <v-container fill-height class="text-subtitle-1">
          <v-row align="center">
            <v-col>
              {{$t('temp')}} : {{ weatherTemp.temp }}°<br>
              {{$t('feels')}} : {{ weatherTemp.feels_like }}°<br>
            </v-col>
            <v-col>
              {{$t('min')}} : {{ weatherTemp.temp_min }}°<br>
              {{$t('max')}} : {{ weatherTemp.temp_max }}°<br>
            </v-col>
            <v-col>
              {{$t('pressure')}} : {{ weatherTemp.pressure }}Pa<br>
              {{$t('humidity')}} : {{ weatherTemp.humidity }}%
            </v-col>
          </v-row>
          <v-row align="end">
            <v-col class="text-left">
              <v-icon color="white">mdi-weather-windy</v-icon>
              {{$t('speed')}} : {{ weatherWind.speed }}kts - {{$t('direction')}} : {{ weatherWind.deg }}°<br>

              <v-icon color="white">mdi-compass</v-icon>
              {{$t('long')}} : {{ weatherCoord.lon }} - {{$t('lat')}} : {{ weatherCoord.lat }}<br>

              <v-icon color="white">mdi-white-balance-sunny</v-icon>
              {{$t('sunrise')}} : {{ sunrise }} -
              {{$t('sunset')}} : {{ sunset }}<br>
            </v-col>
          </v-row>
          <v-card-subtitle>
            Photo by <a class="white--text" target="_blank" :href="weatherInfo.link">{{ weatherInfo.credit }}</a>
          </v-card-subtitle>
        </v-container>
      </v-img>
    </v-card>
  </v-container>
</template>

<script>
	import {images} from '@/assets/imagesDb.js';

	const axios = require('axios');

	export default {
		name: "Weather",
		data() {
			return {
				validFormWeather: true,
				city: "",
				cityRules: [
					v => !!v || 'City is required',
				],
				weatherName: '',
				weatherStatus: '',
				weatherTemp: {},
				weatherCoord: {},
				weatherWind: {},
				weatherSun: {},
			}
		},
		methods: {
			searchWeather() {
				console.log(this.city);
				// GET request for remote image in node.js
				axios({
					method: 'GET',
					url: 'http://api.openweathermap.org/data/2.5/weather?q=' + this.city + '&units=metric&appid=17bc5c0bfdfb2c4bbfeba0bb22b5d40b',
				}).then(response => {
					const data = response.data;
					console.log(data);
					this.weatherName = data.name;
					this.weatherStatus = data.weather[0].main;
					this.weatherCoord = data.coord;
					this.weatherWind = data.wind;
					this.weatherSun = data.sys;
					this.weatherTemp = data.main;
				});
			}
		},
		computed: {
			sunrise() {
				const sunUp = new Date(this.weatherSun.sunrise * 1000);
				return sunUp.getHours() + ':' + sunUp.getMinutes();
			},
			sunset() {
				const sunDown = new Date(this.weatherSun.sunset * 1000);
				return sunDown.getHours() + ':' + sunDown.getMinutes();
			},
			weatherInfo() {
				let weatherInfo = {};
				for (const image of images) {
					if (image.weather === this.weatherStatus) {
						weatherInfo.imageFile = image.imageFile;
						weatherInfo.credit = image.credit;
						weatherInfo.link = image.link;
					}
				}
				return weatherInfo;
			},
		},
	}
</script>

<style scoped>
.text-outline {
  text-shadow:
          -1px -1px 0 #009688,
          1px -1px 0 #009688,
          -1px 1px 0 #009688,
          1px 1px 0 #009688;
}
 </style>