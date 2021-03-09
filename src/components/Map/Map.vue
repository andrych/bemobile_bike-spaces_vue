<template>
  <MglMap class="c-map" v-bind="mapConfig" @load="onLoaded">
    <MglMarker
      v-for="marker in markers"
      :key="marker.id"
      :coordinates="marker.coordinates"
      :markerId="marker.id"
      @click="onMarkerClick($event, marker.id)"
      ref="markers"
      color="blue"
    >
      <template slot="marker">
        <span class="c-map__marker">
          <span class="material-icons-outlined">directions_bike</span>
        </span>
      </template>
      <MglPopup :offset="20">
        <div class="c-map__popup">
          <h3>{{ marker.title }}</h3>
          <div>
            <strong>Total places:</strong>
            <span>{{ marker.totalPlaces }}</span>
          </div>
          <div>
            <strong>Free places:</strong>
            <span>{{ marker.freePlaces }}</span>
          </div>
        </div>
      </MglPopup>
    </MglMarker>
  </MglMap>
</template>

<script lang="ts">
import "mapbox-gl/dist/mapbox-gl.css";
import Vue, { PropType } from "vue";
import { MglMap, MglMarker, MglPopup } from "vue-mapbox";
import { MAP_CONFIG } from "./Map.const";
import { MapLoadedEvent, MapMarker, MarkerClickEvent } from "./Map.types";

export default Vue.extend({
  components: { MglMap, MglMarker, MglPopup },
  props: {
    markers: {
      type: Array as PropType<MapMarker[]>
    }
  },
  data() {
    return {
      mapConfig: MAP_CONFIG
    };
  },
  methods: {
    onLoaded(e: MapLoadedEvent): void {
      this.$emit("load", e);
    },
    onMarkerClick(e: MarkerClickEvent): void {
      this.$nextTick((): void => {
        const { lng, lat } = e.marker._lngLat;
        e.map.flyTo({ center: [lng, lat], zoom: 15 });
      });
    }
  }
});
</script>

<style scoped lang="scss">
@import "~@/styles/variables";

.c-map {
  height: 100%;
}

.c-map__marker {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border: 1px solid #fff;
  border-radius: 50%;
  background: rgba(#01579b, 0.8);
  color: #fff;
}

.c-map__popup {
  font-family: $font-family;
  font-weight: 400;
  width: 200px;

  div {
    margin-bottom: 0.5rem;
  }

  strong {
    margin-right: 0.5rem;
  }
}
</style>
