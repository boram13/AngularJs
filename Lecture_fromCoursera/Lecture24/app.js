(function () {
    'use strict';
    
    angular.module('ShoppingListPromiseApp', [])
    //caller and controller
    .controller('ShoppingListController', ShoppingListController)
    .service('ShoppingListService', ShoppingListService)
    .service('WeightLossFilterService', WeightLossFilterService);
    
    ShoppingListController.$inject = ['ShoppingListService'];
    function ShoppingListController(ShoppingListService) {
      var list = this;
    
      list.items = ShoppingListService.getItems();
    
      list.itemName = "";
      list.itemQuantity = "";
    
      list.addItem = function () {
        ShoppingListService.addItem(list.itemName, list.itemQuantity);
      };
    
      list.removeItem = function (itemIndex) {
        ShoppingListService.removeItem(itemIndex);
      };
    }
    
    //weightLossFilterService is a filter as an argument inside inject
    ShoppingListService.$inject = ['$q', 'WeightLossFilterService'];
    function ShoppingListService($q, WeightLossFilterService) {
      var service = this;
    
      // List of shopping items
      var items = [];
    
      // service.addItem = function (name, quantity) {
         //asynchronyze behaviour, we callback the function to identify
      //   var promise = WeightLossFilterService.checkName(name);
      //
      //   promise.then(function (response) {
        //callback again
      //     var nextPromise = WeightLossFilterService.checkQuantity(quantity);
      //
      //     nextPromise.then(function (result) {
      //       var item = {
      //         name: name,
      //         quantity: quantity
      //       };
      //       items.push(item);
      //     }, function (errorResponse) {
      //       console.log(errorResponse.message);
      //     });
      //   }, function (errorResponse) {
      //     console.log(errorResponse.message);
      //   });
      // };
    
    ////this is more easier code 
      // service.addItem = function (name, quantity) {
      //   var promise = WeightLossFilterService.checkName(name);
      //
      //   promise
      //   .then(function (response) {
      //     return WeightLossFilterService.checkQuantity(quantity);
      //   })
      //   .then(function (response) {
      //     var item = {
      //       name: name,
      //       quantity: quantity
      //     };
      //     items.push(item);
      //   })//is executed when reject is envoked
      //   .catch(function (errorResponse) {
      //     console.log(errorResponse.message);
      //   });
      // };
    
      //this makes the two things in paralel, capture the item and the quantity
      service.addItem = function (name, quantity) {
        var namePromise = WeightLossFilterService.checkName(name);
        var quantityPromise = WeightLossFilterService.checkQuantity(quantity);
      //with the $q.all we are able to execute multiple promises
        $q.all([namePromise, quantityPromise]).
        then(function (response) {
          var item = {
            name: name,
            quantity: quantity
          };
          items.push(item);
        })
        .catch(function (errorResponse) {
          console.log(errorResponse.message);
        });
      };
    
      service.removeItem = function (itemIndex) {
        items.splice(itemIndex, 1);
      };
    
      service.getItems = function () {
        return items;
      };
    }
    
    
    WeightLossFilterService.$inject = ['$q', '$timeout'];
    function WeightLossFilterService($q, $timeout) {
      var service = this;

    //the checkName method first acquires our deferred objectedthat contains the
    //environment for th eentire asynchronize behaviour and sets up this result with a msg
      service.checkName = function (name) {
        var deferred = $q.defer();
    
        var result = {
          message: ""
        };
        //will simulate our asynchronyze behaviour
        $timeout(function () {
          // Check for cookies
          if (name.toLowerCase().indexOf('cookie') === -1) {
            deferred.resolve(result)
          }
          else {
            result.message = "Stay away from cookies, Yaakov!";
            deferred.reject(result);
          }
        }, 3000);
        //this tells us if there is going to be an resolution or a reject message
        return deferred.promise;
      };
    
    
      service.checkQuantity = function (quantity) {
        var deferred = $q.defer();
        var result = {
          message: ""
        };
    
        $timeout(function () {
          // Check for too many boxes
          if (quantity < 6) {
            deferred.resolve(result);
          }
          else {
            result.message = "That's too much, Yaakov!";
            deferred.reject(result);
          }
        }, 1000);
    
        return deferred.promise;
      };
    }
    
    })();