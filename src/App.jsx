import {useState} from "react";
import './App.css'
import Search from "./components/search/Search.jsx";
import CurrentWeather from "./components/current-weather/CurrentWeather.jsx";
import {WEATHER_API_URL, WEATHER_API_KEY} from "./api";
import Forecast from "./components/forecast/Forecast.jsx";

function App() {
        const [currentWeather, setCurrentWeather] = useState(null)
        const [forecastWeather, setForecastWeather] = useState(null)


    const handleSearchChanges = searchValue => {
        const [latitude, longitude] = searchValue.value.split(" ")


        const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}&units=metric`)
        const forecastWeatherFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}&units=metric`)

        Promise.all([currentWeatherFetch, forecastWeatherFetch])
            .then(async (response) => {
                const currentResponse = await response[0].json();
                const forecastResponse = await response[1].json();

                setCurrentWeather({city: searchValue.label ,...currentResponse})
                setForecastWeather({city: searchValue.label, ...forecastResponse})
            })
            .then(error => console.log(error))
    }

    // console.log(currentWeather)
    // console.log(forecastWeather)

  return (
    <div className="container">
        <Search onSearchChange={handleSearchChanges}/>
        {currentWeather && <CurrentWeather data={currentWeather}/>}
        {forecastWeather &&  <Forecast data={forecastWeather}/>}
    </div>
  )
}

export default App
