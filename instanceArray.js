/*
  Your 3 Users will be the following. 
    0) Tyler, tylermcginnis33@gmail.com, 'iLoveJS'
    1) Cahlan, cahlan@devmounta.in, 'iLoveHashtags'
    2) Lenny, lenny@theLenster.com, 'iLoveLentilSoup'
*/

var User = function(name, email, pw){
  this.name = name;
  this.email = email;
  this.pw = pw;
}

//Create an Array called 'users' that will store all our instances of User.

  //code here
var users = [];

//Now create and push into your users array 3 separate instances of User using the data from above in that exact order

  //code here
users.push(new User("Tyler", "tylermcginnis33@gmail.com", "iLoveJS"), 
new User("Cahlan", "cahlan@devmounta.in", "iLoveHashtags"), 
new User("Lenny", "lenny@theLenster.com", "iLoveLentilSoup"));
//var user1 = new User("Tyler", "tylermcginnis33@gmail.com", "iLoveJS");
//var user2 = new User("Cahlan", "cahlan@devmounta.in", "iLoveHashtags");
//var user3 = new User("Lenny", )
console.log('Tyler\'s information is ' + users[0].name + ", " + users[0].email + ", " + users[0].pw);
//Console.log all of Tylers information

  //code here

console.log('Lenny\'s information is ' + users[2].name + ", " + users[2].email + ", " + users[2].pw);
//Now console.log all of Lennys information

  //code here


//Now create another instance of User using your own information and then add that to your users array.

  //code here
users.push(new User("Stephen", "stubie@wazzlup.com", "heyo!"));
console.log('All my users names are ' + users[0].name + ", " + users[1].name + ", " + users[2].name + ", " + users[3].name);
//Now loop through your users Array and console.log every users name. 

  //code here
for(var i = 0; i < users.length; i++) {
  console.log(users[i].name);
}