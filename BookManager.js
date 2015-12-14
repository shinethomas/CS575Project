/**
 * Created by Shine on 11/22/2015.
 */

var BookManager = angular.module('BookManager', []);
BookManager.controller('BooksCtrl', function ($scope, $http){
    $http.get('BooksDB.json').success(function(data) {
        $scope.BooksDB = data;
    });

    $scope.sortField = 'grade';
    $scope.reverse = true;
});


