// const coding = ["js", "ruby", "java", "python", "cpp"]


// const values = coding.forEach( (item) => {
//     //console.log(item);
//     return item
// } )

// console.log(values);

const myNms = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNms = myNms.filter( (num) => {
 return num > 4
} )
console.log(newNms);
//how to retun object in arrow function
// const addTwo = ((num1, num2) => {
//     return num1 + num2







// const newNums = []

// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// } )

// console.log(newNums);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (bk) => {
    return bk.genre === 'History'

  })
   

//   userBooks = books.filter( (bk) => { 
//     return bk.publish >= 1995 && bk.genre === "History"
// })
  console.log(userBooks);


  const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNumers.map( (num) =>
     { return num + 10

     })
console.log(newNums);

//using for each
const newNums1 = []
myNumers.forEach( (num) => {
    newNums1.push(num + 10)
})
console.log(newNums1);


//REDUCE METHOD
const myNums = [1, 2, 3]

//BT NORMAL FUNCTION

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)
//console.log(myTotal);

//BY ARROW FUNCTION
const myTotal = myNums.reduce((acc, currval) => {
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc + currval
}, 100)
console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

// 

// write using arrow function using return
const priceToPay = shoppingCart.reduce((acc, item) => {
    return acc + item.price
}, 0)

console.log(priceToPay);

// const priceToPay = shoppingCart.reduce((acc, item) =>
// 
// console.log(priceToPay);
