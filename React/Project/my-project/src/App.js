import React, { Component } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";

import Main from "./Component/Main";

// import KEyS from '../api.env'

import s from "./App.module.css";

const WEATHER_KEY = "9ca2fed0b1af4e34ac883452192204";
const IMAGE_KEY = "12292072-b1644eb3d3fa74b02be7f2947";

class App extends Component {
  state = {
    isLoading: true,
    city: "Ternopil",
    numForecastDay: 5,
    lat: 49.55,
    lng: 25.58,
    country: "Ukraine"
  };
  getInfoMapClick = e => {
    let lat = e.latLng.lat();
    let lng = e.latLng.lng();
    console.log(lat, lng);
    const { numForecastDay } = this.state;
    const URL = `http://api.apixu.com/v1/forecast.json?key=${WEATHER_KEY}&q=${lat},${lng}&days=${numForecastDay}`;
    console.log(URL);
    axios
      .get(URL)
      .then(res => {
        return res.data;
      })
      .then(data => {
        this.setState({
          isLoading: false,
          temp_c: data.current.temp_c,
          text: data.current.condition.icon,
          forecastDays: data.forecast.forecastday[0],
          astro: data.forecast.forecastday[0].astro,
          city: data.location.name,
          text_today: data.current.condition.text,
          updated: data.current.last_updated,
          humidity: data.current.humidity,
          minT: data.forecast.forecastday[0].day.mintemp_c,
          maxT: data.forecast.forecastday[0].day.maxtemp_c,
          sunrise: data.forecast.forecastday[0].astro.sunrise,
          sunset: data.forecast.forecastday[0].astro.sunset,
          wind: (data.forecast.forecastday[0].day.avgvis_km * (5 / 18)).toFixed(
            2
          ),
          lat: data.location.lat,
          lng: data.location.lon,
          country: data.location.country
        });
        console.log(data.current.pressure_mb);
      })
      .catch(err => {
        if (err) console.error("Cannot get weather from data to api");
      });
  };
  searchImage() {
    const { city } = this.state;
    const URL = `https://pixabay.com/api/?key=${IMAGE_KEY}&q=${city}`;
    axios
      .get(URL)
      .then(res => {
        return res.data;
      })
      .then(data => {
        console.log(data);
        this.setState({
          bgIMG:
            data.hits[Math.floor(Math.random() * data.hits.length)]
              .largeImageURL
        });
      });
  }

  updateWeather() {
    const { city, numForecastDay } = this.state;
    const URL = `http://api.apixu.com/v1/forecast.json?key=${WEATHER_KEY}&q=${city}&days=${numForecastDay}`;
    axios
      .get(URL)
      .then(res => {
        return res.data;
      })
      .then(data => {
        this.setState({
          isLoading: false,
          temp_c: data.current.temp_c,
          text: data.current.condition.icon,
          forecastDays: data.forecast.forecastday,
          astro: data.forecast.forecastday[0].astro,
          city: data.location.name,
          text_today: data.current.condition.text,
          updated: data.current.last_updated,
          humidity: data.current.humidity,
          minT: data.forecast.forecastday[0].day.mintemp_c,
          maxT: data.forecast.forecastday[0].day.maxtemp_c,
          sunrise: data.forecast.forecastday[0].astro.sunrise,
          sunset: data.forecast.forecastday[0].astro.sunset,
          wind: (data.forecast.forecastday[0].day.avgvis_km * (5 / 18)).toFixed(
            2
          ),
          lat: data.location.lat,
          lng: data.location.lon,
          country: data.location.country
        });
        console.log(data.forecast.forecastday);
      })
      .catch(err => {
        if (err) console.error("Cannot get weather from data to api");
      });
  }

  updated() {
    setInterval(() => {
      this.updateWeather();
      this.searchImage();
    }, 1000000);
  }

  componentDidMount() {
    this.updateWeather();
    this.searchImage();
    this.updated();
  }
  componentWillUnmount() {
    clearInterval(this.updated);
  }
  cityNameUpdate = e => {
    e.preventDefault();
    this.setState(
      {
        city: e.target.city.value
      },
      () => this.updateWeather()
    );
  };
  render() {
    const {
      city,
      isLoading,
      temp_c,
      text,
      text_today,
      updated,
      humidity,
      minT,
      maxT,
      sunrise,
      sunset,
      wind,
      lat,
      lng,
      country,
      bgIMG,
      forecastDays
    } = this.state;
    return (
      <>
        {isLoading ? (
          <div className={s.Appheader}>
            <div>
              <Loader type="Circles" color="green" heigth="200" width="200" />
            </div>
          </div>
        ) : (
          <div
            className={s.weather}
            style={{ backgroundImage: `url(${bgIMG})` }}
          >
            <Main
              city={city}
              src={text}
              temp={temp_c}
              today={text_today}
              updated={updated}
              getInput={this.cityNameUpdate}
              humidity={humidity}
              minT={minT}
              maxT={maxT}
              sunrise={sunrise}
              sunset={sunset}
              wind={wind}
              lat={lat}
              lng={lng}
              getInfo={this.getInfoMapClick}
              country={country}
            />
          </div>
        )}
      </>
    );
  }
}

export default App;
