(function () {
    'use strict';
    
    angular.module('myFirstApp', [])
    
    .controller('MyFirstController', function ($scope) {
    $scope.name = "Bora"
    $scope.sayHello = function(){
        return "Hello Coursera";
    
    };
    });
    
    })();