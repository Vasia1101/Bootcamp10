"use strict";
// function menu
document.querySelector('main').addEventListener('click', () => {menuBtn.className = menuIconClosed;
  menuContainer.className = menuContClosed;});
const menuBtn = document.getElementById('js-menuBtn');
const menuContainer = document.getElementById('js-menuContainer');

const menuIconClosed = "menu-icon closed"; 
const menuIconOpened = "menu-icon opened"; 
const menuContClosed = "menu-container closed"; 
const menuContOpened = "menu-container opened"; 

menuBtn.addEventListener('click', function() {
  if (menuBtn.className == menuIconClosed) {
    menuBtn.className = menuIconOpened;
    menuContainer.className = menuContOpened;
  } else if (menuBtn.className == menuIconOpened) {
    menuBtn.className = menuIconClosed;
    menuContainer.className = menuContClosed;
  }
  });



  // ----------------------------- Juli Modal ------------------------//
;(function() {
  function isValue(el, arr) {
      for (let i = 0; i < arr.length; i++) {
              if (el.value) {
              el.classList.add("active");
          } else {
              el.classList.remove("active");
          }
      }
  }
  
  let inputs = document.querySelectorAll(".js_input");
  let newArr = Array.from(inputs);
  let close = document.querySelector('.js_close_icon');
  let form = document.querySelector('.js_form');
  let formWrapper = document.querySelector('.js_container_wrapper');
  let thanksMessageModal = document.querySelector('.js_thanks_message_modal');
  let openModal = document.querySelectorAll('.js-open_modal');
  let bntOkModal = document.querySelector('.js_submit_ok');

  let formContent = document.querySelector('.js_form__content');

  newArr.forEach(element => element.addEventListener("change", () => isValue(element, newArr)));

  function sendForm() {
      event.preventDefault();
      showThanksMessage();
  }

  close.addEventListener('click', function() {
      formWrapper.classList.add('close_modal');
  });
  bntOkModal.addEventListener('click', function() {
      formWrapper.classList.add('close_modal');
  });
  
  function showThanksMessage() {
      thanksMessageModal.classList.add('active');
      formContent.classList.add('hide');
  }
  
  openModal.forEach(element => element.addEventListener('click', function() {
      formWrapper.classList.remove('close_modal');
      thanksMessageModal.classList.remove('active');
      formContent.classList.remove('hide');
      newArr.forEach(element => element.value = '');
  }));

  form.addEventListener('submit', sendForm);

})();










let title = document.querySelector(".card-descr_title");
console.log(title);
let titleDesktop = document.querySelector(".card-descr_titleDesktop");
let description = document.querySelector(".card-descr_aboutfilm");
let dateRelease = document.querySelector(".card-descr_date");
let country = document.querySelector(".js-country");
let tagline = document.querySelector(".js-tagline");
let director = document.querySelector(".js-director");
let scenario = document.querySelector(".js-scenario");
let genres = document.querySelector(".js-genres");
let runtime = document.querySelector(".js-runtime");
let cover = document.querySelector(".js-cover");
let id = localStorage.getItem('id');

function getFilmByIdNataTs(id) {

    
  let API = `https://api.themoviedb.org/3/tv/${id}?api_key=c2b5de19f08adc486af54dcc0c9946be&language=ru`;

  fetch(API)
    .then(response => {
      if (response.ok) return response.json();
      throw new Error("Error fetching data");
    })
    .then(data => {
      console.log(data);
      
      cover.style.background = `
      url(https://image.tmdb.org/t/p/w185/${data.poster_path})`;
      cover.style.backgroundSize = "cover";
      cover.style.backgroundPosition = "center";
      cover.style.backgroundRepeat = "no-repeat";
      title.textContent = `${data.name} (${data.first_air_date.slice(0, 4)})`;
      
      
      
      titleDesktop.textContent = data.name;
      description.textContent = data.overview;
      dateRelease.textContent = data.first_air_date; 
      let countryName = data.origin_country.reduce((acc, element) => {
        return (acc = acc + ` ${element},`);
      }, "");
      console.log(data.origin_country);
      country.textContent = countryName.slice(0, -1);
      
      tagline.textContent = data.vote_average;
      let genresArr = data.genres.reduce((acc, element) => {
        return (acc = acc + ` ${element.name},`);
      }, "");
      genres.textContent = genresArr.slice(0, -1);
      runtime.textContent = data.number_of_seasons;
      // https://api.themoviedb.org/3/tv/{tv_id}/credits?api_key=<<api_key>>&language=en-US
      let APIdirector = `https://api.themoviedb.org/3/tv/${id}/credits?api_key=c2b5de19f08adc486af54dcc0c9946be&language=ru`;
      fetch(APIdirector)
        .then(response => {
          if (response.ok) return response.json();
          throw new Error("Error fetching data");
        })
        .then(dataDirector => {
          console.log(dataDirector);
          let resultDirector = dataDirector.crew.find(item => item.job === "Executive Producer");
          director.textContent = resultDirector.name;
          let resultScenario = dataDirector.crew.find(item => item.job === "Novel");
          scenario.textContent = resultScenario.name;
        });

//         let APIimage = `https://api.themoviedb.org/3/movie/${id}/images?api_key=c2b5de19f08adc486af54dcc0c9946be&language=ru`;
//         fetch(APIimage)
//         .then(response => {
//           if (response.ok) return response.json();
//           throw new Error("Error fetching data");
//         })
//         .then(dataImage => {
          
//           console.log(dataImage.posters[0].file_path)
//           cover.style.background = `url(https://image.tmdb.org/t/p/w185/${dataImage.posters[0].file_path})`;
// cover.style.backgroundSize = "cover";
//       cover.style.backgroundPosition = "center";
//       cover.style.backgroundRepeat = "no-repeat";

//         })

      // cover.style.backgroundSize = "cover";
      // cover.style.backgroundPosition = "center";
      // cover.style.backgroundRepeat = "no-repeat";
        
    })
    .catch(err => console.error("Error:", err));
}

