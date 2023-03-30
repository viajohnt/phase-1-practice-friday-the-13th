let currentMovie;
const movieList = document.getElementById("movie-list");
const movieImage = document.getElementById("detail-image");
const movieTitle = document.getElementById("title");
const movieYear = document.getElementById("year-released");
const movieDescription = document.getElementById("description");
const movieWatched = document.getElementById("watched");
const movieBloodAmount = document.getElementById("blood-amount");
const movieForm = document.getElementById("blood-form");
const bloodText = document.getElementById("amount")
movieWatched.addEventListener("click", toggleWatched);
movieForm.addEventListener("submit", addBloodAmount);
fetch("http://localhost:3000/movies")
.then(response => response.json())
.then(movies => {
    movies.forEach(createPoster);
    renderMovie(movies[0]);
})
function createPoster(movie) {
    const moviePoster = document.createElement("img");
    moviePoster.src = movie.image;
    movieList.append(moviePoster);
    moviePoster.addEventListener("click", () => renderMovie(movie));
}
function renderMovie(movie) {
    bloodText.textContent = movie.blood_amount
    if (movie.watched === false ){
        movieWatched.textContent = "Not Watched";
    } else {
        movieWatched.textContent = "Watched";
    }
        currentMovie = movie;
        movieImage.src = currentMovie.image;
        movieTitle.textContent = currentMovie.title;
        movieYear.textContent = currentMovie.release_year;
        movieDescription.textContent = currentMovie.description;
        movieBloodAmount.textContent = currentMovie.blood_Amount;
    }
function toggleWatched(){
    if (currentMovie.watched === false){
        currentMovie.watched = true;
    } else {
        currentMovie.watched = false;
    }
    renderMovie(currentMovie)
}
function addBloodAmount(event){
    event.preventDefault();
    let bloodAmount = document.getElementById("blood-amount").value;
    bloodAmount = parseInt(bloodAmount)
    currentMovie.blood_amount += bloodAmount
    bloodText.textContent = currentMovie.blood_amount
    event.target.reset()
}
    
       
        



