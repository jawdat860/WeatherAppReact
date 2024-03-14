import React from "react";

/**
 * InputCitySearch component renders an input field to search for a city.
 * @param {Object} props - Component props
 * @param {string} props.searchTerm - Value of the search input field
 * @param {Function} props.handleSearch - Function to handle search input field change
 * @returns {JSX.Element} InputCitySearch component
 */
function InputCitySearch(props) {
  return (
    <div className=" relative flex justify-end">
      <input
        type="text"
        className=" outline-none placeholder:text-white bg-[#e5e7ebc4] border border-gray-300 rounded-md py-2 pl-6 pr-4 sm:mb-0  mb-2 "
        placeholder="Search for a city"
        value={props.searchTerm}
        onChange={props.handleSearch}
      />
      <i className="fa-solid fa-magnifying-glass text-white  absolute bottom-[21px] sm:bottom-[13px] right-[203px]"></i>
    </div>
  );
}

export default InputCitySearch;
