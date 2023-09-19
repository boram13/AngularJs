//ana array which condoles elements
var numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Number array: ", numberArray);

function above5Filter(value) {
  return value > 5;
}
//create first filter
var filteredNumberArray = numberArray.filter(above5Filter);
//calls filteredNumberArray
console.log("Filtered number array: ", filteredNumberArray);

var shoppingList = [
  "Milk", "Donuts", "Cookies", "Chocolate", "Peanut Butter", "Pepto Bismol", "Pepto Bismol (Chocolate flavor)", "Pepto Bismol (Cookie flavor)"
];
console.log("Shopping List: ", shoppingList);

var searchValue = "Bismol";
function containsFilter(value) {
  //search element based on dhe index inside the arrsy
  return value.indexOf(searchValue) !== -1;
}
//here we invoke the filter function , we call it by tsking his value
var searchedShoppingList = shoppingList.filter(containsFilter);
console.log("Searched Shopping List: ", searchedShoppingList);