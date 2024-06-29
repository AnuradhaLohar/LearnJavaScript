// const user = {
//     username: "anu",
//     logginCount: 12,
//     signedIn: "true",

//     getdetails : function(){
//         //console.log(this);
//     }
// }
// console.log(user.username);
// console.log(user.logginCount);
// console.log(user.getdetails());

// console.log(this);                 //this pointer works hole node


function user(userName, logginCount,isLoggedIn){
    this.userName = userName
    this.logginCount = logginCount
    this.isLoggedIn = isLoggedIn

    setdetails = function(){
        console.log(`welcome${this.userName}`);
    }
return this
}
const userOne = new user("anu",12,true)
const userTwo = new user("ana",122,false)

console.log(userOne.constructor);
console.log(userTwo);
