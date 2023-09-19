(function () {
    'use strict';
    
    angular.module('ShoppingListApp', [])
    //we declare the two controllers
    .controller('ShoppingListAddController', ShoppingListAddController)
    .controller('ShoppingListShowController', ShoppingListShowController)
    //we declare a service
    .service('ShoppingListService', ShoppingListService);
    
    ShoppingListAddController.$inject = ['ShoppingListService'];
    //we create a function constructor
    function ShoppingListAddController(ShoppingListService) {
      var itemAdder = this;
    
      itemAdder.itemName = "";
      itemAdder.itemQuantity = "";
    
      itemAdder.addItem = function () {
        ShoppingListService.addItem(itemAdder.itemName, itemAdder.itemQuantity);
      }
    }
    
    
    ShoppingListShowController.$inject = ['ShoppingListService'];//ejecting list
    function ShoppingListShowController(ShoppingListService) {
      var showList = this;
    //exposes the elements
      showList.items = ShoppingListService.getItems();
    //code a method tat willl be able to use in the template
      showList.removeItem = function (itemIndex) {
        ShoppingListService.removeItem(itemIndex);
      };
    }
    
    //we create a function constructor
    function ShoppingListService() {
      var service = this;
    
    // List of shopping items
      var items = [];
    
      service.addItem = function (itemName, quantity) {
        var item = {
          name: itemName,
          quantity: quantity
        };
        items.push(item);
      };
    //method to remove item
      service.removeItem = function (itemIndex) {
    //array method which removes and index element
        items.splice(itemIndex, 1);
      };
    
    //expose our internal items array to the outside. 
      service.getItems = function () {
        return items;
      };
    }
    
    })();