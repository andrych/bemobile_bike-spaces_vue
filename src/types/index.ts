export type LongLat = [number, number];

export interface Feature {
  type: string;
  geometry: {
    type: string;
    coordinates: LongLat;
  };
  properties?: Record<string, string>;
}

export interface GeoJsonSource {
  type: string;
  data: {
    type: string;
    features: Feature[];
  };
}
