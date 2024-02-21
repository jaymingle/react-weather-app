import './App.css'
import Search from "./components/search/Search.jsx";

function App() {

  return (
    <div className="container">
        <Search onSearchChange={handleSearchChanges}/>
    </div>
  )
}

export default App
