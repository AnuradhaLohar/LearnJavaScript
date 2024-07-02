// class user{
//     constructor(username,email,password){
//         this.username=username
//         this.email=email
//         this.password=password
//     }
//     encrptpass(){
//         return`${this.password}abc`
//     }

//     chnageusername(){
//         return`${this.username.toUpperCase()}`
//     }
// }

// const result = new user("ajya","ajya@gmail.com","123")

// console.log(result.encrptpass());
// console.log(result.chnageusername());


// behind the scene******************************************************************************************


function user(username,email,password){
    this.username=username
    this.email=email
    this.password=password

    user.prototype.encrptpass=function(){
    return`${this.password}abc`
    }   

    user.prototype.chnageusername=function(){
    return`${this.username.toUpperCase()}`
    }
}
    
       
const result = new user("ajya","ajya@gmail.com","123")

console.log(result.encrptpass());
console.log(result.chnageusername());