getFilmByIdNataTs(id);
// const returTop = document.querySelector('.menuTitle');
// function returnToTop (even){
//     even.preventDefault();
//     window.open("../index.html");
// }
// returTop.addEventListener('click', returnToTop)

// ======================== JS Viktor ===================================
let overview = document.querySelector('.review');
let name = document.querySelector('.name');
let setUsers = document.querySelector('.box_user');

function getFilmById(movie_id) {
  let API = `https://api.themoviedb.org/3/tv/${movie_id}/reviews?api_key=adf30a859a361376a6b096834a0ecfd0&language=en-ru&page=1`;

  fetch(API)
    .then(response => {
      if (response.ok) return response.json();
      throw new Error("Error fetching data");
    })
    .then(data => {
      console.log(data);


 
     setUsers.innerHTML = data.results.reduce((acc , i) => acc + `<div class="box_user"><div class="user_Victor"><img class="icon_Victor" src="https://cdn0.iconfinder.com/data/icons/user-collection-4/512/user-512.png">
     <p class=".name_Victor">${i.author}</p></div>
     <p class="review_Victor">${i.content}</p><div> `, '' );

      console.log(data.production_countries);



      }, "");
    }

getFilmById(id);

// ========================== Natalia Verb js ===============================//
// функция слайдера для актёров и кадров из фильма

// let arrowRight = document.querySelector(".left-actors");
let btnsActors = document.querySelectorAll(".btn-js");
let actorsList = document.querySelector(".actors-list");
let framesList = document.querySelector(".frame-list");
let btnsFrames = document.querySelectorAll(".btns-js");
let filmFrame = document.querySelector(".film-frame");


///класс для слайдера актеров и постов фильма

class Slider {

  constructor(actors, onChange) {
    this.actors = actors;
    this.actorsLength = this.actors.length - 1;
    this.activeIndexes = {
      min: 0,
      max: 3,
    };
    this.onChange = onChange;
    this.activeActors = [];
    this.setActiveActors();
  }

  setActiveActors() {
    this.activeActors = this.actors.filter((_, i) => {
      return i >= this.activeIndexes.min && i <= this.activeIndexes.max;
    });
    this.onChange(this.activeActors);
  }

  moveRight() {
    const {min, max} = this.activeIndexes;
    const incrementedMax = max + 1;
    if (incrementedMax > this.actorsLength) return;

    this.activeIndexes = {
      min: min + 1,
      max: max + 1,
    };
    this.setActiveActors();
  }

  moveLeft() {
    const {min, max} = this.activeIndexes;
    const decrementedMin = min - 1;
    if (decrementedMin < 0) return;

    this.activeIndexes = {
      min: min - 1,
      max: max - 1,
    };
    this.setActiveActors();
  }
}

///слайдер актеров

function renderActors(actors) {
  actorsList.innerHTML = '';
  actors.forEach(actor => {
    actorsList.innerHTML += getActorMarkup(actor);
  });
}

function getActorMarkup(actor) {
  return (
    `<div class="actor-item">
      <div class="photo-wrapper">
        <img src="https://image.tmdb.org/t/p/w185/${actor.profile_path}" alt="" class="actor-photo">
      </div>
      <p class="actor-name">${actor.name}</p>
    </div>`
  )
}

