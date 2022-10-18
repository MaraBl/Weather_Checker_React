import React, { useState } from "react";
import DetailsAboutWeather from "../components/detailsAboutWeather.js";

const SearchWeather = () => {
  const api = {
    key: "baf4fb5477253eeaea0f5e20ca1097c2",
    url: "https://api.openweathermap.org/data/2.5/"
  };

  const [weather, setWeather] = useState({});
  const [city, setCity] = useState("");
  const [validation, setValidation] = useState("");

  function handleFormSubmit(event) {
    event.preventDefault();

    if (!city) {
      setValidation("Please enter a city or town name");
      return;
    } else {
      fetch(`${api.url}weather?q=${city}&appid=${api.key}&units=metric`)
        .then((result) => {
          if (result.status >= 400) {
            setValidation("Sorry, something went wrong... " + result.message);
          }
          return result.json();
        })
        .then((result) => {
          if (result.cod === 200) {
            setWeather(result);
            setCity("");
            setValidation("");
          } else {
            setValidation("Sorry, something went wrong... " + result.message);
          }
        });
    }
  }

  return (
    <>
      <form
        data-testid="form"
        className="dark_blue form-inline p-2"
        onSubmit={handleFormSubmit}
      >
        <label className="text-white p-3" htmlFor="city-name">
          City name:
        </label>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          id="city-name"
          placeholder="Enter the city or town name"
          className=" mr-sm-2 px-2 py-1"
        />
        <input
          className="my-2 my-sm-0 px-5 py-1"
          type="submit"
          value="search"
        />
      </form>
      <div className="validation-message p-1 text-danger">{validation}</div>
      <div className="d-flex justify-content-center">
        <DetailsAboutWeather weather={weather} />
      </div>
    </>
  );
};
export default SearchWeather;

