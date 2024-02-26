import './App.css'
import Search from "./components/search/Search.jsx";
import CurrentWeather from "./components/current-weather/CurrentWeather.jsx";

function App() {

    const handleSearchChanges = searchValue => {
        console.log(searchValue);
        const [latitude, longitude] = searchValue.value.split(" ")
        console.log('Latitude: ',latitude)
        console.log('Longitude: ',longitude)


    }

  return (
    <div className="container">
        <Search onSearchChange={handleSearchChanges}/>
        <CurrentWeather/>
    </div>
  )
}

export default App
