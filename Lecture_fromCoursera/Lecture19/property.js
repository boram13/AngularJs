// //*Prototypal inheritance,declaring the parent object
//  let parent = {
//    value: "parentValue",
//    obj: {
//      objValue: "parentObjValue"
//    },
// //* walk method
//    walk: function () {
//      console.log("walking!");
//    }
//  };
// //*child object which will have prototypal inheritance from parent object

//  let child = Object.create(parent);
//  console.log("CHILD - child.value: ", child.value);
//  console.log("CHILD - child.obj.objValue: ", child.obj.objValue);
//  console.log("PARENT - parent.value: ", parent.value);
//  console.log("PARENT - parent.obj.objValue: ", parent.obj.objValue);
//  console.log("parent: ", parent);
//  console.log("child: ", child);

// //'re going to do now is, we're actually going to declare our own value 
// //property on the child object and we'll call it childValue.
// //
//  child.value = "childValue";
//  child.obj.objValue = "childObjValue";

//  //declared that we changed staffs
//  console.log("*** CHANGED: child.value = 'childValue'");
 
//  // obj property requires the JavaScript engine to walk up the prototype 
//  // chain and look it up on the parent object
//  console.log("*** CHANGED: child.obj.objValue = 'childObjValue'");
//  console.log("CHILD - child.value: ", child.value);
//  console.log("CHILD - child.obj.objValue: ", child.obj.objValue);
 
//  //we are masking the value of child, but will not affect the parent
//  console.log("PARENT - parent.value: ", parent.value);
//  console.log("PARENT - parent.obj.objValue: ", parent.obj.objValue);
//  console.log("parent: ", parent);
//  console.log("child: ", child);
// //
// // verify that the child obj is actually equal to the parent obj 
// console.log("child.obj === parent.obj ? ", child.obj === parent.obj);
// //
// //  create another chlid, chained by child
//  var grandChild = Object.create(child);
// console.log("Grandchild: ", grandChild);
// grandChild.walk();

// // ** Function constructors
// // See my other course: HTML, CSS, and Javascript for Web Developers
// // Lecture #48
// // we use the functions as a constructor for an object
// function Dog(name) {
//   this.name = name;
//   console.log("'this' is: ", this);
// }

// var myDog = new Dog("Max");
// console.log("myDog: ", myDog);

// // Not being used as a function constructor
// Dog("Max2");