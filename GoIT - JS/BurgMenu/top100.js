// -------------------- Kate API ---------------------------//
let topFilms = document.querySelector('.topFilms');
let api =
'https://api.themoviedb.org/3/movie/top_rated?api_key=c2b5de19f08adc486af54dcc0c9946be&language=en-US&page=1';
fetch(api)
.then(response => response.json())
.then(data => {

    console.log(data)
    for (let el of data.results){
        // console.log(el.title);
        topFilms.innerHTML += `<p class="js-newWindow">${el.title}</p><img src='https://image.tmdb.org/t/p/w185/${el.poster_path}'></img>`;
        console.log(el.id)
        }
        const sortFilm = arr => arr.sort((a,b) => b.popularity - a.popularity);
        console.log(sortFilm(data.results));
        const newWindow = document.querySelector('.js-newWindow');

function openNewWindow (event){
event.preventDefault();
window.open("./MooviDB1/cardDescr.html");
}
topFilms.addEventListener('click', openNewWindow);
});



