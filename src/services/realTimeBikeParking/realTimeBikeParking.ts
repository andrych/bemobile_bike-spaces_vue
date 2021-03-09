import ky from "ky";
import { RealTimeBikeParkingResponse } from "./realTimeBikeParking.types";

const { VUE_APP_API_BASE_URL } = process.env;
const API_SEARCH_PARAMS =
  "dataset=real-time-bezettingen-fietsenstallingen-gent";

export const getRealTimeBikeParking = async (): Promise<RealTimeBikeParkingResponse> => {
  return await ky
    .get(VUE_APP_API_BASE_URL, { searchParams: API_SEARCH_PARAMS })
    .json();
};
