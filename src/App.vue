<template>
  <div class="c-app" id="app">
    <Header />
    <Map
      class="c-app__main"
      :layer="mapLayer"
      :source="mapSource"
      @load="onMapLoaded"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Header, Map } from "./components";
import {
  getRealTimeBikeParking,
  RealTimeBikeParkingResponse
} from "./services/realTimeBikeParking";
import { GeoJsonSource } from "./types";

export default Vue.extend({
  name: "App",
  components: {
    Header,
    Map
  },
  data() {
    return {
      mapLoaded: false,
      isFetching: true,
      data: [] as RealTimeBikeParkingResponse["records"]
    };
  },
  async created() {
    await getRealTimeBikeParking()
      .then(response => {
        // do stuff
        if (response.records && response.records.length) {
          this.data = response.records;
        }
      })
      .finally(() => {
        // Artificial delay to show loader
        setTimeout(() => {
          this.isFetching = false;
        }, 2000);
      });
  },
  computed: {
    isLoading(): boolean {
      return this.isFetching && !this.mapLoaded;
    },
    mapLayer() {
      return {
        id: "real-time-bike-parking-layer",
        type: "circle",
        source: "real-time-bike-parking",
        paint: {
          "circle-radius": 10,
          "circle-color": "#223b53",
          "circle-stroke-color": "white",
          "circle-stroke-width": 1,
          "circle-opacity": 0.5
        }
      };
    },
    mapSource(): GeoJsonSource {
      const features = this.data.map(item => ({
        type: "Feature",
        geometry: item.geometry,
        properties: {}
      }));

      return {
        type: "geojson",
        data: {
          type: "FeatureCollection",
          features
        }
      };
    }
  },
  methods: {
    onMapLoaded() {
      this.mapLoaded = true;
    }
  }
});
</script>

<style lang="scss" src="./styles/main.scss" />
