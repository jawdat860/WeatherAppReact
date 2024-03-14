import React from 'react';
import { useSelector } from 'react-redux';
import FormWeather from './FormWeather';
import Loading from '../UI/Loading';
import ListCityWeather from './ListCityWeather';

/**
 * Functional component representing the home page.
 * @param {object} props - The props passed to the component.
 * @returns {JSX.Element} Home component JSX
 */
function Home(props) {
  // Accessing weather loading state from Redux store
  const weatherLoading = useSelector((state) => state.weather.load);

  return (
    <>
      {/* Render weather form */}
      <FormWeather />

      {/* Conditionally render loading spinner or list of city weather */}
      {weatherLoading ? (
        <Loading /> // Display loading spinner if weather data is being fetched
      ) : (
        <>
          {/* Render list of city weather */}
          <ListCityWeather settings={props.settings} />
        </>
      )}
    </>
  );
}

export default Home;

