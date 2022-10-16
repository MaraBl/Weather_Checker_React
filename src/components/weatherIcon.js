import React from "react";

const WeatherIcon = (props) => {
  let imgURL = `http://openweathermap.org/img/w/${props.iconCode}.png`;

  return (
    <div>
      <img alt="weather icon" src={imgURL} width="100" height="80" />
    </div>
  );
};

export default WeatherIcon;
