(function () {
  'use strict';
  
  angular.module('MenuCategoriesApp', [])
  .controller('MenuCategoriesController', MenuCategoriesController)
  .service('MenuCategoriesService', MenuCategoriesService)
  .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");
  
  
  MenuCategoriesController.$inject = ['MenuCategoriesService', '$scope'];
  function MenuCategoriesController(MenuCategoriesService, $scope) {
    var menu = this;
  
    var promise = MenuCategoriesService.getMenuCategories();
  
    promise.then(function (response) {
      menu.categories = response.data
      $scope.$apply()
    })
    .catch(function (error) {
      console.log("Something went terribly wrong.");
    });
  
    menu.logMenuItems = function (shortName) {
      var promise = MenuCategoriesService.getMenuForCategory(shortName);
  
      promise.then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
    };
  
  }
  
  
  MenuCategoriesService.$inject = ['$http', 'ApiBasePath'];
  function MenuCategoriesService($http, ApiBasePath) {
    var service = this;
  
    service.getMenuCategories = function () {
      // var response = $http({
      //   method: "GET",
      //   url: (ApiBasePath + "/categories.json")
      // });
  
      // return response;
      return Promise.resolve({ data: [
        {
          short_name: 'T1',
          name: 'test1'
        },
        {
          short_name: 'T2',
          name: 'test'
        },
        {
          short_name: 'T3',
          name: 'test3'
        },
        {
          short_name: 'T4',
          name: 'test4'
        },
      ]})
    };
  
  
    service.getMenuForCategory = function (shortName) {
      // var response = $http({
      //   method: "GET",
      //   url: (ApiBasePath + "/menu_items.json"),
      //   params: {
      //     category: shortName
      //   }
      // });
  
      // return response;
      return Promise.resolve({ data: {
          category: {
            short_name: 'test1',
            name: 'T1'
          },
          menu_items: [
            {
              short_name: 'T1',
              name: 'test1'
            },
            {
              short_name: 'T2',
              name: 'test'
            },
            {
              short_name: 'T3',
              name: 'test3'
            },
            {
              short_name: 'T4',
              name: 'test4'
            },
          ]
        }
      })
    };
  
  }
  
  })();