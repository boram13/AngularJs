function Person() {
    this.fullName = "Yaakov";
    this.fav = "Cookies";
  // here we have one method which makes the loging to the console
    this.describe = function () {
      console.log('this is: ', this);
      console.log(this.fullName + " likes " + this.fav);
    };
  }
  //here we create an obect with the person called,this will be pointing to the person object
  var yaakov = new Person();
  yaakov.describe();
  
  var describe = yaakov.describe;
  describe();
  //call is a method that gives contex to this variable., in this case describe
  describe.call(yaakov);