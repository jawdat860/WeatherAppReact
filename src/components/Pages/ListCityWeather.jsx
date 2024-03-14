import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ListCityWeatherUi from '../UI/ListCityWeatherUi';

/**
 * Functional component representing the list of city weather.
 * @param {object} props - The props passed to the component.
 * @returns {JSX.Element} ListCityWeather component JSX
 */
const ListCityWeather = (props) => {
  // State to manage additional settings for weather display
  const [addSitting, setAddSitting] = useState({
    showHumidity: false,
    showSunset: false,
    showPerceivedTemp: false,
  });

  // Accessing weather data from Redux store
  const weatherData = useSelector((state) => state.weather.weatherData);

  /**
   * Function to calculate perceived temperature.
   * @param {number} temperature - The temperature in Celsius.
   * @param {number} humidity - The humidity percentage.
   * @returns {number} The perceived temperature.
   */
  function calculatePerceivedTemperature(temperature, humidity) {
    const result =
      temperature - 0.4 * (1 - humidity / 100) * (temperature - 10);

    return result.toFixed();
  }

  // Effect to load settings from cookies when props change
  useEffect(() => {
    const settingsFromCookies = Cookies.get('setting');
    if (settingsFromCookies) {
      const result = JSON.parse(settingsFromCookies);
      setAddSitting(result);
    }
  }, [props]);

  return (
    <div className="flex justify-center mt-4">
      {/* Render weather data if available */}
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
