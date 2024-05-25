

const users=[
    {
        id:1,
        name:'abc',
        age:25,
        Active:true,
    },
    {
        id:2,
        name:'xyz',
        age:30,
        Active:false,
    },
    {
        id:3,
        name:'pqr',
        age:35,
        Active:true,
    },
    {
        id:4,
        name:'lmn',
        age:42,
        Active:false,
    },

]
users.forEach((user) => {
    console.log(user.name);
})
//use for loop
for (let i = 0; i < users.length; i++) {
    console.log(users[i].name);
}
//use map
const userNames = users.map((user) => user.name);
console.log(userNames);
//use filter
const activeUsers = users.filter((user) => user.Active === true);
console.log(activeUsers);
//map
const activeUsers1 = users.map((user) => user.Active === true)
console.log(activeUsers1);
//use filter to find name
const activeUsersName = users.filter((user) => user.Active === true).map((user) => user.name);
console.log(activeUsersName);
//usning for each loop
activeUsers.forEach((user) => {
   // users.forEach((user) => {
    if (user.Active === true) {
        console.log(user.name);
    }
})
//in other way using for each
users.forEach((user) => {
    if (user.Active === true) {
        console.log(user.name);
    }
})


//use fliter to find user name
const user = users.filter((user) => user.name === 'abc');
console.log(user);

//use filter to find user name and age
const user1 = users.filter((user) => user.name === 'abc').map((user) => user.age);
console.log(user1);

const user2 = users.filter((user) => user.name === 'abc').map((user) => user.Active);
console.log(user2);

const user3 = users.filter((user) => user.name );
console.log(user3);

//sort in ascending order
users.sort((a, b) => a.age - b.age);
console.log(users);
//sort in descending order
const user5 = users.sort((a, b) => b.age - a.age);
console.log(user5);
//sort in descending order
const user6 = users.sort((a, b) => b.age - a.age).map((user) => user.name);
console.log(user6);