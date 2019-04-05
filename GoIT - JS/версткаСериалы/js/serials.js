"use strict";

// ========= serials Nata Chasovskikh ============

//=========== popular ======

let apiSerialsPopular =
  "https://api.themoviedb.org/3/tv/popular?api_key=c2b5de19f08adc486af54dcc0c9946be&language=ru-US&page=1";

let bgSerialsPopular = document.querySelectorAll(".js-bgSerialsPopular");
let textSerialsPopular = document.querySelectorAll(".textSerialsPopular");

fetch(apiSerialsPopular)
  .then(responce => responce.json())

  .then(data => {
    let res = data.results.slice(0, 4);
    console.log(res);

    let i = 0;
    bgSerialsPopular.forEach(el => {
      el.style.background = `linear-gradient(to top, rgba(0, 0, 0, 0.725), rgba(128, 128, 128, 0)) 0% 0% / cover, url(https://image.tmdb.org/t/p/w185${
        res[i].poster_path
      })`;
      el.style.backgroundSize = "cover";
      el.lastElementChild.textContent = `${res[i].name}`;
      el.setAttribute('id', `${res[i].id}`);
      i++;
    });
  });

// =========== TopRated ======

let apiSerialsTopRated =
  "https://api.themoviedb.org/3/tv/top_rated?api_key=c2b5de19f08adc486af54dcc0c9946be&language=ru-US&page=1";

let bgSerialsTopRated = document.querySelectorAll(".js-bgSerialsTopRated");
let textSerialsTopRated = document.querySelectorAll(".textSerialsTopRated");

fetch(apiSerialsTopRated)
  .then(responce => responce.json())

  .then(data => {
    let res = data.results.slice(0, 4);

    let i = 0;
    bgSerialsTopRated.forEach(el => {
      el.style.background = `linear-gradient(to top, rgba(0, 0, 0, 0.725), rgba(128, 128, 128, 0)) 0% 0% / cover, url(https://image.tmdb.org/t/p/w185${
        res[i].poster_path
      })`;
      el.style.backgroundSize = "cover";
      el.lastElementChild.textContent = `${res[i].name}`;
      el.setAttribute('id', `${res[i].id}`);
      i++;
    });
    console.log(res);
  });

//=========== OnTheAir ======

let apiSerialsOnTheAir =
  "https://api.themoviedb.org/3/tv/on_the_air?api_key=c2b5de19f08adc486af54dcc0c9946be&language=ru-US&page=1";

let bgSerialsOnTheAir = document.querySelectorAll(".js-bgSerialsOnTheAir");
let textSerialsOnTheAir = document.querySelectorAll(".textSerialsOnTheAir");

fetch(apiSerialsOnTheAir)
  .then(responce => responce.json())

  .then(data => {
    let res = data.results.slice(0, 4);

    let i = 0;
    bgSerialsOnTheAir.forEach(el => {
      el.style.background = `linear-gradient(to top, rgba(0, 0, 0, 0.725), rgba(128, 128, 128, 0)) 0% 0% / cover, url(https://image.tmdb.org/t/p/w185${
        res[i].poster_path
      })`;
      el.style.backgroundSize = "cover";
      el.lastElementChild.textContent = `${res[i].name}`;
      el.setAttribute('id', `${res[i].id}`);
      i++;
    });
    console.log(res);
  });
