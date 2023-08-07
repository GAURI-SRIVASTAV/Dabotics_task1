let title=document.getElementById("title");
let actor=document.getElementById("actor");
let genre=document.getElementById("genre");
let collection=document.getElementById("collection");
let date=document.getElementById("date");
let desc=document.getElementById("desc");
let dir=document.getElementById("dir");
let poaster=document.getElementById("poster");
let rating=document.getElementById("rating");



function search(){
let api="https://www.omdbapi.com/?t=" 

let moviename=document.getElementById("movie_name").value;
let key="&apikey=c17ac30a&"

let apikey = api+moviename+key;
console.log(apikey)

fetch(apikey).then((movieData)=>{
    //console.log(movieData)
    return movieData.json()
}).then((movie)=>{
    console.log(movie);
    title.innerText=movie.Title;
    actor.innerText=movie.Actors;
    genre.innerText=movie.Genre;
    collection.innerText=movie.BoxOffice;
    date.innerText=movie.Released;
    desc.innerText=movie.Plot;
    dir.innerText=movie.Director;
    rating.innerText=movie.imdbRating;
    poster.src=movie.Poster;

})
}