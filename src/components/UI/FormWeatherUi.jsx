import React from 'react';

/**
 * FromWeatherUi component renders a form to input city name and submit for weather data.
 * @param {Object} props - Component props
 * @param {Function} props.submit - Function to handle form submission
 * @param {string} props.cityInput - Value of the city input field
 * @param {Function} props.inputCityHandler - Function to handle city input field change
 * @returns {JSX.Element} FromWeatherUi component
 */
const FromWeatherUi = (props) => {
  return (
    <div>
      <form onSubmit={props.submit} className="flex flex-col sm:flex-row">
        <input
          type="text"
          placeholder="Enter city name"
          className="border border-gray-300 rounded-md py-2 px-4 sm:mb-0 sm:mr-3 mb-2"
          value={props.cityInput}
          onChange={props.inputCityHandler}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md"
        >
          Add City
        </button>
      </form>
    </div>
  );
};

export default FromWeatherUi;
