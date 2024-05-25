

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
// users.forEach((user) => {
//     console.log(user.name);
// })
//check if user exists with such name
users.forEach((user) => {
    if (user.name === 'abc') {
        console.log('user found');
    }
})
//use map if user exists with such name
const userNames = users.map((user) => {
    if (user.name === 'abc') {
        return user.name;
    }
}); 
console.log(userNames);

//by map
const userNames1 = users.map((user) => {
    return user.name==='abc';
});
console.log(userNames1);

//use filter if user exists with such name
const activeUsers = users.filter((user) => {
    return user.name === 'abc';
});
console.log(activeUsers);
//use filter to find name
const activeUsersName = users.filter((user) => {
    return user.name === 'abc';
}).map((user) => {
    return user.name;
});
console.log(activeUsersName);
//usning for each loop
//activeUsers.forEach((user) => {
    users.forEach((user) => {
    if (user.name === 'abc') {
        console.log(user.name);
    }
})
//in other way using for each
users.forEach((user) => {
    if (user.name === 'abc') {
        console.log(user.name);
    }
})

    


//by find method
const result = users.find((user) =>{
    return user.name === 'abc';
    });
console.log(result);

//by find method
const result1 = users.find((user) =>{
    return user.name === 'xyz';
    });
console.log(result1);
//by filter method
const result2 = users.filter((user) =>{
    return user.name === 'xyz';
    });
console.log(result2);



