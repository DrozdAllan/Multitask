<template>
  <v-container>
    What time is it in the world ?

    <div style="height: 1000px; width: 100%">
      <div style="height: 100px; overflow: auto;">
        <button @click="showMap = !showMap">
          Toggle map
        </button>
      </div>
      <l-map
              v-if="showMap"
              :zoom="zoom"
              :center="center"
              :options="mapOptions"
              style="height: 80%"
      >
        <l-tile-layer
                :url="url"
                :attribution="attribution"
        />
        <l-marker :lat-lng="Paris">
          <l-tooltip :options="{ permanent: true, interactive: true, direction: 'top' }">
            <div @click="innerClick">
              00:33
            </div>
          </l-tooltip>
        </l-marker>
        <l-marker :lat-lng="Washington">
          <l-tooltip :options="{ permanent: true, interactive: true, direction: 'top' }">
            <div @click="innerClick">
              18:33
            </div>
          </l-tooltip>
        </l-marker>
        <l-marker :lat-lng="Tokyo">
          <l-tooltip :options="{ permanent: true, interactive: true, direction: 'top' }">
            <div @click="innerClick">
              6:33
            </div>
          </l-tooltip>
        </l-marker>
        <l-marker :lat-lng="London">
          <l-tooltip :options="{ permanent: true, interactive: true, direction: 'top' }">
            <div @click="innerClick">
              23:33
            </div>
          </l-tooltip>
        </l-marker>
        <l-marker :lat-lng="Moskow">
          <l-tooltip :options="{ permanent: true, interactive: true, direction: 'top' }">
            <div @click="innerClick">
              6:33
            </div>
          </l-tooltip>
        </l-marker>
        <l-marker :lat-lng="Roma">
          <l-tooltip :options="{ permanent: true, interactive: true, direction: 'top' }">
            <div @click="innerClick">
              6:33
            </div>
          </l-tooltip>
        </l-marker>
        <l-marker :lat-lng="SanFrancisco">
          <l-tooltip :options="{ permanent: true, interactive: true, direction: 'top' }">
            <div @click="innerClick">
              6:33
            </div>
          </l-tooltip>
        </l-marker>
        <l-marker :lat-lng="Mexico">
          <l-tooltip :options="{ permanent: true, interactive: true, direction: 'top' }">
            <div @click="innerClick">
              6:33
            </div>
          </l-tooltip>
        </l-marker>
        <l-marker :lat-lng="Brasilia">
          <l-tooltip :options="{ permanent: true, interactive: true, direction: 'top' }">
            <div @click="innerClick">
              6:33
            </div>
          </l-tooltip>
        </l-marker>
        <l-marker :lat-lng="BuenosAires">
          <l-tooltip :options="{ permanent: true, interactive: true, direction: 'top' }">
            <div @click="innerClick">
              6:33
            </div>
          </l-tooltip>
        </l-marker>
        <l-marker :lat-lng="Sydney">
          <l-tooltip :options="{ permanent: true, interactive: true, direction: 'top' }">
            <div @click="innerClick">
              6:33
            </div>
          </l-tooltip>
        </l-marker>
        <l-marker :lat-lng="Bangkok">
          <l-tooltip :options="{ permanent: true, interactive: true, direction: 'top' }">
            <div @click="innerClick">
              6:33
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
		name: "Example",
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
				mapOptions: {
					zoomSnap: 0.5
				},
				showMap: true
			};
		},
		methods: {
			innerClick() {
				alert("Click!");
			}
		}
	};

</script>

<style scoped>
</style>