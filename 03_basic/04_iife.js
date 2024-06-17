// Immediately Invoked Function Expressions (IIFE)

//this IIFE function is need close by a semi colon (;)

function chai(){
    console.log("DB CONNETION ");                  // normal function
}
chai();

///****************************************************************************** */
(function chai1(){
    console.log(`DB CONNETION DONE`);                   /// IIFE function with function name
})();

///******************************************************************************* */

 ((name)=> {
    console.log(`DB CONNTION OK ${name}`);                /// IIFE function without function name

})("anu")