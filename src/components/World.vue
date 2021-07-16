<template>
  <v-container>
    What time is it in the world ?
    <div id="mapid"></div>
  </v-container>

</template>

<script>

	export default {
		name: 'World',
		data() {
			return {
				newyorkTime: '',
				parisTime: '',
				moscowTime: '',
				tokyoTime: '',
			}
		}
	}

</script>

<style scoped>
  #mapid {
    height: 180px;
  }
</style>