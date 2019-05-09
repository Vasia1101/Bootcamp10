import React, { Component } from "react";
import s from "./Main.module.css";
import earth from "../image/earth.png";
import pinned from "../image/pinned.png";
import Map from "./Map";
// import Describe from './Describe';

// import Describe from './Describe'

export default class Main extends Component {
  state = {
    time: new Date()
  };
  componentDidMount() {
    this.update = setInterval(() => {
      this.setState({ time: new Date() });
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.update);
  }
  render() {
    const { time } = this.state;
    const {
      city,
      src,
      temp,
      today,
      updated,
      getInput,
      humidity,
      minT,
      maxT,
      sunrise,
      getInfo,
      sunset,
      wind,
      lat,
      lng,
      country
    } = this.props;
    return (
      <>
        <main className={s.weather}>
          <section className={s.one}>
            <div className={s.wid}>
              <form onSubmit={getInput}>
                <input type="text" name="city" className={s.input} />
                <img src={earth} alt="location" />
              </form>

              <p className={s.intCenter}>
                <button className={s.button} type="button">
                  One Day
                </button>

                <button className={s.button} type="button">
                  More Day
                </button>

                <button className={s.button} type="button">
                  Chart
                </button>
              </p>
            </div>
            <div className={s.wid}>
              <span className={s.rigthDiv}>
                <img src={pinned} alt="locPinned" />
                <div className={s.neon}>
                  <p>{city}</p>
                  <h2> {time.toLocaleString()}</h2>
                </div>
              </span>
            </div>
          </section>

          <section className={s.two}>
            <div className={s.styleDiv}>
              <div className={s.center}>
                <h3> Погода у місті {city}</h3>
                <h4>{today}</h4>
                <img src={src} alt="sunIcon" />
                <h4>{temp}&#8451;</h4>
              </div>
              <div>
                <p>Останнє оновлення: {updated}</p>
                <p>Вологість: {humidity}</p>
                <p>Min °C: {minT}</p>
                <p>Max °C: {maxT}</p>
                <p>Схід: {sunrise}</p>
                <p>Захід: {sunset}</p>
                <p>Швидкість вітру: {wind} м/с</p>
              </div>
            </div>
            <div className={s.styleDiv}>
              <Map
                getInfo={getInfo}
                lat={lat}
                lng={lng}
                city={city}
                country={country}
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyA8Fn3EHaXwLdTE4od4uGWXS51GKq7Oq2o"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={
                  <div style={{ height: `22.5rem`, width: `100%` }} />
                }
                mapElement={
                  <div className={s.styleMap} style={{ height: `100%` }} />
                }
              />
            </div>
          </section>
        </main>
      </>
    );
  }
}
