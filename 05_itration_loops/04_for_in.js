//for_in

//*********************************************************** */

const myobj = {
    js : `javascript`,
    cpp : `c++`,
    py : `python`,
    ru : `ruby`
}

for (const key in myobj) {
//    console.log(`language name is :- ${key} `);
   //console.log(`language name is :- ${key} : ${myobj[key]} `);

}

//****************************************************************** */


const array =["js","cpp","ruby","c"]

for (const key in array) {
    //console.log(`shortcut is :- ${array[key]}`);
    
}

//************************************************************************* */

// In for_in lopp we have not use map object

const map = new Map()
map.set(`1`,"anu")
map.set(`2`,"ajya")
map.set(`3`,"kk")
map.set(`4`,"anju")
map.set(`5`,"sk")
map.set(`6`,"sam")

for (const key in map) {
    //console.log(key);
}

//************************************************************** */

// In for_of lopp we can use map object


for (const [key,value] of map) {
    //console.log(key," : ",value);
    
}