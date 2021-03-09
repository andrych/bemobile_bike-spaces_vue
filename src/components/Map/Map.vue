<template>
  <MglMap class="c-map" v-bind="mapConfig" @load="onLoaded">
    <template v-if="layer && source.data.features.length">
      <MglGeojsonLayer
        sourceId="real-time-bike-parking"
        :source="source"
        layerId="real-time-bike-parking-layer"
        :layer="layer"
      />
    </template>
  </MglMap>
</template>

<script>
import Mapbox from "mapbox-gl";
import { MglGeojsonLayer, MglMap } from "vue-mapbox";
import { MAP_CONFIG } from "./Map.const";

export default {
  components: { MglGeojsonLayer, MglMap },
  props: {
    layer: Object,
    source: Object
  },
  data() {
    return {
      mapConfig: MAP_CONFIG
    };
  },
  created() {
    // We need to set mapbox-gl library here in order to use it in template
    this.mapbox = Mapbox;
  },
  methods: {
    onLoaded() {
      this.$emit("load");
    }
  }
};
</script>

<style scoped lang="scss">
.c-map {
  height: 100%;
}
</style>
