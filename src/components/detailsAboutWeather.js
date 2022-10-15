import React from "react";
import WeatherIcon from "./weatherIcon.js";
import ShareSocial from "./shareSocial";

const DetailsAboutWeather = (props) => {
  let weather = props.weather;

  if (Object.keys(props.weather).length === 0) {
    return <></>;
  } else {
    return (
      <div className="weather_box">
        <div className="row">
          <h2 className="col-sm-12 col-md-11 col-lg-11 text-center">
            {weather.name}
          </h2>
          <div className="col-sm-12 col-md-11 col-lg-11 text-center mb-3">
            {new Date().toLocaleDateString("en-GB")}
          </div>
          <div className="line col-sm-12 col-md-5 col-lg-5 d-flex justify-content-between">
            <span>Temperature:</span>
            <span> {weather.main.temp} &deg;C</span>
          </div>
          <div className="line col-sm-12 col-md-5 col-lg-5 d-flex justify-content-between">
            <span>Max temperature:</span>
            <span> {weather.main.temp_max} &deg;C</span>
          </div>
          <div className="line col-sm-12 col-md-5 col-lg-5 d-flex justify-content-between">
            <span>Min temperature:</span>
            <span>{weather.main.temp_min} &deg;C </span>
          </div>
          <div className="line col-sm-12 col-md-5 col-lg-5 d-flex justify-content-between">
            <span>Pressure: </span>
            <span> {weather.main.pressure}(hPa) </span>
          </div>
          <div className="line col-sm-12 col-md-5 col-lg-5 d-flex justify-content-between">
            <span>Humidity: </span>
            <span>{weather.main.humidity}% </span>
          </div>
          <div className="line col-sm-12 col-md-5 col-lg-5 d-flex justify-content-between">
            <span>Sunrise: </span>
            <span>
              {new Date(weather.sys.sunrise * 1000).toLocaleTimeString("en-IN")}
            </span>
          </div>
          <div className="col-sm-12 col-md-5 col-lg-5 d-flex justify-content-between">
            <span>Sunset: </span>
            <span>
              {new Date(weather.sys.sunset * 1000).toLocaleTimeString("en-IN")}
            </span>
          </div>
          <div className="col-sm-12 col-md-5 col-lg-5">
            <WeatherIcon iconCode={weather.weather[0].icon} />
          </div>
          <div className="col-12 d-flex justify-content-center">
            <ShareSocial />
          </div>
        </div>
      </div>
    );
  }
};

export default DetailsAboutWeather;
