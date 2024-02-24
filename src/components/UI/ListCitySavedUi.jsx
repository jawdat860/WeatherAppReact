import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchWeatherData } from '../../redux/weatherSlice';
import { deleteCityFromList } from '../../redux/citySlice';

/**
 * ListCitySavedUi component renders a saved city item in the list.
 * @param {Object} props - Component props
 * @param {string} props.city - Name of the saved city
 * @returns {JSX.Element} ListCitySavedUi component
 */
function ListCitySavedUi(props) {
  const dispatch = useDispatch();

  /**
   * Handles click event on the city name to fetch weather data for that city.
   */
  const handleCityClick = () => {
    dispatch(fetchWeatherData(props.city));
  };

  /**
   * Handles click event on the delete button to remove the city from the saved list.
   */
  const handleDeleteCity = () => {
    dispatch(deleteCityFromList(props.city));
  };

  return (
    <li className="flex justify-between border-b border-gray-200 rounded-t-lg dark:border-gray-600 py-2 px-2">
      <p className="cursor-pointer text-blue-500" onClick={handleCityClick}>
        {props.city}
      </p>
      <button onClick={handleDeleteCity}>Delete</button>
    </li>
  );
}

ListCitySavedUi.propTypes = {
  city: PropTypes.string.isRequired,
};

export default ListCitySavedUi;
