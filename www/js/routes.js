app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('movies', {
            url: '/movies',
            templateUrl: "views/movies/movies.html",
            controller: 'MoviesCtrl'
        })
        .state('movie-detail', {
            url: '/movies/:id',
            templateUrl: "views/movies/movie-detail.html",
            controller: 'MovieDetailCtrl'
        });
    $urlRouterProvider.otherwise('/movies');
});