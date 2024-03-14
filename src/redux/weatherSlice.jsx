import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addCityToList } from "./citySlice";
import axios from "axios";

/**
 * Async thunk to fetch weather data based on city name.
 * @param {string} city - The name of the city.
 * @returns {Promise} A promise containing the weather data.
 */
export const fetchWeatherData = createAsyncThunk(
  "weather/fetchWeatherData",
  async (city, thunkAPI) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=aae6e440a8d5e1eb0534545ee3a2863c&units=metric`
      );

      const citySaved = thunkAPI.getState().city.cityList;
      const save = citySaved.includes(city);
      if (!save) {
        thunkAPI.dispatch(addCityToList(city));
      }
      console.log(response.data)
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

/**
 * Async thunk to fetch weather data based on IP geolocation.
 * @returns {Promise} A promise containing the weather data.
 */
export const getCurrentLocationWeather = createAsyncThunk(
  "weather/getCurrentLocationWeather",
  async (_, thunkAPI) => {
    try {
      // Fetch user's IP address
      const ipResponse = await axios.get("https://api.ipify.org?format=json");
      const ipAddress = ipResponse.data.ip;

      // Fetch location information based on IP address
      const locationResponse = await axios.get(`https://ipapi.co/${ipAddress}/json/`);
      const { latitude, longitude } = locationResponse.data;

      // Fetch weather data based on latitude and longitude
      const weatherResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=aae6e440a8d5e1eb0534545ee3a2863c&units=metric`
      );

      // Dispatch fetchWeatherData action with the city name obtained from weather data
      thunkAPI.dispatch(fetchWeatherData(weatherResponse.data.name));
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

/**
 * Redux slice for weather-related state management.
 */
const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    weatherData: null,
    error: null,
    load: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCurrentLocationWeather.rejected, (state, action) => {
        state.weatherData = null;
        state.error = action.payload;
        state.load = false;
      })
      .addCase(getCurrentLocationWeather.pending, (state) => {
        state.weatherData = null;
        state.error = null;
        state.load = true;
      })
      .addCase(fetchWeatherData.fulfilled, (state, action) => {
        state.weatherData = action.payload;
        state.error = null;
        state.load = false;
      })
      .addCase(fetchWeatherData.pending, (state) => {
        state.weatherData = null;
        state.error = null;
        state.load = true;
      })
      .addCase(fetchWeatherData.rejected, (state, action) => {
        state.weatherData = null;
        state.error = action.payload;
        state.load = false;
      });
  },
});

export default weatherSlice.reducer;
