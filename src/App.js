import "./styles.css";
import SearchWeather from "./containers/searchWeather.js";

export default function App() {
  return (
    <div className="App">
      <h1 className="text-center orange text-white p-3 font-weight-bold spacing m-0">
        Weather checker
      </h1>
      <SearchWeather />
    </div>
  );
}
