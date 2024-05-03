
//object literal
const user={
    name:'Asif',
    age:22,
    'full name':'Asif Ahmed'
    
}
console.log(user);
console.log(user.age);
console.log(user['name']);
console.log(user['full name']);
//hitesh

// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}
JsUser.greeting();//

console.log();

// console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());



const user1={
    name:'assss',
    age:22,

}
console.log(user);
console.log(user.age);
console.log(user['name']);
const Sym=Symbol('key1');