(function () {
    'use strict';
    
    var shoppingList1 = [
      "Milk", "Donuts", "Cookies", "Chocolate", "Peanut Butter", "Pepto Bismol", "Pepto Bismol (Chocolate flavor)", "Pepto Bismol (Cookie flavor)"
    ];
    
    var shoppingList2 = [
      {
        name: "Milk",
        quantity: "2"
      },
      {
        name: "Donuts",
        quantity: "200"
      },
      {
        name: "Cookies",
        quantity: "300"
      },
      {
        name: "Chocolate",
        quantity: "5"
      }
    ];
    
    angular.module('ShoppingListApp', [])
    .controller('ShoppingListController', ShoppingListController);
    
    ShoppingListController.$inject = ['$scope'];
    function ShoppingListController($scope) {
      $scope.shoppingList1 = shoppingList1;
      
//all we're doing here is obviously injecting scope as usual, 
//but all we're doing here is placing those arrays as a property on the scope service.
      $scope.shoppingList2 = shoppingList2;//will be able to be reference to html

//this scope is for the new function which will put some new elements in our list
      $scope.addToList = function () {
        var newItem = {
          name: $scope.newItemName,
          quantity: $scope.newItemQuantity
        };
//push the new item inside of the list
        $scope.shoppingList2.push(newItem);
      };
    }
    
    })();