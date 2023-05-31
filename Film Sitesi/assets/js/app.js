const API_URL =
    'https:api.themoviedb.org/4/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'

let main = document.querySelector("main")
let load = document.querySelector(".load")

fetch(API_URL).then(response => response.json()).then(data => {
    showMovies(data.results)
})


function showMovies(movies) {
    movies.forEach(movie => {
        const { title, poster_path, vote_average, overview } = movie
        let film = document.createElement("div")
        film.classList.add("film")
        film.innerHTML = `
            <img class="img" src="${IMG_PATH + poster_path}" alt="${title}">
            <div class="desc">${overview}</div>
            <div class="info">
                <div class="film-name">${title}</div>
                <div class="film-vote ${getVote(vote_average)}">${vote_average}</div>
            </div>
`
        main.append(film)
    });

    load.style.display = "none"
}

function getVote(vote) {
    if (vote >= 7) {
        return 'green'
    } else if (vote >= 5) {
        return 'orange'
    } else {
        return 'red'
    }
}

