(function () {
    'use strict';
    
    angular.module('ControllerAsApp', [])
    .controller('ShoppingListController1', ShoppingListController1)
    .controller('ShoppingListController2', ShoppingListController2)
    //factory declaration
    .factory('ShoppingListFactory', ShoppingListFactory);
    //we will create two separate controllesrs, responsive for two lists
    // LIST #1 - controller
    ShoppingListController1.$inject = ['ShoppingListFactory'];//here we inject our shopping list
    function ShoppingListController1(ShoppingListFactory) {
      var list1 = this;
    
      // Use factory to create new shopping list service
      //we create an variable that is an instance of our shopping list
      var shoppingList = ShoppingListFactory();
    
      list1.items = shoppingList.getItems();
    
      list1.itemName = "";
      list1.itemQuantity = "";
    
      list1.addItem = function () {
        shoppingList.addItem(list1.itemName, list1.itemQuantity);
      }
    
      list1.removeItem = function (itemIndex) {
        shoppingList.removeItem(itemIndex);
      };
    }
    
    
    // LIST #2 - controller
    ShoppingListController2.$inject = ['ShoppingListFactory'];
    function ShoppingListController2(ShoppingListFactory) {
      var list2 = this;
    
      // Use factory to create new shopping list service
      var shoppingList = ShoppingListFactory(3)//here we pas the max number of items
    
      list2.items = shoppingList.getItems();
    
      list2.itemName = "";
      list2.itemQuantity = "";
    
      list2.addItem = function () {
        try {
          shoppingList.addItem(list2.itemName, list2.itemQuantity);
        } catch (error) {
          list2.errorMessage = error.message;
        }
    
      }
    
      list2.removeItem = function (itemIndex) {
        shoppingList.removeItem(itemIndex);
      };
    }
    
    
    // If not specified, maxItems assumed unlimited, function that limits the list
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
        else {
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
    
    
    function ShoppingListFactory() {
      var factory = function (maxItems) {
        return new ShoppingListService(maxItems);
      };
    
      return factory;
    }
    
    })();