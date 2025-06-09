// import { useState } from "react";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { WiDaySunny, WiCloud, WiRain, WiSnow } from "react-icons/wi";
// import axios from "axios";
// import "./WeatherApp.css";

// export default function WeatherApp() {
//   const [city, setCity] = useState("");
//   const [weather, setWeather] = useState(null);
//   const [error, setError] = useState(null);
  
//   const API_KEY = "6b31bda4f72a6bee801494e8f7cd3473";
  
//   const fetchWeather = async () => {
//     if (!city) return;
//     try {
//       const response = await axios.get(
//         `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
//       );
//       setWeather(response.data);
//       setError(null);
//     } catch (err) {
//       setError("City not found. Please enter a valid city name.");
//       setWeather(null);
//     }
//   };

//   const getWeatherIcon = (description) => {
//     if (description.includes("clear")) return <WiDaySunny size={50} className="icon sunny" />;
//     if (description.includes("cloud")) return <WiCloud size={50} className="icon cloudy" />;
//     if (description.includes("rain")) return <WiRain size={50} className="icon rainy" />;
//     if (description.includes("snow")) return <WiSnow size={50} className="icon snowy" />;
//     return <WiDaySunny size={50} className="icon" />;
//   };

//   return (
//     <div className="weather-container">
//       <h1 className="title">Weather App</h1>
//       <div className="input-container">
//         <Input
//           type="text"
//           placeholder="Enter city name"
//           value={city}
//           onChange={(e) => setCity(e.target.value)}
//           className="city-input"
//         />
//         <Button onClick={fetchWeather} className="search-button">Get Weather</Button>
//       </div>
//       {error && <p className="error-message">{error}</p>}
//       {weather && (
//         <Card className="weather-card">
//           <CardContent className="weather-content">
//             <h2 className="city-name">{weather.name}, {weather.sys.country}</h2>
//             {getWeatherIcon(weather.weather[0].description)}
//             <p className="temperature">{weather.main.temp}°C</p>
//             <p className="description">{weather.weather[0].description}</p>
//           </CardContent>
//         </Card>
//       )}
//     </div>
//   );
// }


import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { WiDaySunny, WiCloud, WiRain, WiSnow, WiStrongWind, WiHumidity, WiBarometer } from "react-icons/wi";
import axios from "axios";
import "./WeatherApp.css";

export default function WeatherApp() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  
  const API_KEY = "6b31bda4f72a6bee801494e8f7cd3473";
  
  const fetchWeather = async () => {
    if (!city) return;
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      setWeather(response.data);
      setError(null);
    } catch (err) {
      setError("City not found. Please enter a valid city name.");
      setWeather(null);
    }
  };

  const handleKeyDown = (event) => {
    console.log("Key Pressed:", event.key);
    if (event.key === "Enter") {
      event.preventDefault();
      fetchWeather();
    }
  };

  const getWeatherIcon = (description) => {
    if (description.includes("clear")) return <WiDaySunny size={50} className="icon sunny" />;
    if (description.includes("cloud")) return <WiCloud size={50} className="icon cloudy" />;
    if (description.includes("rain")) return <WiRain size={50} className="icon rainy" />;
    if (description.includes("snow")) return <WiSnow size={50} className="icon snowy" />;
    return <WiDaySunny size={50} className="icon" />;
  };

  const getWeatherAdvice = (description) => {
    const lowerDesc = description.toLowerCase();
  
    if (lowerDesc.includes("clear")) {
      return "It's a bright and sunny day! Stay hydrated and wear sunglasses. Perfect time for outdoor activities!";
    }
    if (lowerDesc.includes("cloud")) {
      return "Cloudy skies ahead! You might want to carry a light jacket in case it gets chilly.";
    }
    if (lowerDesc.includes("rain")) {
      return "Rain is expected. Don't forget to carry an umbrella and wear waterproof clothing.";
    }
    if (lowerDesc.includes("thunderstorm")) {
      return "Thunderstorms expected! Stay indoors, avoid open fields, and unplug electronic devices.";
    }
    if (lowerDesc.includes("snow")) {
      return "Snowy weather! Dress warmly, wear gloves, and be cautious while walking or driving.";
    }
    if (lowerDesc.includes("mist") || lowerDesc.includes("fog")) {
      return "Foggy conditions ahead! Drive carefully, use fog lights, and avoid speeding.";
    }
    if (lowerDesc.includes("wind")) {
      return "Strong winds expected! Secure outdoor items and be cautious of falling objects.";
    }
  
    return "Stay safe and enjoy the weather!";
  };
  

  return (
    <div className="weather-container">
      <h1 className="title">Weather App</h1>
      {!weather && !error && (
      <div className="home-screen">
        <p className="fun-message">
          {["Welcome! Type a city name to see the weather!",
            "Wondering about the weather? Start typing!",
            "Click on Get Weather to find out!"][Math.floor(Math.random() * 3)]}
        </p>
        <div className="weather-emoji">🌍 ☀️ ☁️ 🌧️ ❄️</div>
      </div>
    )}
      <div className="input-container">
        <Input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={handleKeyDown}
          className="city-input"
        />
        <Button onClick={fetchWeather} className="search-button">Get Weather</Button>
      </div>
      {error && <p className="error-message">{error}</p>}
      {weather && (
        <Card className="weather-card">
          <CardContent className="weather-content">
            <h2 className="city-name">{weather.name}, {weather.sys.country}</h2>
            {getWeatherIcon(weather.weather[0].description)}
            <p className="temperature">{weather.main.temp}°C</p>
            <p className="description">{weather.weather[0].description}</p>
            <p className="weather-advice">{getWeatherAdvice(weather.weather[0].description)}</p>
            <div className="extra-details">
              <p><WiHumidity size={30} /> Humidity: {weather.main.humidity}%</p>
              <p><WiStrongWind size={30} /> Wind Speed: {weather.wind.speed} m/s</p>
              <p><WiBarometer size={30} /> Pressure: {weather.main.pressure} hPa</p>
            </div>
          </CardContent>
        </Card>
      )}
      <footer> <h3> Project by : Shreeyansh Singh </h3></footer>
    </div>
  );
}
