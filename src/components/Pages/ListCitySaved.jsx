import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addCityToList } from '../../redux/citySlice';
import Cookies from 'js-cookie';
import InputCitySearch from '../UI/InputCitySearch';
import ListCitySavedUi from '../UI/ListCitySavedUi';

/**
 * Functional component representing the list of saved cities.
 * @returns {JSX.Element} ListCitySaved component JSX
 */
function ListCitySaved() {
  // Accessing saved city list from Redux store
  const citySaved = useSelector((state) => state.city.cityList);
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');

  // Function to add cities from cookies to Redux store
  function handleAddCityFromCookies() {
    const cityListFromCookies = Cookies.get('citySaved');
    if (cityListFromCookies) {
      const cityList = JSON.parse(cityListFromCookies);

      cityList.forEach((element) => {
        if (!citySaved.includes(element)) {
          dispatch(addCityToList(element));
        }
      });
    }
  }

  // Effect to handle adding cities from cookies on component mount
  useEffect(() => {
    handleAddCityFromCookies();
  }, []);

  // Function to save city list to cookies
  function saveCityListToCookies() {
    Cookies.set('citySaved', JSON.stringify(citySaved), {
      sameSite: 'None',
      secure: true,
    });
  }

  // Effect to handle saving city list to cookies when it changes
  useEffect(() => {
    if (Array.isArray(citySaved)) {
      saveCityListToCookies();
    }
  }, [citySaved]);

  // Function to handle search term change
  function handleSearch(e) {
    setSearchTerm(e.target.value);
  }

  return (
    <div className="flex flex-col gap-3 p-5">
      {/* Input for city search */}
      <InputCitySearch searchTerm={searchTerm} handleSearch={handleSearch} />
      <div className="flex justify-center">
        {/* List of saved cities */}
        <ul className="font-bold text-sm text-gray-900 bg-[#e5e7ebc4] border-gray-200 rounded-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white w-full sm:w-[40%]">
          {citySaved
            .filter((city) =>
              String(city).toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((city) => (
              <ListCitySavedUi key={city} city={city} />
            ))}
        </ul>
      </div>
    </div>
  );
}

export default ListCitySaved;
