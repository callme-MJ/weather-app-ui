import Header from "./components/header/Header";
import "./App.css"
import SearchBar from "./components/searchBar/SearchBar";
import TandL from "./components/timeLocation/TandL";
import TempDetails from "./components/tempDetails/TempDetails";
import Forecast from "./components/forecast/Forecast";

function App() {
  return (
    <div className="App">
       <div className="container">
        <Header />
        <SearchBar/>

        <TandL/>
        <TempDetails/>
        <Forecast title={"hourly forecast"}/>
        <Forecast title={"daily forecast"}/>
       </div>
    </div>
  );
}

export default App;
