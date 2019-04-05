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
})
// js Juli
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

//========================= Natalia Chas =================

let apiNew = 'https://api.themoviedb.org/3/movie/now_playing?api_key=c2b5de19f08adc486af54dcc0c9946be&language=en-US';
let bgNew = document.querySelectorAll('.js-bgNew');
let textNew = document.querySelectorAll('.textNew');

fetch(apiNew)
.then(response => response.json())
.then(data => {
   let res = data.results.slice(0,2);
   let i = 0;
   bgNew.forEach(el => {
      el.style.background = `linear-gradient(to top, rgba(0, 0, 0, 0.725), rgba(128, 128, 128, 0)) 0% 0% / cover, url(https://image.tmdb.org/t/p/w185${res[i].poster_path})`;
      el.style.backgroundSize = 'cover';
      el.lastElementChild.textContent = `${res[i].title}`;
      el.setAttribute('id', `${res[i].id}`);
      i++;
   })
   console.log(res);
   
}
);

let apiTop = 'https://api.themoviedb.org/3/movie/top_rated?api_key=c2b5de19f08adc486af54dcc0c9946be&language=en-US&page=1';

let bgTop = document.querySelectorAll('.js-bgTop');
let textTop = document.querySelectorAll('.textTop');

fetch(apiTop)
.then(responce => responce.json())

.then(data => {
   let res = data.results.slice(0,2);
   let i = 0;
   bgTop.forEach(el => {
      el.style.background = `linear-gradient(to top, rgba(0, 0, 0, 0.725), rgba(128, 128, 128, 0)) 0% 0% / cover, url(https://image.tmdb.org/t/p/w185${res[i].poster_path})`;
      el.style.backgroundSize = 'cover';
      el.lastElementChild.textContent = `${res[i].title}`;
      el.setAttribute('id', `${res[i].id}`);
      i++;
   })
});

let apiUpcoming = 'https://api.themoviedb.org/3/movie/upcoming?api_key=c2b5de19f08adc486af54dcc0c9946be&language=ru-US&page=1';

let bgUpcoming = document.querySelectorAll('.js-bgUpcoming');
let textUpcoming = document.querySelectorAll('.textUpcoming');

fetch(apiUpcoming)
.then(responce => responce.json())

.then(data => {
   let res = data.results.slice(0,2);   
   let i = 0;
   bgUpcoming.forEach(el => {
      el.style.background = `linear-gradient(to top, rgba(0, 0, 0, 0.725), rgba(128, 128, 128, 0)) 0% 0% / cover, url(https://image.tmdb.org/t/p/w185${res[i].poster_path})`;
      el.style.backgroundSize = 'cover';
      el.lastElementChild.textContent = `${res[i].title}`;
      el.setAttribute('id', `${res[i].id}`);
      i++;
   })
   console.log(res);
})

let apiSerials = 'https://api.themoviedb.org/3/tv/popular?api_key=c2b5de19f08adc486af54dcc0c9946be&language=ru-US&page=1';

let bgSerials = document.querySelectorAll('.js-bgSerials');
let textSerials = document.querySelectorAll('.textSerials');

fetch(apiSerials)
.then(responce => responce.json())

.then(data => {
   let res = data.results.slice(0,2);
   
   let i = 0;
   bgSerials.forEach(el => {
      el.style.background = `linear-gradient(to top, rgba(0, 0, 0, 0.725), rgba(128, 128, 128, 0)) 0% 0% / cover, url(https://image.tmdb.org/t/p/w185${res[i].poster_path})`;
      el.style.backgroundSize = 'cover';
      el.lastElementChild.textContent = `${res[i].name}`;
      el.setAttribute('id', `${res[i].id}`);
      i++;
   })
   console.log(res);
});

// ================================ Andrii LocalStorage =========================
let getableMainPoster = document.querySelectorAll('.js-favorite'),
    newGetableMainPoster = Array.from(getableMainPoster),
    setableSVG = document.querySelectorAll('.iconStarTrue'),
    newSetableSVG = Array.from(setableSVG),
    wiewSelectedFavorites = document.querySelector('#idishka3'),
    resultArr = [],
    filteredArr = [];

window.addEventListener("load", function () {
    if (localStorage.getItem('Favorite', resultArr) === null) {localStorage.setItem('Favorite', 'Name:');}
    if (localStorage.key !== null) {
        filteredArr = localStorage.getItem('Favorite', resultArr).split(',');
        newSetableSVG.forEach((element) => {
            if (filteredArr.includes(element.parentElement.parentElement.id)) {
                element.style.fill = 'yellow';
            }
        });
    }
});

function setFavorite(event) {
    event.preventDefault();
    resultArr = filteredArr;
    setableSVG.forEach(function (element) {
        if ((event.target === element) && (!resultArr.includes(event.target.parentElement.parentElement.id))) {
            element.style.fill = 'yellow';
            resultArr.push(event.target.parentElement.parentElement.id);
            localStorage.setItem('Favorite', resultArr)
        } else if ((event.target === element) && (resultArr.includes(event.target.parentElement.parentElement.id))) {
            resultArr.splice(resultArr.indexOf(event.target.parentElement.parentElement.id), 1);
            localStorage.setItem('Favorite', resultArr);
            element.style.fill = 'white';
        }
    });
}

function filterByFavorite() {
    filteredArr = localStorage.getItem('Favorite', resultArr).split(',');
    newSetableSVG.forEach((element) => {
        if (!filteredArr.includes(element.parentElement.parentElement.id)) {
            element.parentElement.parentElement.style.display = 'none';
        }
    })
}

newGetableMainPoster.forEach(elem => elem.addEventListener('click', setFavorite));
wiewSelectedFavorites.addEventListener('click', filterByFavorite);

// ================================ Natalia Ts ===============

// document.querySelector('.js-openFilm').addEventListener('click', getId);
newGetableMainPoster.forEach(elem => elem.addEventListener('click', getId));
function getId(event) {


    let target = event.target; 
    if (target.hasAttribute('id')) {
        let filmId = target.getAttribute('id');
        
        localStorage.setItem('id', filmId);
        window.open("./MooviDB1/cardDescr.html");

        // getFilmById(filmId);
        // console.log(filmId);
// myWindow.document.write("<p>This window's name is: " + filmId + "</p>");
}}