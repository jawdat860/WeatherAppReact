import { configureStore } from "@reduxjs/toolkit";
import weatherSlice from "./weatherSlice";
import citySlice from "./citySlice";

/**
 * Configure Redux store with reducers.
 * @returns {object} The Redux store.
 */
const store = configureStore({
  reducer: {
    weather: weatherSlice, // Reducer for weather-related state
    city: citySlice, // Reducer for city-related state
  },
});

export default store;
