const myObject = {
    game1: 'NFS',   //for in loop not work fir string & array 
    game2: 'Spiderman'
}

for (const num in myObject) {
    console.log(num + " " +  myObject[num]); //num is key and myObject[num] is value
//     console.log(myObject[num])
 }

// for in loop in array does not work
const myArray = ["hitesh", "sam", "john"]
for (const num in myArray) {
    console.log(num + " " +  myArray[num]);
    
}


// for each loop

const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){
//     console.log(val);
// } )

// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

coding.forEach( (item, index, array)=> {
    console.log(item, index, array);
} )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )


// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")
for(const [key,value]  in map){
    console.log(key, value);
}
