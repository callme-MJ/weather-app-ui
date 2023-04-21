import Header from "./components/header/Header";
import "./App.css"
import SearchBar from "./components/searchBar/SearchBar";
import TandL from "./components/timeLocation/TandL";
import TempDetails from "./components/tempDetails/TempDetails";
import Forecast from "./components/forecast/Forecast";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

function App() {

  const [query, setQuery] = useState("alappuzha");
  const [unit, setUnit] = useState("metric");
  const [weather, setWeather] = useState({});
  const [isHot, setIsHot] = useState(false);
  
  const city = useSelector((state)=> state.city.name)
  const format = useSelector((state)=> state.format.name)
  console.log(city, format);
  
  useEffect(() => {
    const fetchWeather = async () => {
      const weatherData = await axios.get(`weather?q=${query}&units=${unit}`)
      
      setWeather(weatherData.data);
    };
    fetchWeather();
  }, [query, unit]);
  
  useEffect(() => {
    const threshold = unit === "metric" ? 35 : 60;
    if (weather.weatherData?.main.temp > threshold) 
    setIsHot(true);
    else setIsHot(false);
  }, [weather, unit]);
  

  return (
    <div className="App">
       <div className={isHot ? "containerHot " : "containerCold"}>
        <Header setQuery={setQuery} />
        <SearchBar setQuery={setQuery} unit setUnit={setUnit}/>

        <TandL data={weather}/>
        <TempDetails data={weather?.weatherData}/>
        <Forecast title={"hourly forecast"} data = {weather.weatherForecast?.hourly}/>
        <Forecast title={"daily forecast"} data = {weather.weatherForecast?.daily}/>
       </div>
    </div>
  );
}

export default App;
