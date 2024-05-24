function email(to, subject, message) {
    return `${to} ${subject} ${message}`;
}
console.log(email(1,2,3));//it will give function

function add(a, b, c) {
    //return `${a + b + c`;
   // return  `${a + b + c}`;
    //return `${a} ${b} ${c}`;
    return `${a} ${b} ${c}`;
}

console.log(add(1, 2, 3));//it will give 1 2 3
//make this using currying
function email(to) {    
    return function(subject) {
        return function(message) {
           //return `${to} ${subject} ${message}`;
           console.log(`${to} ${subject} ${message}`);
        }
    }
}


const emailTo = email('aaa');
const emailToSubject = emailTo('bbb');
const emailToSubjectMessage = emailToSubject('ccc');
 console.log(emailToSubjectMessage);
//email('aaa')('bbb')('ccc');
//console.log(email('aaa')('bbb')('ccc'));//it will give aaa bbb ccc
//console.log(email('aaa', 'bbb', 'ccc'));//it will give function 
