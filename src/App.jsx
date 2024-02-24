import { useState ,useEffect} from "react";
import { useSelector ,useDispatch } from "react-redux";
import FormWeather from "./components/FormWeather";
import ListCityWeather from "./components/ListCityWeather";
import ListCitySaved from "./components/ListCitySaved";
import SettingsPage from "./components/SettingsPage";
import Loading from "./components/UI/Loading";
import { getCurrentLocationWeather } from "./redux/weatherSlice";
function App() {
  const [settings, setSettings] = useState(false);
  const dispatch =useDispatch()
  const weatherLoading = useSelector((state) => state.weather.load);
  const onSaveSettings = (newSettings) => {
    setSettings(newSettings);
  };
  useEffect(()=>{
    getYourLocationWeather()
     },[])
  
  const getYourLocationWeather = () => {
    dispatch(getCurrentLocationWeather());
  };
  return (
    <div className="bg-app-bg  h-screen relative flex items-center justify-center">
      <main className="w-[98%] absolute bg-white  opacity-90 sm:p-5 p-2  sm:w-3/4 rounded-3xl h-auto sm:h-5/6 flex flex-col ">
        <FormWeather />
        <section className="flex  sm:mt-5 mt-2 flex-col sm:flex-row gap-3 sm:justify-between">
          <SettingsPage onSaveSettings={onSaveSettings} />
          <ListCitySaved />
        </section>
        <section className="flex-1 sm:mt-6 sm:py-3 ">
          {weatherLoading ? (
            <Loading />
          ) : (
            <ListCityWeather settings={settings} />
          )}
        </section>
      </main>
    </div>
  );
}
export default App;
