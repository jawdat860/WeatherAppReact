import { useState } from "react";
import {
  fetchWeatherData,
  getCurrentLocationWeather,
} from "../../redux/weatherSlice";
import { useDispatch } from "react-redux";
import FromWeatherUi from "../UI/FormWeatherUi";
import ButtonLocation from "../UI/ButtonLocation";

/**
 * Form component for weather search and location retrieval.
 * @returns {JSX.Element} The FormWeather component.
 */
const FormWeather = () => {
  const [cityInput, setCityInput] = useState("");
  const [error, setError] = useState(""); // State variable to hold error message
  const dispatch = useDispatch();

  /**
   * Handler function for input change event.
   * @param {Event} e - The input change event.
   */
  const inputCityHandler = (e) => {
    setCityInput(e.target.value);
    setError(""); // Clear error message when input changes
  };

  /**
   * Handler function for form submission.
   * @param {Event} e - The form submit event.
   */
  const formCityHandler = (e) => {
    e.preventDefault();
    if (cityInput.trim() !== "") {
      dispatch(fetchWeatherData(cityInput))
        .unwrap()
        .catch((err) => {
          setError(err.message); // Set error message if fetching weather data fails
        });
      setCityInput("");
    }
  };

  /**
   * Handler function for fetching weather data based on current location.
   */
  const getYourLocationWeather = () => {
    dispatch(getCurrentLocationWeather())
      .unwrap()
      .catch((err) => {
        setError(err.message); // Set error message if fetching weather data based on location fails
      });
    setError("");
  };

  return (
    <div className="flex justify-end flex-row gap-3 mt-4">
      <FromWeatherUi
        submit={formCityHandler}
        cityInput={cityInput}
        inputCityHandler={inputCityHandler}
        error={error}
      />

      <ButtonLocation getYourLocationWeather={getYourLocationWeather} />
    </div>
  );
};

export default FormWeather;
