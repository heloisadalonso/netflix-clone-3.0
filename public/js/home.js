fetch(genres_list_http  + new URLSearchParams({
    api_key: api_key
}))
.then(res => res.json())
.then( data => {
    data.genres.forEach(item => {
        fetchMoviesListByGenres(item.id, item.name)
    });
})

const fetchMoviesListByGenres = (id, genres) =>{
    fetch(movie_genres_http + new URLSearchParams({
        api_key: api_key,
        with_genres: id,
        page: Math.floor(Math.random() *3) +1
    }))
    .then(res => res.json())
    .then(data =>{
        makeCategoryElement(`${genres}_movies`, data.results)
    })
    .catch(err => console.log(err))
}

const mains = document.querySelector(".main")
const makeCategoryElement = (category, data) =>{
    mains.innerHTML += `
    <div class="movie-list">
        <button class="pre-btn">
            <img src="img/prev.png" alt="botão de voltar">
        </button>
        <h1 class="movie-category">${category.replace("_", " ")}</h1>
        <div class="movie-container" id ="${category}"></div>
    </div>
    <button class="next-btn">
        <img src="img/next.png" alt="botão de avançar">
    </button>
    </div>`
    makeCards(category, data)
}
 const makeCards = (id, data) =>{
    const movieContainer = document.querySelector(id)
    data.forEach((item,i) =>{
        if(item.backdrop_path = null){
            item.backdrop_path = item.poster_path;
            if(item.backdrop_path = null){
              return  
            }
        }
        movieContainer.innerHTML += `
        <div class="movie">
            <img src="${img_url}${item.backdrop_path}" alt="poster da série The Witcher">
            <p class="movie-title">${item.title}</p>
        </div>`
    })
 }