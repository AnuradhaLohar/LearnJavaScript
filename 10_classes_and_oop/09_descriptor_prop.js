const descripter = Object.getOwnPropertyDescriptor(Math,"PI")
// console.log(descripter);

const chai={
    name : "icetea",
    price: "250",
    iaAvalable: "true",

    orderchai:function(){
        console.log("chai nhi bani...");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai,"name"));


Object.defineProperty(chai,'name',{
    writable:false,
    enumerable:false
})

console.log(Object.getOwnPropertyDescriptor(chai,"name"));


for (let [key,value] of Object.entries(chai)) {
        if (typeof value !=='function') {
            console.log(`${key} : ${value}`); 
       
        }

    
}
