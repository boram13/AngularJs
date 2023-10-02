//this is a function , which gives an array and tells whether or not 
//a cookie is part of one of those items or not 




// Verison 1/ pulls out the items tat are available in the array 
// function detectCookie(items) {
//   for (var i = 0; i < items.length; i++) {
//     var item = items[i];
//     if (item.indexOf("cookie") !== -1) {
//       return true;
//     }
//
//     return false;
//   }
//
// }


// Version 2
// function detectCookie(items) {
//   for (var i = 0; i < items.length; i++) {
//     var item = items[i];
//     if (item.indexOf("cookie") !== -1) {
//       return true;
//     }
//   }
//
//   return false;
// }


// Version 3/sometimes the code doesnt function because  the case sensitive 
//so before we compare any element, we should first turn it to lower case
function detectCookie(items) {
  for (var i = 0; i < items.length; i++) {
    var item = items[i];
    if (item.toLowerCase().indexOf("cookie") !== -1) {
      return true;
    }
  }

  return false;
}
