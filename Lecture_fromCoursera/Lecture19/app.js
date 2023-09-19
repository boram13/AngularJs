//declares our app and controllers we will use
(function () {
    'use strict';
    
    angular.module('ControllerAsApp', [])
    .controller('ParentController1', ParentController1)
    .controller('ChildController1', ChildController1)
    .controller('ParentController2', ParentController2)
    .controller('ChildController2', ChildController2);
    
    ParentController1.$inject = ['$scope'];
    function ParentController1($scope) {
      $scope.parentValue = 1;//primitive type value
      $scope.pc = this;
      $scope.pc.parentValue = 1;
    }
    
    //going to use the $scope which is declared on
    // the ChildController itself and ask it for the parent value

    ChildController1.$inject = ['$scope'];
    // function ChildController1($scope) {
    //   console.log("$scope.parentValue: ", $scope.parentValue);
    //   console.log("CHILD $scope: ", $scope);
      
    //   $scope.parentValue = 5;
    //   console.log("*** CHANGED: $scope.parentValue = 5 ***");
    //   console.log("$scope.parentValue: ", $scope.parentValue);
    //   console.log($scope);
    //   //we need to trverse our prototype chain to change the value of parent and child scope 
    //   console.log("$scope.pc.parentValue: ", $scope.pc.parentValue);
    //   $scope.pc.parentValue = 5;
    //   console.log("** CHANGED: $scope.pc.parentValue = 5; ***");
    //   console.log("$scope.pc.parentValue: ", $scope.pc.parentValue);
    //   console.log("$scope: ", $scope);
      
    //   console.log("$scope.$parent.parentValue: ", $scope.$parent.parentValue);
    // }
    
    // ** Controller As syntax
    function ParentController2() {
      var parent = this;
      parent.value = 1;
    }
    ChildController2.$inject = ['$scope'];
    function ChildController2($scope) {
      var child = this;
      child.value = 5;
      console.log("ChildController2 $scope: ", $scope);
    }
    
    })();