class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher("chai", "chai@teacher.com", "123")

chai.logMe()
chai.addCourse()
const masalaChai = new User("masalaChai")

masalaChai.logMe()

console.log(chai instanceof Teacher);//true
console.log(chai instanceof User);//true
console.log(masalaChai instanceof User)//true
console.log(masalaChai instanceof Teacher);//false
//console.log(masalaChai instanceof logMe);// logMe is not a class or not defined
//console.log(masalaChai instanceof chai);//error
//console.log(chai instanceof masalaChai);//error



//Now use of STATIC keyword
// class User {
//     constructor(username){
//         this.username = username
//     }

//     logMe(){
//         console.log(`Username: ${this.username}`);
//     }

//     static createId(){
//         return `123`
//     }
// }

// const hitesh = new User("hitesh")
// // console.log(hitesh.createId())

// class Teacher extends User {
//     constructor(username, email){
//         super(username)
//         this.email = email
//     }
// }

// const iphone = new Teacher("iphone", "i@phone.com")
// //console.log(iphone.createId());
// console.log(User.createId());// 123
// console.log(Teacher.createId());// 123
// //console.log(hitesh.createId()); // error
// console.log(hitesh.logMe());//
// console.log(iphone.logMe());
