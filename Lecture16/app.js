(function () {
    'use strict';
    
    angular.module('BindingApp', [])
    .controller('BindingController', BindingController);
    
    BindingController.$inject = ['$scope'];
    function BindingController($scope) {
      $scope.firstName = "Yaakov"; //pro[erties]
        //$scope.fullName = ""; 
        //we remove this to not initialize an empty string but undefined if there is not anything
        //function that shows us the number of watchers
      $scope.showNumberOfWatchers = function () {
        console.log("# of Watchers: ", $scope.$$watchersCount);
      };
      //updates the fullname only in console not in html, because we
      //have used one time binding
      $scope.setFullName = function () {
        $scope.fullName = $scope.firstName + " " + "Chaikin";
      };
    
      $scope.logFirstName = function () {
        console.log("First name is: ", $scope.firstName);
      };
    
      $scope.logFullName = function () {
        console.log("Full name is: ", $scope.fullName);
      };
    }
    
    })();