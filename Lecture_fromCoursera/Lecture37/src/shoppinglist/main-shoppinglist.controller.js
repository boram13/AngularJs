(function () {
    'use strict';
    
    angular.module('ShoppingList')
    .controller('MainShoppingListController', MainShoppingListController);
    
    
    MainShoppingListController.$inject = ['ShoppingListService'];
    function MainShoppingListController(ShoppingListService) {
      var mainList = this;
      mainList.items = [];
    
      mainList.$onInit = function () {

        //here we are using the shopping list service in order to initialize this mainlist items
        ShoppingListService.getItems()
        .then(function (result) {
          mainList.items = result;
        });
      };
    }
    
    })();