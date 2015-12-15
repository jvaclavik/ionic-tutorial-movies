/**
 * Controller for movie detail
 */
app.controller('MovieDetailCtrl', function ($scope, MoviesService, $stateParams) {
    if($stateParams){
        $scope.movie = MoviesService.getMovieById($stateParams.id);
    }
})