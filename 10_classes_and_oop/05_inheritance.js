class user{
    constructor(username){
        this.username=username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}
class client extends user{
    constructor(username,email,city){
       super(username)
        this.email=email
        this.city=city
    }
    addCourse(){
        console.log(`A new course added by${this.username}`);    
    }
}
const result = new client("Ajya","ajya@gmail.com","pune")

result.logMe()

const result2= new user("kk")

// result2.addCourse()

console.log(result2 instanceof client);