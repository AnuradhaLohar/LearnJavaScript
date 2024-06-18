//falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}


// const userid = " "

// if (userid) {
//     console.log("user id is valid....");
// } else {
//     console.log("user id is invalid....");
// }


// const myarray = []

// if (myarray.length == 0) {
//     console.log("Array is empty....");
// } else {
//     console.log("Array is full....");
// }

//************************************************************************** */

// const myobj = {}

// if (Object.keys(myobj).length == 0) {
//     console.log("object is empty...");
// }
// else{
//     console.log("object is full...");
// }


// console.log(Object.keys(myobj).length);



//************************************************************************** */


// Nullish Coalescing Operator (??): null undefined

// let val1;
// val1 = 5 ?? 10
// val2 = null??10??20
// val3 = undefined??20??30

// console.log(val1);
// console.log(val2);
// console.log(val3);

// Terniary Operator

// condition ? true : false

let num1 = 30
num1 < 20 ? console.log(`${num1} is less than 20`) : console.log(`${num1} is grater than 20`);
