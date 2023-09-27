(function () {
    'use strict';
    
    angular.module('ShoppingList', ['Spinner']); 
    //this means that shoppinglist modules depends on the spinner modules
    
    angular.module('ShoppingList')
    .config(function () {
      console.log("ShoppingList config fired.");
    })
    .run(function () {
      console.log("ShoppingList run fired.");
    });
    
    })();