import WeatherService from "../services/WeatherService";
import "./style/App.scss";
import { useState } from "react";
import Header from "../components/header/Header";
import WeatherContent from "../components/weatherContent/WeatherContent";
function App() {
    const [input, setInput] = useState("");
    const [weather, setWeather] = useState({
        weather: {},
        isLoading: false,
        error: false,
    });

    const weatherService = new WeatherService();

    const getWeatherByCityName = (city) => {
        setWeather({
            weather: {},
            isLoading: true,
        });
        weatherService.getWeather(city).then(onLoaded).catch(onError);
    };

    const onError = () => {
        setWeather({
            isLoading: false,
            error: true,
        });
    };

    const onLoaded = (weather) => {
        setWeather({
            weather,
            isLoading: false,
            error: false,
        });
    };

    const onClick = (e) => {
        e.preventDefault();
        if (input === "") {
            return null;
        }
        getWeatherByCityName(input);
    };



    return (
        <div className="app">
          <Header
            onClick={onClick}
            inputValue={input}
            setInput={setInput}
          />

          <WeatherContent weather={weather}/>

          
        </div>
    );
}

export default App;
