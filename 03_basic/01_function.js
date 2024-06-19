function myname (){
      console.log("Anu");   //function declaration
}

//myname()   // function call


// =====================Method 1=====================
function Add (num1,num2){           
     let result = num1 + num2
     return result
}
// console.log((Add(2,2)));

const result = Add(4,9)
// console.log("result:" ,result);  // another method

// ============Method 2 ==============================
// function AddTwo (n1,n2){
//     console.log(n1+n2);
//     return
// }

// AddTwo(2,3)

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function logginUser(Username,sname){
    
//     return `${Username} ${sname} just loggin .....`
    

// }

//  console.log(logginUser("sam","kale"))

// +++++++++++++++++++++++++++++++++++
 

function logginUser(Username,sname){
    if(Username === undefined){
  //      console.log("Plz enter valid username");
    }

    else{
        return `${Username} ${sname} just loggin .....`

    }
    
} 
//console.log(logginUser("sam"))

// in a function if u declare 2 parmeters then u have to pass 2 arguments...........


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++Method 1 +++++++++++++++++++++


// function CalCartPrice (nnumber1){
//     return nnumber1
// }

// console.log(CalCartPrice(12));

// ------------------------------Method 2-------------------------------------------------------


// function CalCartPrice (val1 , ...nnumber1){
//     return nnumber1
// }

// console.log(CalCartPrice(12,15,25));



//==================================== method 3=====================


// const user ={
//      username: "kk",
//      price:199
     
// }

// function handelobj (anyobj){
// console.log(`The usernmae ${anyobj.username} price ${anyobj.price}`);

// }
// handelobj(user)

// +++++++++++++++++++++++++++++++++++++++Method 4++++++++++++++++++++++



// function handelobj (anyobj){
//     console.log(`The usernmae ${anyobj.username} price ${anyobj.price}`);
    
//     }
//     handelobj({
//         username: "kk",
//         price:199
        
//    })
    
   //---------------------------------Method 5----------------------

//    const myArray = [100,200,300,400]

//    function handelArray(getArray){
//             return getArray[2]
// }
// console.log(handelArray(myArray));

//-------------------------------- Method 6 -------------------

  

   function handelArray(getArray){
            return getArray[2]
}
//console.log(handelArray([100,200,300,400]));