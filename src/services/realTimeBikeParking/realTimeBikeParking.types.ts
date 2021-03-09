import { LongLat } from "@/types";

export interface RealTimeBikeParking {
  facilityname: string;
  freeplaces: number;
  id: string;
  locatie: LongLat;
  occupiedplaces: number;
  time: string;
  totalplaces: number;
}

export interface DataSetRecord<F> {
  datasetid: string;
  fields: F;
  geometry: {
    coordinates: LongLat;
    type: string;
  };
  record_timestamp: string;
  recordid: string;
}

export interface RealTimeBikeParkingResponse {
  records: DataSetRecord<RealTimeBikeParking>[];
}
