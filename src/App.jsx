import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ListCitySaved from './components/Pages/ListCitySaved';
import SettingsPage from './components/Pages/SettingsPage';
import { getCurrentLocationWeather } from './redux/weatherSlice';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import Home from './components/Pages/Home';
import NotFoundPage from './components/Pages/NotFoundPage'
import OutLelt from './Outlet/OutLelt';

/**
 * Functional component representing the root of the application.
 * @returns {JSX.Element} App component JSX
 */
function App() {
  const [settings, setSettings] = useState(false);
  const dispatch = useDispatch();

  // Function to handle saving settings
  const onSaveSettings = (newSettings) => {
    setSettings(newSettings);
  };

  // Effect to fetch weather data for current location on component mount
  useEffect(() => {
    getYourLocationWeather();
  }, []);

  // Function to fetch weather data for current location
  const getYourLocationWeather = () => {
    dispatch(getCurrentLocationWeather());
  };

  // Define routes for the application
  const route = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<OutLelt />}>
        <Route path="WeatherAppReact/" element={<Home settings={settings} />} />
        <Route
          path="WeatherAppReact/settings"
          element={<SettingsPage onSaveSettings={onSaveSettings} />}
        />
        <Route path="WeatherAppReact/history" element={<ListCitySaved />} />
         {/* Not Found Route */}
         <Route path="*" element={<NotFoundPage/>} />
      </Route>
    )
  );
  
  return <RouterProvider router={route} /> ;
  
 
}

export default App;
