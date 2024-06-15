//object literals//

const mysymbol = Symbol("key1")


const JSuser = {
        name:" Anu",
        "full Name" : "Anu Lohar",
        age : 23,
        email : "Anu12@gmail.com",
        location : "Kolhapur",
        isLoggedIn : false,
        LastLoginDay : ["Monday","Sunday"],
        [mysymbol] : "key1"
}

// console.log(JSuser.email);
// console.log(JSuser["email"]);
// console.log(JSuser["full Name"]);
// console.log(JSuser[mysymbol]);

// JSuser.email="anu@goggle.com"
// Object.freeze(JSuser)
// console.log(JSuser);

// JSuser.email="anny@goggle.com"
// console.log(JSuser);

JSuser.grreting = function (){

  console.log("hello Ajya dukkara");

}
JSuser.grreting2 = function(){
    
    console.log(`hello ajya,${this.name}`);
}

console.log(JSuser.grreting);
console.log(JSuser.grreting2);