class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this.eemail.toUpperCase()
    }
    set email(value){
         this.eemail = value
    }

    get fetchPassword(){
        return `${this.password.toUpperCase()}hitesh`
    }

    set modifyPassword(value){
        this.password = value
    }
}

const hitesh = new User("h@hitesh.ai", "abc")
console.log(hitesh.email);
console.log(hitesh.password);
console.log(hitesh.fetchPassword);