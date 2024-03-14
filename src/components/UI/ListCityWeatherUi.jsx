import React from 'react';

/**
 * Functional component representing the UI for displaying city weather information.
 * @param {object} props - The props passed to the component.
 * @param {object} props.weatherData - The weather data for the city.
 * @param {object} props.addSitting - Additional settings for weather display.
 * @param {Function} props.calculatePerceivedTemperature - Function to calculate perceived temperature.
 * @returns {JSX.Element} ListCityWeatherUi component JSX
 */
function ListCityWeatherUi(props) {
  return (
    <div className="w-3/4 sm:w-1/2 bg-[#e5e7ebc4] sm:pt-14 pt-8 sm:pb-4 pb-4 sm:px-9 px-4 rounded-2xl">
      <div className="flex justify-between gap-2">
        {/* Temperature icon */}
        <i className="fa-solid font-bold fa-temperature-three-quarters text-2xl sm:text-6xl"></i>
        {/* Current temperature */}
        <h1 className="font-bold text-2xl sm:text-6xl">
          {props.weatherData.main.temp.toFixed()}°C
        </h1>
      </div>
      {/* City name and country */}
      <p className="text-white font-bold text-center mt-2 sm:mt-5 text-[17px] sm:text-xl">
        {props.weatherData.name}, {props.weatherData.sys.country}
      </p>
      {/* Current date */}
      <p className="text-white font-bold text-center mt-2 sm:mt-5 text-[17px] sm:text-xl">
        {new Date().toDateString()}
      </p>
      {/* Additional weather information */}
      <div className="flex justify-center mt-5 text-white flex-wrap gap-6">
        {/* Wind speed */}
        <div className="px-3 py-3 bg-blue-700 rounded-md w-[217px]">
          <p className="font-normal sm:font-bold text-center">
            Wind Speed <i className="fa-solid fa-wind"></i>
          </p>
          <p className="text-center">{props.weatherData.wind.speed} m/s</p>
        </div>
        {/* Humidity (if enabled) */}
        {props.addSitting.showHumidity && (
          <div className="w-[217px] px-3 py-3 bg-green-600 rounded-md">
            <p className="font-normal sm:font-bold text-center">
              Humidity <i className="fa-solid fa-droplet"></i>
            </p>
            <p className="text-center">{props.weatherData.main.humidity}%</p>
          </div>
        )}
        {/* Sunset time (if enabled) */}
        {props.addSitting.showSunset && (
          <div className="w-[217px] px-3 py-3 rounded-md bg-yellow-300 text-center">
            <p className="font-normal sm:font-bold">Sunset Time <i className="fa-solid fa-sun"></i></p>
            <p className="text-center">
              {new Date(props.weatherData.sys.sunset * 1000).toLocaleTimeString()}
            </p>
          </div>
        )}
        {/* Perceived temperature (if enabled) */}
        {props.addSitting.showPerceivedTemp && (
          <div className="w-[217px] px-3 py-3 rounded-md bg-red-500">
            <p className="font-normal sm:font-bold">Perceived Temperature <i className="fa-solid fa-temperature-high"></i></p>
            <p className="text-center">
              {props.calculatePerceivedTemperature(
                props.weatherData.main.temp,
                props.weatherData.main.humidity
              )}
              °C
            </p>
          </div>
        )}
      </div>
      {/* Weather description */}
      <div className="font-bold text-3xl sm:text-4xl text-white mt-3 text-center">
        <p>{props.weatherData.weather[0].description}</p>
      </div>
    </div>
  );
}

export default ListCityWeatherUi;
