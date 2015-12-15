/**
 * Controller for movie list view
 */
app.controller('MoviesCtrl', function ($scope, MoviesService) {
    $scope.data = MoviesService.data; //Sync data from service to controller

    /**
     * @description Search movies corresponding with searchString
     */
    $scope.search = function(searchString) {
        MoviesService.searchMoviesFromDatabase(searchString);
    }
})