(function () {
  //only declares and creates the modules 
    'use strict';
    
    angular.module('Spinner', []);
    
    //declare the config and run blocks
    angular.module('Spinner')
    .config(function () {
      console.log("Spinner config fired.");
    }).
    run(function () {
      console.log("Spinner run fired.");
    });
    
    })();