//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

//console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

//console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//stack (premitive) , heap(non premitive)=> tehy gives origanl file

let fname = "AD"
let sname = fname
//console.log(sname);

sname = "DB"
console.log(sname); //stack gives only copy of the value
console.log(fname);

let test = {
    email: "Anu@gmail.com",
    upi : "Anu@ybl"
}


let test2 = test
console.log(test);//{ email: 'Anu@gmail.com', upi: 'Anu@ybl' }
console.log(test2);//{ email: 'Anu@gmail.com', upi: 'Anu@ybl' }


test2.email = "ajya@gmail.com"
console.log(test);//{ email: 'ajya@gmail.com', upi: 'Anu@ybl' }
console.log(test2);//{ email: 'ajya@gmail.com', upi: 'Anu@ybl' }