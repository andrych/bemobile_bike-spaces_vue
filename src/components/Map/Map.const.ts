const { VUE_APP_MAPBOX_ACCESS_TOKEN } = process.env;

export const MAP_CONFIG = {
  accessToken: VUE_APP_MAPBOX_ACCESS_TOKEN,
  attributionControl: false,
  center: [3.7174243, 51.0543422],
  mapStyle: "mapbox://styles/mapbox/light-v10",
  zoom: 13
};
