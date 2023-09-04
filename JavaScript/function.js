"uses strict";


const movies = [
    {"title": "Jaws", "director": "Steven Spielberg", "year": "1975"},
    {"title": "Star Wars", "director": "George Lucas", "year": "1977"},
    {"title": "Avengers: Infinity War", "director": "Anthony and Joe Russo", "year": "2018"},
    {"title": "Top Gun", "director": "Tony Scott", "year": "1986"},
    {"title": "Justice League", "director": "Zack Snyder", "year": "2017"}
];

// // Part 1 - Create a function to find a movie and output it's detail
//         function findMovie(movieTitle) {
//             for (const i of movies) {
//                 const title = i['title'];
//                 // console.log(title);
//                 if (movieTitle == title){
//                     console.log('Title of the current movie is', title)
//                 }else return 'movie not found'
//             }
//         }


function returnMovie(movieTitle){
    for (const film of movies) {
        console.log(film.title)
        if (movieTitle == film.title){
            return film
        }
    } console.log('Movie not found')//console.log("any text, any text at all")
}

console.log(myMovie = returnMovie("Avengers: Infinity War"))
// ^the log function runs automatically and therefor will run the returnMovie function with the parameter provided

console.log('im gonna go watch ', myMovie.title, 'directedby ', myMovie.director,  ', released in', myMovie.year)


let myOtherMovie = returnMovie('Thor: Ragnorok')
console.log(myOtherMovie)


function myMovieDetails(anyMovie){
    if( typeof anyMovie == 'object'){
        return "its an object"
    } else return anyMovie
}

console.log(myMovieDetails(myOtherMovie))

console.log(myMovieDetails(returnMovie('Jaws')))