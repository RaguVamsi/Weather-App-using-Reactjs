import "./App.css";
import React, { useState } from "react";
import Input from "./component/Input";
import axios from "axios";
import Result from "./component/result";

function App() {
  const [input, setInput] = useState("");
  const [temp, settemp] = useState("");
  const [description, setdescription] = useState("");
  const [icon, seticon] = useState("");

  const findweather = async () => {
    const apikey = "3e8977110d4969307fcd46a500ba3b34";
    const unit = "metric";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${apikey}&units=${unit}`;
    const response = await axios.get(url);
    console.log(response);

    const temp = await response.data.main.temp;
    const weatherDescription = await response.data.weather[0].description;
    const icon = await response.data.weather[0].icon;
    const imageURL = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
    console.log(temp, weatherDescription, imageURL);
    settemp(temp);
    setdescription(weatherDescription);
    seticon(imageURL);
    setInput("");
  };
  return (
    <div className="app">
      {temp === "" ? (
        <Input input={input} setInput={setInput} findweather={findweather} />
      ) : (
        <Result temp={temp} des={description} icon={icon} settemp={settemp} />
      )}
    </div>
  );
}

export default App;