fetch(`http://api.themoviedb.org/3/tv/${id}/credits?api_key=c2b5de19f08adc486af54dcc0c9946be`)
  .then(response => response.json())
  .then(data => {
    console.log(data)
    const actors = data.cast;
    const slider = new Slider(actors, renderActors);

    let moveActors = (event) => {
      const dataType = event.target.getAttribute('data-type');
      if (dataType === "right") {
        slider.moveRight()
      } else {
        slider.moveLeft();
      }
    };
    [...btnsActors].forEach(actor => actor.addEventListener('click', moveActors));
  });

///кадры из фильма

function renderFrame(frames) {
  console.log(frames);
  framesList.innerHTML = '';
  frames.forEach(frame => {
    framesList.innerHTML += getFrameMarkup(frame);
  });
}

function getFrameMarkup(frame) {
  return (
    `<div class="frame-item">
  <img src="https://image.tmdb.org/t/p/w185/${frame.file_path}" alt="" class="frame">
  </div>`
  )
}

fetch(`https://api.themoviedb.org/3/tv/${id}/images?api_key=c2b5de19f08adc486af54dcc0c9946be&language=ru`)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    const frames = data.posters;
    if (frames.length == 0) {
      filmFrame.style.display = 'none';
    }
    const sliderFrames = new Slider(frames, renderFrame);

    let moveFrames = (event) => {
      const dataType = event.target.getAttribute('data-typeFrame');
      if (dataType === "right") {
        sliderFrames.moveRight()
      } else {
        sliderFrames.moveLeft();
      }
    };
    [...btnsFrames].forEach(frame => frame.addEventListener('click', moveFrames));
  });


//// trailer

let trailer = document.querySelector(".wrapper-video");

let APItrailer = `https://api.themoviedb.org/3/tv/${id}/videos?api_key=c2b5de19f08adc486af54dcc0c9946be&language=en-US`;
fetch(APItrailer)
  .then(response => {
    if (response.ok) return response.json();
    throw new Error("Error fetching data");
  })
  .then(dataTrailer => {
    console.log(dataTrailer);
    console.log(dataTrailer.results[0].key);
    trailer.innerHTML = `<iframe class="trailer-video"
 src="https://www.youtube.com/embed/${dataTrailer.results[0].key}" frameborder="0" allowfullscreen class="video"></iframe>`


  });

  

// ================================ Natalia Ts (search) ===============


let headerInput = document.querySelector(".headerInput");
let headerInputForm = document.querySelector("#headerInputForm");
let searchOnCardFilm = document.querySelector(".search-onCardFilm");
let cardFilmPage = document.querySelector(".card-filmPage");
let inputValue;
let filmOfSerch;

