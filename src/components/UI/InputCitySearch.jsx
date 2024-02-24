import React from 'react';

/**
 * InputCitySearch component renders an input field to search for a city.
 * @param {Object} props - Component props
 * @param {string} props.searchTerm - Value of the search input field
 * @param {Function} props.handleSearch - Function to handle search input field change
 * @returns {JSX.Element} InputCitySearch component
 */
function InputCitySearch(props) {
  return (
    <>
      <h2 className="sm:mb-4 mb-2 font-semibold text-gray-900 dark:text-white">Saved Cities</h2>
      <input
        type="text"
        placeholder="Search for a city"
        value={props.searchTerm}
        onChange={props.handleSearch}
        className="border border-gray-300 rounded-md py-2 px-4 mb-2 sm:max-w[300px]"
      />
    </>
  );
}

export default InputCitySearch;
