<template>
  <div class="c-app" id="app">
    <Header />
    <div v-if="isLoading" class="c-app__loader">
      <Loader message="Loading map data..." />
    </div>
    <Map class="c-app__main" :markers="markers" @load="onMapLoaded" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Header, Loader, Map, MapMarker } from "./components";
import {
  getRealTimeBikeParking,
  RealTimeBikeParkingResponse
} from "./services/realTimeBikeParking";

export default Vue.extend({
  name: "App",
  components: {
    Header,
    Loader,
    Map
  },
  data() {
    return {
      mapLoaded: false,
      isFetching: true,
      isSyncing: false,
      data: [] as RealTimeBikeParkingResponse["records"]
    };
  },
  async created() {
    let initialFetch = false;

    const getData = async () => {
      if (initialFetch) {
        this.isSyncing = true;
      }
      await getRealTimeBikeParking()
        .then(response => {
          // do stuff
          if (response.records && response.records.length) {
            this.data = response.records;
            initialFetch = true;
          }
        })
        .finally(() => {
          // Artificial delay to show loader
          this.isSyncing = false;
          setTimeout(() => {
            this.isFetching = false;
          }, 3000);
        });
    };

    await getData();

    if (initialFetch) {
      setInterval(() => getData(), 60 * 1000);
    }
  },
  computed: {
    isLoading(): boolean {
      return !this.mapLoaded || this.isFetching;
    },
    markers(): MapMarker[] {
      return this.data.map(item => ({
        id: item.recordid,
        coordinates: item.geometry.coordinates,
        title: item.fields.facilityname,
        totalPlaces: item.fields.totalplaces,
        freePlaces: item.fields.freeplaces
      }));
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
