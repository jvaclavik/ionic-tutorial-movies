/**
 * @description Service for getting and handling movies data from DB/API
 */
app.factory('MoviesService', function () {
    return new (function () {
        var service = this;
        service.data = {};

        /**
         * @description Improvised movie database
         */
        var moviesDb = [
            {"Title":"Inglourious Basterds","Year":"2009","imdbID":"tt0361748","Type":"movie","Poster":"http://ia.media-imdb.com/images/M/MV5BMjIzMDI4MTUzOV5BMl5BanBnXkFtZTcwNDY3NjA3Mg@@._V1_SX300.jpg"},
            {"Title":"Pulp Fiction","Year":"1994","imdbID":"tt0110912","Type":"movie","Poster":"http://ia.media-imdb.com/images/M/MV5BMTkxMTA5OTAzMl5BMl5BanBnXkFtZTgwNjA5MDc3NjE@._V1_SX300.jpg"},
            {"Title":"Gladiator","Year":"2000","imdbID":"tt0172495","Type":"movie","Poster":"http://ia.media-imdb.com/images/M/MV5BMTgwMzQzNTQ1Ml5BMl5BanBnXkFtZTgwMDY2NTYxMTE@._V1_SX300.jpg"},
            {"Title":"Batman Begins","Year":"2005","imdbID":"tt0372784","Type":"movie","Poster":"http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg"},
            {"Title":"The Shawshank Redemption","Year":"1994","imdbID":"tt0111161","Type":"movie","Poster":"http://ia.media-imdb.com/images/M/MV5BODU4MjU4NjIwNl5BMl5BanBnXkFtZTgwMDU2MjEyMDE@._V1_SX300.jpg"},
            {"Title":"Lion of the Desert","Year":"1981","imdbID":"tt0081059","Type":"movie","Poster":"http://ia.media-imdb.com/images/M/MV5BNzgxMzM0MzAxNF5BMl5BanBnXkFtZTcwOTM5NjIzMQ@@._V1_SX300.jpg"}
        ];

        /**
         * @description Get list of movies from DB
         */
        service.searchMoviesFromDatabase = function (searchString) {
            service.data.movies = [];
            angular.forEach(moviesDb, function(movie, key){
                if(movie.Title.toLowerCase().indexOf(searchString) > -1) service.data.movies.push(movie);
            })
        }
        /**
         * @description Get movie data by imdbID
         */
        service.getMovieById = function (imdbID) {
            var selectedMovie = {};
            angular.forEach(service.data.movies, function(movie){
                if(movie.imdbID == imdbID) {
                    selectedMovie = movie;
                }
            })
            return selectedMovie;
        };
    })();
});