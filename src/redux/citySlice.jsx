import { createSlice } from "@reduxjs/toolkit";

/**
 * Redux slice for managing city-related state.
 */
const citySlice = createSlice({
  name: "city",
  initialState: {
    cityCurrent: "", // Current selected city
    cityList: [], // List of saved cities
  },
  reducers: {
    /**
     * Reducer function to set the current city.
     * @param {object} state - Current state.
     * @param {object} action - Action object containing the payload.
     */
    addCity: (state, action) => {
      state.cityCurrent = action.payload;
    },
    /**
     * Reducer function to add a city to the list.
     * @param {object} state - Current state.
     * @param {object} action - Action object containing the payload.
     */
    addCityToList: (state, action) => {
      if (!state.cityList.includes(action.payload)) {
        state.cityList.push(action.payload);
      }
    },
    /**
     * Reducer function to delete a city from the list.
     * @param {object} state - Current state.
     * @param {object} action - Action object containing the payload.
     */
    deleteCityFromList: (state, action) => {
      state.cityList = state.cityList.filter(id => id !== action.payload);
    }
  },
});

// Export actions and reducer
export const { addCity, addCityToList, deleteCityFromList } = citySlice.actions;
export default citySlice.reducer;
