import './App.css'
import Search from "./components/search/Search.jsx";
import CurrentWeather from "./components/current-weather/CurrentWeather.jsx";
import {WEATHER_API_URL, WEATHER_API_KEY} from "./api";

function App() {

    const handleSearchChanges = searchValue => {
        console.log(searchValue);
        const [latitude, longitude] = searchValue.value.split(" ")
        console.log('Latitude: ',latitude)
        console.log('Longitude: ',longitude)


        const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}`)
        const forecastWeatherFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}`)

        Promise.all([currentWeatherFetch, forecastWeatherFetch])
            .then(async (response) => {
                const currentResonse = await response[0].json();
                const forecastResonse = await response[1].json();
            })
    }

  return (
    <div className="container">
        <Search onSearchChange={handleSearchChanges}/>
        <CurrentWeather/>
    </div>
  )
}

export default App
