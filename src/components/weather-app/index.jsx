import { useEffect, useState } from "react";
import Search from "./search";
import "./style.css";
export default function Weather() {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [weatherData, setWeatherData] = useState(null);
  async function fetchWeatherData(query) {
    setLoading(true);
    try {
      const response = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=3c70f0d7978c4d2192223519242606&q=${query}&aqi=no`
      );
      const newData = await response.json();
      setWeatherData(newData);
      console.log(newData);
    } catch (error) {
      console.log("error fetching weather data : ", error);
    } finally {
      setLoading(false);
    }
  }
  function handleSearch() {
    fetchWeatherData(search);
  }
  useEffect(() => {
    fetchWeatherData("الرياض");
  }, []);
  function getCurrentData() {
    return new Date().toLocaleDateString("ar-us", {
      year: "numeric",
      month: "long",
      weekday: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    });
  }
  return (
    <div className="App">
      <Search
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />
      {loading ? (
        <h2 className="loading">loading data... </h2>
      ) : (
        <div className="city-name">
          <h5>
            {weatherData.location
              ? weatherData.location.name + ", " + weatherData.location.country
              : null}
          </h5>
          <div className="date">
            <span>{getCurrentData()}</span>
          </div>
          <div className="temp-container">
            <h1>الطقس الحالي</h1>
            <div className="temp-status">
              <h1>
                {weatherData?.current?.temp_c}
                <sup>o</sup>
              </h1>
              <span>{weatherData?.current?.wind_kph}km/h : سرعة الرياح</span>
              <span>{weatherData?.current?.humidity}% : الرطوبة</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