function searchfilm() {
event.preventDefault();
inputValue = headerInput.value;
if(inputValue) {
  searchOnCardFilm.innerHTML = "";
console.log(inputValue);
let API = `https://api.themoviedb.org/3/search/multi?api_key=c2b5de19f08adc486af54dcc0c9946be&language=ru-RU&query=${inputValue}&page=1&include_adult=false`;
fetch(API)
  .then(response => {
    if (response.ok) return response.json();
    throw new Error("Error fetching data");
  })
  .then(data => {
    console.log(data);
    if (data.results.length !== 0) {
      for (let el of data.results) {
        let img = "../images/bigCow.png";
        if (el.media_type === "movie" || el.media_type === "tv") {
          if (el.poster_path !== null) {
            img = `https://image.tmdb.org/t/p/w185/${el.poster_path}`;
            cardFilmPage.style.display = "none";
            searchOnCardFilm.innerHTML += `
               <div class="pictureCard ">
               <div class="pictureCover js-filmOfSearch" id="${el.id}"></div>
               <img width="100%" src='${img}'></img>
               <svg class="iconStarCard" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"  x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"  width="20px" height="20px" ><g><g>
               <g>
                  <path class="iconTop" width="20px" height="20px" d="M467.812,431.851l-36.629-61.056c-16.917-28.181-25.856-60.459-25.856-93.312V224c0-67.52-45.056-124.629-106.667-143.04    V42.667C298.66,19.136,279.524,0,255.993,0s-42.667,19.136-42.667,42.667V80.96C151.716,99.371,106.66,156.48,106.66,224v53.483    c0,32.853-8.939,65.109-25.835,93.291l-36.629,61.056c-1.984,3.307-2.027,7.403-0.128,10.752c1.899,3.349,5.419,5.419,9.259,5.419    H458.66c3.84,0,7.381-2.069,9.28-5.397C469.839,439.275,469.775,435.136,467.812,431.851z" data-original="#000000" class="active-path" data-old_color="#9BFF00" fill="#FEFFFD"/>
               </g>
            </g><g>
               <g>
                  <path d="M188.815,469.333C200.847,494.464,226.319,512,255.993,512s55.147-17.536,67.179-42.667H188.815z" data-original="#000000" data-old_color="#9BFF00" fill="#FEFFFD"/>
               </g>
            </g></g> </svg>


            <svg class="iconBellCard" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" width="20px" height="20px"  viewBox="0 0 306 306" style="enable-background:new 0 0 306 306;" xml:space="preserve"><g><g>
            <g>
               <polygon class="iconTop" points="153,230.775 247.35,299.625 211.65,187.425 306,121.125 191.25,121.125 153,6.375 114.75,121.125 0,121.125     94.35,187.425 58.65,299.625   " data-original="#000000" data-old_color="#FCF9F9" fill="#FFFDFD"/>
            </g>
         </g></g> </svg> 
                  <p class="textCard">${el.title || el.name}</p>
               </div>
           `;
          } else {
            cardFilmPage.style.display = "none";
            searchOnCardFilm.innerHTML += `
               <div class="pictureCard">
               <div class="pictureCover js-filmOfSearch" id="${el.id}"></div>
               <img width="100%" src='${img}'></img>
               <svg class="iconStarCard" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"  x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"  width="20px" height="20px" ><g><g>
               <g>
                  <path class="iconTop" width="20px" height="20px" d="M467.812,431.851l-36.629-61.056c-16.917-28.181-25.856-60.459-25.856-93.312V224c0-67.52-45.056-124.629-106.667-143.04    V42.667C298.66,19.136,279.524,0,255.993,0s-42.667,19.136-42.667,42.667V80.96C151.716,99.371,106.66,156.48,106.66,224v53.483    c0,32.853-8.939,65.109-25.835,93.291l-36.629,61.056c-1.984,3.307-2.027,7.403-0.128,10.752c1.899,3.349,5.419,5.419,9.259,5.419    H458.66c3.84,0,7.381-2.069,9.28-5.397C469.839,439.275,469.775,435.136,467.812,431.851z" data-original="#000000" class="active-path" data-old_color="#9BFF00" fill="#FEFFFD"/>
               </g>
            </g><g>
               <g>
                  <path d="M188.815,469.333C200.847,494.464,226.319,512,255.993,512s55.147-17.536,67.179-42.667H188.815z" data-original="#000000" data-old_color="#9BFF00" fill="#FEFFFD"/>
               </g>
            </g></g> </svg>


            <svg class="iconBellCard" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" width="20px" height="20px"  viewBox="0 0 306 306" style="enable-background:new 0 0 306 306;" xml:space="preserve"><g><g>
            <g>
               <polygon class="iconTop" points="153,230.775 247.35,299.625 211.65,187.425 306,121.125 191.25,121.125 153,6.375 114.75,121.125 0,121.125     94.35,187.425 58.65,299.625   " data-original="#000000" data-old_color="#FCF9F9" fill="#FFFDFD"/>
            </g>
         </g></g> </svg> 
                  <p class="textCard">${el.title || el.name}</p>
               </div>
           `;
          }
        }
        
      }
    } else {
      cardFilmPage.style.display = "none";
      searchOnCardFilm.innerHTML = `<div class="requestNotFound" height="200px" background-color="blue" ><p>По Вашему запросу ничего не найдено!</p></div>`;
    }
    //=========слушатель для отрисовки карточки фильма из списка выведенных при поиске
    filmOfSerch = Array.from(document.querySelectorAll(".js-filmOfSearch"));
    filmOfSerch.forEach(elem => elem.addEventListener("click", getIdOfSearch));
  });
} else {
  searchOnCardFilm.innerHTML = "";
  cardFilmPage.style.display = "block";
}
}

function clearHeaderInput() {
if (headerInput.value) {
  headerInput.value = "";
}
}

headerInput.addEventListener("click", clearHeaderInput);
headerInputForm.addEventListener("submit", searchfilm);

// ======================================NatalyTas======================================//

   
   //ф-я для получения ID из выведенных в результате поиска
   function getIdOfSearch(event) {  
    let target = event.target;  
    console.log(target);
    
    if (target.hasAttribute("id")) {
      let filmId = target.getAttribute("id");
      localStorage.setItem("id", filmId);
      window.open("../../MooviDB1/cardDescr.html");
    }
  }
