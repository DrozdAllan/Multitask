<template>
  <v-container>
    <span class="text-h3 teal--text">Weather</span>
    <v-form ref="formWeather"
            v-model="validFormWeather" lazy-validation>
      <v-text-field label="City"
                    color="teal"
                    v-model="city"
                    :rules="cityRules">City
      </v-text-field>

      <v-btn color="teal white--text" :disabled="!validFormWeather" @click="searchWeather">Weather</v-btn>
    </v-form>
    <v-card v-if="weatherName !== ''">
      <v-img height="200px" class="white--text align-center" :src="weatherImg">
        <v-card-title>{{ weatherName }}</v-card-title>
        <v-card-title>Actual Temp : {{ weatherTemp.temp }}. Feels Like : {{ weatherTemp.feels_like }}. Min Temp : {{
          weatherTemp.temp_min }}. Max Temp {{ weatherTemp.temp_max }}. Pressure {{ weatherTemp.pressure }}. Humidity {{
          weatherTemp.pressure }}
        </v-card-title>
      </v-img>
      <v-card-text>
        <div>
          <v-icon>mdi-weather-windy</v-icon>
          Speed {{ weatherWind.speed }} Deg {{ weatherWind.deg }}
        </div>
        <div>
          <v-icon>mdi-compass</v-icon>
          Lontitude {{ weatherCoord.lon }} Latitude {{ weatherCoord.lat }}
        </div>
        <div>
          <v-icon>mdi-white-balance-sunny</v-icon>
          Today's sunrise : {{ weatherSun.sunrise }}
          Today's sunset : {{ weatherSun.sunset }}
        </div>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
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
			weatherImg() {
				let imgUrl = '';
				if (this.weatherStatus === 'Thunderstorm') {
					imgUrl = require('@/assets/images/Thunderstorm-johannes-plenio-ESL1rIs9j48-unsplash.jpg');
				} else if (this.weatherStatus === 'Drizzle') {
					imgUrl = require('@/assets/images/Drizzle-anant-chandra-kiZiXe8xueo-unsplash.jpg');
				} else if (this.weatherStatus === 'Rain') {
					imgUrl = require('@/assets/images/Rain-natsuki-4DsowKunk84-unsplash.jpg');
				} else if (this.weatherStatus === 'Snow') {
					imgUrl = require('@/assets/images/Snow-josh-hild-DUo_v00MumY-unsplash.jpg');
				} else if (this.weatherStatus === 'Mist') {
					imgUrl = require('@/assets/images/Mist-cristofer-jeschke-YmsrXcDf0J8-unsplash.jpg');
				} else if (this.weatherStatus === 'Haze') {
					imgUrl = require('@/assets/images/Haze-lute-Haa818ukKUE-unsplash.jpg');
				} else if (this.weatherStatus === 'Dust') {
					imgUrl = require('@/assets/images/Dust-natalie-comrie-KyBu9OiG6Tg-unsplash.jpg');
				} else if (this.weatherStatus === 'Fog') {
					imgUrl = require('@/assets/images/Fog-jenna-anderson-UylXHkdG42s-unsplash.jpg');
				} else if (this.weatherStatus === 'Sand') {
					imgUrl = require('@/assets/images/Sand-vincent-goulet--8XxA-QO3Y8-unsplash.jpg');
				} else if (this.weatherStatus === 'Ash') {
					imgUrl = require('@/assets/images/Ash-marius-gerome-photography-kUt61haB6WY-unsplash.jpg');
				} else if (this.weatherStatus === 'Squall') {
					imgUrl = require('@/assets/images/Squall-nick-fewings-OowKAQM1_sE-unsplash.jpg');
				} else if (this.weatherStatus === 'Tornado') {
					imgUrl = require('@/assets/images/Tornado-nikolas-noonan-fQM8cbGY6iQ-unsplash.jpg');
				} else if (this.weatherStatus === 'Clear') {
					imgUrl = require('@/assets/images/Clear-zuzana-ruttkay-n2poVQijgzo-unsplash.jpg');
				} else if (this.weatherStatus === 'Clouds') {
					imgUrl = require('@/assets/images/Clouds-tom-barrett-hgGplX3PFBg-unsplash.jpg');
				}
				return imgUrl;
			}
		}
	}
</script>