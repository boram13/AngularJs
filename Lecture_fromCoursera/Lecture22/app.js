(function () {
    'use strict';
    
    angular.module('ShoppingListApp', [])
    .controller('ShoppingListController', ShoppingListController)
    .provider('ShoppingListService', ShoppingListServiceProvider)
    .config(Config);
   
    //defining our inject array, which is going to have shopinglistservuce followed by word Provider
    Config.$inject = ['ShoppingListServiceProvider'];
    function Config(ShoppingListServiceProvider) {
      // Save Yaakov from himself
      ShoppingListServiceProvider.defaults.maxItems = 2;
    }
    
    
    ShoppingListController.$inject = ['ShoppingListService'];
    function ShoppingListController(ShoppingListService) {
      var list = this;
    
      list.items = ShoppingListService.getItems();
    
      list.itemName = "";
      list.itemQuantity = "";
    
      list.addItem = function () {
        try {
          //making sure we are not exceeding the number of items
          ShoppingListService.addItem(list.itemName, list.itemQuantity);
        } catch (error) {
          list.errorMessage = error.message;
        }
      };
    
      list.removeItem = function (itemIndex) {
        ShoppingListService.removeItem(itemIndex);
      };
    }
    
    
    // If not specified, maxItems assumed unlimited
    function ShoppingListService(maxItems) {
      var service = this;
    
      // List of shopping items
      var items = [];
    
      service.addItem = function (itemName, quantity) {
        if ((maxItems === undefined) ||
            (maxItems !== undefined) && (items.length < maxItems)) {
          var item = {
            name: itemName,
            quantity: quantity
          };
          items.push(item);
        }
        else {//exception
          throw new Error("Max items (" + maxItems + ") reached.");
        }
      };
    
      service.removeItem = function (itemIndex) {
        items.splice(itemIndex, 1);
      };
    
      service.getItems = function () {
        return items;
      };
    }
    
    
    function ShoppingListServiceProvider() {
    //this keyword to local variable called provider
      var provider = this;
    
      //we have created an default object
      provider.defaults = {
        maxItems: 10
      };
    //get property to the instance of our ShoppingListServiceProvider
      provider.$get = function () {
        var shoppingList = new ShoppingListService(provider.defaults.maxItems);
    
        return shoppingList;
      };
    }
    
    })();