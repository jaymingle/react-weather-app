import './App.css'
import Search from "./components/search/Search.jsx";
import CurrentWeather from "./components/current-weather/CurrentWeather.jsx";

function App() {

    const handleSearchChanges = searchValue => {
        console.log(searchValue);
    }

  return (
    <div className="container">
        <Search onSearchChange={handleSearchChanges}/>
        <CurrentWeather/>
    </div>
  )
}

export default App
