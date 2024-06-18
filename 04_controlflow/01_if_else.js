/// if else statment


// const userloggrdIn = true

// if (userloggrdIn == true) {
//      console.log("user is logged.......");

// }
// else{
//     console.log("user is not login.......");
// }

// const temp = 30

// if (temp <= 35) {
//     console.log("temperature less than 35");
    
// } else {
//     console.log("temperature more than 35");
// }


// console.log("Execute");
// <, >, <=, >=, ==, !=, ===, !==


const score = 200

if (score > 100) {
    let power = "fly"
    // console.log(`score ${score} and power is ${power}`);
    
}
// console.log(`score ${score} and power is ${power}`);



const  balance = 650

// if (balance > 200) console.log("balance is more than 300"),console.log("balance is less than 300"); //this method is not use in MNC company


// if (balance < 100) {
//     console.log("balance is less than 100");
    
// } else if (balance < 200) {
//     console.log("balance is less than 200");
    
// } else if (balance < 500) {
//     console.log("balance is less than 500");
    
// }else{
//     console.log("balance is less than 700");  // nested if else statment
    
// }

const userloggedin = true
const debitcard = true
const loginfromgoogle = true
const loginfromemail = false

if (userloggedin && debitcard) {
    // console.log("user can loggin now.....");
}

if (userloggedin||loginfromemail) {
    console.log("user could not login.......");
}