<template>
  <v-container>
    <div style="height: 800px; width: 100%">
      <div style="height: 100px; overflow: auto;">
        <span class="text-h3 light-green--text">{{$t('time')}}</span>
        <br>
        <v-btn x-small @click="refresh" color="light-green white--text">
          {{$t('refresh')}}
        </v-btn>
      </div>
      <l-map
              v-if="showMap"
              :zoom="zoom"
              :center="center"
              :options="mapOptions"
              style="height: 90%"
      >
        <l-tile-layer
                :url="url"
                :attribution="attribution"
        />
        <l-marker :lat-lng="Paris">
          <l-tooltip :options="{ permanent: true, interactive: true, direction: 'top' }">
            <div @click="innerClick">
              {{ nowTime(0) }}
            </div>
          </l-tooltip>
        </l-marker>
        <l-marker :lat-lng="Washington">
          <l-tooltip :options="{ permanent: true, interactive: true, direction: 'top' }">
            <div @click="innerClick">
              {{ nowTime(-6) }}
            </div>
          </l-tooltip>
        </l-marker>
        <l-marker :lat-lng="Tokyo">
          <l-tooltip :options="{ permanent: true, interactive: true, direction: 'top' }">
            <div @click="innerClick">
              {{ nowTime(7) }}
            </div>
          </l-tooltip>
        </l-marker>
        <l-marker :lat-lng="London">
          <l-tooltip :options="{ permanent: true, interactive: true, direction: 'top' }">
            <div @click="innerClick">
              {{ nowTime(-1) }}
            </div>
          </l-tooltip>
        </l-marker>
        <l-marker :lat-lng="Moskow">
          <l-tooltip :options="{ permanent: true, interactive: true, direction: 'top' }">
            <div @click="innerClick">
              {{ nowTime(1) }}
            </div>
          </l-tooltip>
        </l-marker>
        <l-marker :lat-lng="Roma">
          <l-tooltip :options="{ permanent: true, interactive: true, direction: 'top' }">
            <div @click="innerClick">
              {{ nowTime(0) }}
            </div>
          </l-tooltip>
        </l-marker>
        <l-marker :lat-lng="SanFrancisco">
          <l-tooltip :options="{ permanent: true, interactive: true, direction: 'top' }">
            <div @click="innerClick">
              {{ nowTime(-9) }}
            </div>
          </l-tooltip>
        </l-marker>
        <l-marker :lat-lng="Mexico">
          <l-tooltip :options="{ permanent: true, interactive: true, direction: 'top' }">
            <div @click="innerClick">
              {{ nowTime(-7) }}
            </div>
          </l-tooltip>
        </l-marker>
        <l-marker :lat-lng="Brasilia">
          <l-tooltip :options="{ permanent: true, interactive: true, direction: 'top' }">
            <div @click="innerClick">
              {{ nowTime(-5) }}
            </div>
          </l-tooltip>
        </l-marker>
        <l-marker :lat-lng="BuenosAires">
          <l-tooltip :options="{ permanent: true, interactive: true, direction: 'top' }">
            <div @click="innerClick">
              {{ nowTime(-5) }}
            </div>
          </l-tooltip>
        </l-marker>
        <l-marker :lat-lng="Sydney">
          <l-tooltip :options="{ permanent: true, interactive: true, direction: 'top' }">
            <div @click="innerClick">
              {{ nowTime(8) }}
            </div>
          </l-tooltip>
        </l-marker>
        <l-marker :lat-lng="Bangkok">
          <l-tooltip :options="{ permanent: true, interactive: true, direction: 'top' }">
            <div @click="innerClick">
              {{ nowTime(5) }}
            </div>
          </l-tooltip>
        </l-marker>
        <l-marker :lat-lng="Beijing">
          <l-tooltip :options="{ permanent: true, interactive: true, direction: 'top' }">
            <div @click="innerClick">
              {{ nowTime(6) }}
            </div>
          </l-tooltip>
        </l-marker>
        <l-marker :lat-lng="Lisbon">
          <l-tooltip :options="{ permanent: true, interactive: true, direction: 'top' }">
            <div @click="innerClick">
              {{ nowTime(-1) }}
            </div>
          </l-tooltip>
        </l-marker>
        <l-marker :lat-lng="Bamako">
          <l-tooltip :options="{ permanent: true, interactive: true, direction: 'top' }">
            <div @click="innerClick">
              {{ nowTime(-2) }}
            </div>
          </l-tooltip>
        </l-marker>
        <l-marker :lat-lng="Luanda">
          <l-tooltip :options="{ permanent: true, interactive: true, direction: 'top' }">
            <div @click="innerClick">
              {{ nowTime(-1) }}
            </div>
          </l-tooltip>
        </l-marker>
        <l-marker :lat-lng="Antananarivo">
          <l-tooltip :options="{ permanent: true, interactive: true, direction: 'top' }">
            <div @click="innerClick">
              {{ nowTime(1) }}
            </div>
          </l-tooltip>
        </l-marker>
        <l-marker :lat-lng="NewDelhi">
          <l-tooltip :options="{ permanent: true, interactive: true, direction: 'top' }">
            <div @click="innerClick">
              {{ nowTime(3.5) }}
            </div>
          </l-tooltip>
        </l-marker>

      </l-map>
    </div>
  </v-container>

</template>

<script>
	import {latLng, Icon} from "leaflet";
	import {LMap, LTileLayer, LMarker, LPopup, LTooltip} from "vue2-leaflet";

	delete Icon.Default.prototype._getIconUrl;
	Icon.Default.mergeOptions({
		iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
		iconUrl: require('leaflet/dist/images/marker-icon.png'),
		shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
	});

	export default {
		name: "World",
		components: {
			LMap,
			LTileLayer,
			LMarker,
			LPopup,
			LTooltip
		},
		data() {
			return {
				zoom: 3,
				center: latLng(40.00000, 12.00000),
				url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
				attribution:
					'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
				Paris: latLng(48.8566, 2.3522),
				Washington: latLng(38.897957, -77.036560),
				Tokyo: latLng(35.652832, 139.839478),
				London: latLng(51.509865, -0.118092),
				Moskow: latLng(55.751244, 37.618423),
				Roma: latLng(41.89193, 12.51133),
				SanFrancisco: latLng(37.773972, -122.431297),
				Mexico: latLng(19.432608, -99.133209),
				Brasilia: latLng(-15.793889, -47.882778),
				BuenosAires: latLng(-34.603722, -58.381592),
				Sydney: latLng(-33.865143, 151.209900),
				Bangkok: latLng(13.736717, 100.523186),
				Beijing: latLng(39.916668, 116.383331),
				Lisbon: latLng(38.736946, -9.142685),
				Bamako: latLng(12.65, -8),
				Luanda: latLng(-8.83682, 13.23432),
				Antananarivo: latLng(-18.91368, 47.53613),
				NewDelhi: latLng(28.644800, 77.216721),
				mapOptions: {
					zoomSnap: 0.5
				},
				showMap: true
			};
		},
		methods: {
			nowTime(decalage) {
				const start = Date.now();
				const decal = start + (decalage * 3600000);

				return new Date(decal).toLocaleTimeString('fr-FR', {hour: '2-digit', minute: '2-digit'});
			},
			refresh() {
				this.showMap = false;
				setTimeout(() => {
					this.showMap = true;
				}, 500);
			},
			innerClick() {
				alert("Click!");
			}
		}
		,
	}
	;

</script>

<style scoped>
</style>