class user{
    constructor(email,password){
        this.email=email,
        this.password=password
    }

    get email(){
        return this._email.toUpperCase();
    }
    set email(value){
         this._email=value
    }

    get password(){
        return `${this._password}Anu`
    }
    
    set password(value){
        this._password=value
    }
}
const result= new user("anu@.com","12345")
// console.log(result.email);
console.log(result.password);