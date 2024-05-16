const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }

}
console.log(user.username);
console.log(user.getUserDetails());

user.getUserDetails();




//constructor function example
class Person { // class
    constructor(name, age) { // constructor
      this.name = name;
      this.age = age;
    }
  
    greet() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
  }
  
  const person1 = new Person('John', 30);
  person1.greet(); // Output: Hello, my name is John and I am 30 years old.
console.log(person1.greet());  

//console.log(user.username)
//console.log(user.getUserDetails());
// console.log(this);


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this
}

const userOne = new User("hitesh", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne.username);
console.log(userTwo.username);




function createUser(username, score){
    this.username = username
    this.score = score
}

// createUser.prototype.increment = function(){
//     this.score++
// }
createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
}

const chai = new createUser("chai", 25)
const tea = new createUser("tea", 250)
console.log(chai);
console.log(tea);

chai.printMe()
