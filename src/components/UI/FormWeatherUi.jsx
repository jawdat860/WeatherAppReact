import React from "react";

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
      <form
        onSubmit={props.submit}
        className="flex flex-col sm:flex-row relative"
      >
        <input
          type="text"
          placeholder="Enter city name"
          className={`outline-none placeholder:text-white bg-[#e5e7ebc4] border ${
            props.error === "" ? "border-gray-300" : " border-red-600"
          }  rounded-md py-2 pl-6 pr-4 sm:mb-0 sm:mr-3 mb-2 `}
          value={props.cityInput}
          onChange={props.inputCityHandler}
        />
        <i className="fa-solid fa-magnifying-glass text-white  absolute bottom-[21px] sm:bottom-[13px] left-1"></i>
        <span className="block absolute bottom-[-20px] left-1 text-red-700 ">
          {props.error}
        </span>
      </form>
    </div>
  );
};

export default FromWeatherUi;
