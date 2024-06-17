const user = {
    username: "Anu",
    price : 122,

    welcomemsg: function(){
        // console.log(`${this.username}, welcome to website`);
        // console.log(this);
    }
}
// user.welcomemsg()
// user.username = "swala"
// user.welcomemsg()
// console.log(this);

// ---------------------------------------------------------------------------------------

// function chai(){
//     let username = "anu"
//     console.log(this.username);
// }
// chai()

//---------------------------------------------------------------------------------------
// const chai = function(){
//     let username = "anu"
//     console.log(this.username);
// } 

// chai()

// ---------------------------------------------------------------------------------------
// const chai = () => {
//     let username = "anu"
//     console.log(this);
// } 

// chai()

// ******************************************************************************************


// const Adddtwo = (num1,num2) => {
//           return num1+num2

// }
// console.log(Adddtwo(2,3));



// const Adddtwo2 = (num1,num2) => num1+num2
// console.log(Adddtwo2(2,3));


const Addtwo3 = (num1,num2) => (num1 + num2)
console.log(Addtwo3(4,5));

const Adddtwo4 = () => ({username:"ajya"})
console.log(Adddtwo4());