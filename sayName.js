//Create a Person constructor that accepts name and age as parameters and sets those properties accordingly in the Constructor.

  //code here
function Person(name, age) {
  this.name = name;
  this.age = age;
}

//Now create three instances of Person with data you make up

  //code here
var pers1 = new Person("Lou", 47);
var pers2 = new Person("Jess", 23);
var pers3 = new Person("Timmy", 26);

//Now add a sayName method on your Person class that will alert the name of whatever Person instance called it.

  //code here
Person.prototype.sayName = function() {
  alert(this.name);
}