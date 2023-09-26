(function () {
    'use strict';
    //we will use dom manipulation to print an error if there is cookies
    //not ngif, then will upgrade to jquery and use an animation effect
    angular.module('ShoppingListDirectiveApp', [])
    .controller('ShoppingListController', ShoppingListController)
    .factory('ShoppingListFactory', ShoppingListFactory)
    .directive('shoppingList', ShoppingListDirective);
    
    
    function ShoppingListDirective() {
      var ddo = {
        templateUrl: 'shoppingList.html',
        scope: {
          items: '<',
          myTitle: '@title',
          onRemove: '&'
        },
        controller: ShoppingListDirectiveController,
        controllerAs: 'list',
        bindToController: true,
        //here we will declare the link function 
        link: ShoppingListDirectiveLink
      };
    
      return ddo;
    }
    
    // here we will define the link
    function ShoppingListDirectiveLink(scope, element, attrs, controller) {
      //here we will log in to the  console
      console.log("Link scope is: ", scope);
      console.log("Controller instance is: ", controller);
      console.log("Element is: ", element);
    
      //here we want to create a watch and display a cookie warning 
      scope.$watch('list.cookiesInList()', function (newValue, oldValue) {
        console.log("Old value: ", oldValue);
        console.log("New value: ", newValue);
    
        if (newValue === true) {
          displayCookieWarning();
        }
        else {
          removeCookieWarning();
        }
    
      });
    
      //then we need to define the function to display the cookie warning, we 
      //will write them inside the link function to have accesss in elements
      function displayCookieWarning() {
        // Using Angluar jqLite
        // var warningElem = element.find("div");
        // console.log(warningElem);
        // warningElem.css('display', 'block');
    
        // If jQuery included before Angluar
        var warningElem = element.find("div.error");
        warningElem.slideDown(900);
      }
    
    //here we need to define  thefunction remove cookie warnin 
      function removeCookieWarning() {
        // Using Angluar jqLite
        // var warningElem = element.find("div");
        // warningElem.css('display', 'none');
    
        // If jQuery included before Angluar
        var warningElem = element.find("div.error");
        warningElem.slideUp(900);
      }
    }
    
    
    function ShoppingListDirectiveController() {
      var list = this;
    
      list.cookiesInList = function () {
        for (var i = 0; i < list.items.length; i++) {
          var name = list.items[i].name;
          if (name.toLowerCase().indexOf("cookie") !== -1) {
            return true;
          }
        }
    
        return false;
      };
    }
    
    
    ShoppingListController.$inject = ['ShoppingListFactory'];
    function ShoppingListController(ShoppingListFactory) {
      var viewList = this;
    
      // Use factory to create new shopping list service
      var shoppingList = ShoppingListFactory();
    
      viewList.items = shoppingList.getItems();
      var origTitle = "Shopping List #1";
      viewList.title = origTitle + " (" + viewList.items.length + " items )";
    
      viewList.itemName = "";
      viewList.itemQuantity = "";
    
      viewList.addItem = function () {
        shoppingList.addItem(viewList.itemName, viewList.itemQuantity);
        viewList.title = origTitle + " (" + viewList.items.length + " items )";
      };
    
      viewList.removeItem = function (itemIndex) {
        console.log("'this' is: ", this);
        this.lastRemoved = "Last item removed was " + this.items[itemIndex].name;
        shoppingList.removeItem(itemIndex);
        this.title = origTitle + " (" + viewList.items.length + " items )";
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