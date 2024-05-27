for(var i=0; i<6; i++){
    setTimeout(function(){
        console.log(i);
    }, 1000)
}
// use let instead of var

for(let i=0; i<6; i++){
    setTimeout(function(){
        console.log(i);
    }, 1000)
}
// use IIFE
for(var i=0; i<6; i++){
    (function(i){
        setTimeout(function(){
            console.log(i);
        }, 1000)
    })(i)
}

myFun();

var myFun=function(){
    console.log('Hello');
}
myFun();
// function declaration hoisted
function myFun(){
    console.log('Hello22');
}
myFun();

// Path: Lec34%20Piy%20IntwQ/s.js
var variable=10;
(() => {
    console.log(variable);
    var variable=20;
    console.log(variable);
})();
console.log(variable);
var variable=30;


// without IIFE
var variable = 10;

function test() {
    console.log(variable);
    var variable = 20;
    console.log(variable);
}

test();

console.log(variable);

var variable = 30;
