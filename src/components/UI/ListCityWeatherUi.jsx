/**
 * ListCityWeatherUi component displays weather information for a city.
 * @param {Object} props - Component props
 * @param {Object} props.weatherData - Object containing weather data for the city
 * @param {Object} props.weatherData.name - Name of the city
 * @param {Object} props.weatherData.sys - Object containing country information
 * @param {string} props.weatherData.sys.country - Country code of the city
 * @param {Array} props.weatherData.weather - Array containing weather condition information
 * @param {Object} props.weatherData.weather[0] - Object containing weather condition data
 * @param {string} props.weatherData.weather[0].description - Description of the weather condition
 * @param {Object} props.weatherData.main - Object containing main weather information
 * @param {number} props.weatherData.main.temp - Temperature in Celsius
 * @param {number} props.weatherData.main.humidity - Humidity percentage
 * @param {Object} props.weatherData.wind - Object containing wind information
 * @param {number} props.weatherData.wind.speed - Wind speed in meters per second
 * @param {Object} props.addSitting - Object containing settings for additional weather information display
 * @param {boolean} props.addSitting.showHumidity - Flag to determine whether to display humidity
 * @param {boolean} props.addSitting.showSunset - Flag to determine whether to display sunset time
 * @param {boolean} props.addSitting.showPerceivedTemp - Flag to determine whether to display perceived temperature
 * @param {Function} props.calculatePerceivedTemperature - Function to calculate perceived temperature
 * @returns {JSX.Element} ListCityWeatherUi component
 */
function ListCityWeatherUi(props) {
  return (
    <div className="">
      <h2 className="text-xl font-semibold mb-2 ">
        {props.weatherData.name}, {props.weatherData.sys.country}
      </h2>
      <div>
        <p className="text-lg text-blue-500 font-bold">
          {props.weatherData.weather[0].description}
        </p>
        <p className="text-lg text-blue-500 font-bold">
          Temperature:{" "}
          <span className="text-black ">
            {props.weatherData.main.temp.toFixed()}°C
          </span>
        </p>
        {props.addSitting.showHumidity && (
          <p className="text-lg text-blue-500 font-bold">
            Humidity:{" "}
            <span className="text-black ">
              {props.weatherData.main.humidity}%
            </span>
          </p>
        )}
        {props.addSitting.showSunset && (
          <p className="text-lg text-blue-500 font-bold">
            Sunset Time:{" "}
            <span className="text-black ">
              {new Date(
                props.weatherData.sys.sunset * 1000
              ).toLocaleTimeString()}
            </span>
          </p>
        )}
        {props.addSitting.showPerceivedTemp && (
          <p className="text-lg text-blue-500 font-bold">
            Perceived Temperature:{" "}
            <span className="text-black ">
              {props.calculatePerceivedTemperature(
                props.weatherData.main.temp,
                props.weatherData.main.humidity
              )}
              °C
            </span>
          </p>
        )}
        <p className="text-lg text-blue-500 font-bold">
          Wind Speed:
          <span className="text-black font-lg">
            {props.weatherData.wind.speed} m/s
          </span>{" "}
        </p>
      </div>
    </div>
  );
}

export default ListCityWeatherUi;
