import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchWeatherData } from "../redux/weatherSlice";
import { addCityToList, deleteCityFromList } from "../redux/citySlice";
import Cookies from "js-cookie";
import InputCitySearch from "./UI/InputCitySearch";
import ListCitySavedUi from "./UI/ListCitySavedUi";

/**
 * Component representing a list of saved cities.
 * @returns {JSX.Element} The JSX element representing the list of saved cities.
 */
function ListCitySaved() {
  const citySaved = useSelector((state) => state.city.cityList);
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");

  /**
   * Function to add cities saved in cookies to the Redux state.
   */
  function handleAddCityFromCookies() {
    const cityListFromCookies = Cookies.get("citySaved");
    if (cityListFromCookies) {
      const cityList = JSON.parse(cityListFromCookies);

      cityList.forEach((element) => {
        if (!citySaved.includes(element)) {
          dispatch(addCityToList(element));
        }
      });
    }
  }

  useEffect(() => {
    handleAddCityFromCookies();
  }, []);

  /**
   * Function to save the list of cities to cookies.
   */
  function saveCityListToCookies() {
    Cookies.set("citySaved", JSON.stringify(citySaved), {
      sameSite: "None",
      secure: true,
    });
  }

  useEffect(() => {
    if (Array.isArray(citySaved)) {
      saveCityListToCookies();
    }
  }, [citySaved]);

  /**
   * Handler for the search input change.
   * @param {React.ChangeEvent<HTMLInputElement>} e - The input change event.
   */
  function handleSearch(e) {
    setSearchTerm(e.target.value);
  }

  return (
    <div className="w-full sm:w-[300px] h-[180px]">
      <InputCitySearch searchTerm={searchTerm} handleSearch={handleSearch} />
      <div>
        <ul className="font-bold text-sm text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white sm:max-h-[183px] max-h-[83px] overflow-scroll">
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
