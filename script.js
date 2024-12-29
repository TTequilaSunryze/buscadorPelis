
// Configuracion y definicion de las URL de la Api 
let api_key = 'e08e59cb24ae225bc1bc0c7f1b8f5037'
let urlBase = 'https://api.themoviedb.org/3/search/movie'
let urlImg = 'https://image.tmdb.org/t/p/w200'

//Obtengo elementos del DOM 
document.getElementById('searchButton').addEventListener('click', searchMovies)
let resultContainer = document.getElementById('results')

// Funcion de busqueda de pelis
function searchMovies(){
    resultContainer.innerHTML = 'Cargando Pelis...'
    let searchInput = document.getElementById('searchInput').value 
    fetch(`${urlBase}?api_key=${api_key}&query=${searchInput}`)
    .then(response => response.json())
    .then(response => displayMovies(response.results))
}

// Funcion para mostrar las pelis
function displayMovies(movies){
    resultContainer.innerHTML = ''
    if(movies.lenght === 0){
        resultContainer.innerHTML = '<p>No se encontraron resultados para tu búsqueda</p>'
        return
    }
// Creo un div por cada pelicula y lo muestro en el DOM
    movies.forEach(movie => {
        let movieDiv = document.createElement('div')
        movieDiv.classList.add('movie')

        let title = document.createElement('h2')
        title.innerHTML = movie.title

        let releaseDate = document.createElement('p')
        releaseDate.innerHTML = movie.release_date

        let overview = document.createElement('p')
        overview.innerHTML = movie.overview

        let posterPath = urlImg + movie.poster_path
        let poster = document.createElement('img')
        poster.src = posterPath
        
        movieDiv.appendChild(poster)
        movieDiv.appendChild(title)
        movieDiv.appendChild(releaseDate)
        movieDiv.appendChild(overview)

        resultContainer.appendChild(movieDiv)
    });
}