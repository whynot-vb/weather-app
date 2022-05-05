import { configureStore } from "@reduxjs/toolkit";

import weatherReducer from "../features/weatherSlice";
import positionReducer from "../features/positionSlice";

export const store = configureStore({
  reducer: {
    weather: weatherReducer,
    position: positionReducer,
  },
});
