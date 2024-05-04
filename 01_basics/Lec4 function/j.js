// function addTwoNumbers(nu , num){

//     // let result = number1 
//     // return number1 + number2
//     // return number1 + number2
//     console.log(nu + num);
// }

// // const result = addTwoNumbers()

// // console.log("Result: ", result);
// addTwoNumbers();


// function name(fn,fm)
// {
//     console.log(fn, fm);
//     // console.log(fm);
// }
// name();

function addTwoNumbers(number1,number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

// const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);
console.log(addTwoNumbers()); 

function mname(fn,fm)
{
    console.log(fn, fm);
    // console.log(fm);
    // return fn ;
}
mname();



function loginUserMessage(username ){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage())


// const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[2]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));


function calculateCartPrice( ...num1){
    return num1
}

console.log(calculateCartPrice('a', 'v' ,3 ,5))
