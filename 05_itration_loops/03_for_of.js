//for of

//[" "," "," "]
//[{ },{ },{ }]


//*************************************************************************** */

const array = [1,2,3,4,5,6,7,8,9,10]

for (const num of array) {
    //console.log(num);
    
}

//************************************************************************** */

const item = "hello world"

for (const val of item) {
    //console.log(`Each char is = ${val}`);
}

//************************************************************************ */

const map = new Map()
map.set('1',"pune")
map.set('2',"kolhapur")
map.set('3',"mumbai")
map.set('1',"pune")

//console.log(map);

for (const [val1,value] of map) {
    console.log(value);
}


//********************************************************************* */
// In forOf loop object is not work  // beacause object is not iterable
// const myobj = {
//     car : "bulero",
//     car1 : "swift"
// }
// for (const [val,value] of myobj) {
//     //console.log(`car name is ${val,value}`);
    
//}


