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


