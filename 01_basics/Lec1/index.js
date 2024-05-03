
console.log("benstokes");
console.log(Math.round(2.5));

//splice and slice example
// const numbers = [0,1, 2, 3, 4, 5];
// const z=numbers.splice(1, 3);
// console.log(z);
// console.log(numbers);

// const numbers1 = [1, 2, 3, 4, 5];
// const numbers2 = numbers1.slice(1, 4);
// console.log(numbers2);
// console.log(numbers1);



const numbers = [1, 2, 3, 4, 5];
console.log(numbers.splice(1, 3, 6, 7));
console.log('a', numbers);


//concat example
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = arr1+arr2;
console.log(arr3);
