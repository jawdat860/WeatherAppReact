import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ListCityWeatherUi from "./UI/ListCityWeatherUi";

/**
 * Component to display weather data for a city.
 * @param {object} props - The props for the component.
 * @param {object} props.addSitting - Object representing settings for additional weather information.
 * @param {boolean} props.addSitting.showHumidity - Flag indicating whether to show humidity.
 * @param {boolean} props.addSitting.showSunset - Flag indicating whether to show sunset time.
 * @param {boolean} props.addSitting.showPerceivedTemp - Flag indicating whether to show perceived temperature.
 * @returns {JSX.Element} The JSX element representing the weather data for the city.
 */
const ListCityWeather = (props) => {
  const [addSitting, setAddSitting] = useState({
    showHumidity: false,
    showSunset: false,
    showPerceivedTemp: false,
  });

  const weatherData = useSelector((state) => state.weather.weatherData);

  /**
   * Function to calculate perceived temperature.
   * @param {number} temperature - The temperature value.
   * @param {number} humidity - The humidity value.
   * @returns {number} The perceived temperature.
   */
  function calculatePerceivedTemperature(temperature, humidity) {
    const result =
      temperature - 0.4 * (1 - humidity / 100) * (temperature - 10);

    return result.toFixed();
  }

  useEffect(() => {
    const settingsFromCookies = Cookies.get("setting");
    if (settingsFromCookies) {
      const result = JSON.parse(settingsFromCookies);
      setAddSitting(result);
    }
  }, [props]);

  return (
    <div>
      {weatherData && (
        <ListCityWeatherUi
          weatherData={weatherData}
          addSitting={addSitting}
          calculatePerceivedTemperature={calculatePerceivedTemperature}
        />
      )}
    </div>
  );
};
export default ListCityWeather;
