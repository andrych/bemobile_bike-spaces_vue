import { LongLat } from "@/types";
import { Map } from "mapbox-gl";

export interface MapMarker {
  id: string;
  coordinates: LongLat;
  title: string;
  totalPlaces: number;
  freePlaces: number;
}

export interface MapLoadedEvent {
  map: Map;
}

export interface MarkerClickEvent {
  marker: {
    _lngLat: { lng: number; lat: number };
  };
}
