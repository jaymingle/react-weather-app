import './App.css'
import Search from "./components/search/Search.jsx";

function App() {

    const handleSearchChanges = searchValue => {
        console.log(searchValue);
    }

  return (
    <div className="container">
        <Search onSearchChange={handleSearchChanges}/>
    </div>
  )
}

export default App
