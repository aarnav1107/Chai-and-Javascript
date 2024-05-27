const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

const chai =  () => {
    let username = "hitesh"
    console.log(this);
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()

let arr= [1,2,3,4,5,6,7,8,9,10]

//write for loop
for(let i=0; i<arr.length; i++){
    console.log(arr[i])

}
//write same code using while loop
let i=0
while(i<arr.length){
    console.log(arr[i])
    i++
}
//print table from 1 to 5
for(let i=1; i<=5; i++){
    for(let j=1; j<=10; j++){
        // console.log([i],"*",[j],"=" ,i*j)
        console.log(`${i} * ${j} = ${i*j}`);
        
    }
}