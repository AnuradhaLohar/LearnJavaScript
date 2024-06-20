// reduce

// const number = [1,2,3]

// const mynum = number.reduce( (acc,crrval) => {
//     console.log(`accumulator : ${acc} and current value is :${crrval}`);
//     return acc + crrval ;
// },0 )


const shoppingcart = [
         {
            corsename : "js",
            price : 100
         },
         {
            corsename : "java",
            price : 200
         },
         {
            corsename : "cpp",
            price : 300
         },
         {
            corsename : "python",
            price : 500
         }

]

const totalbil = shoppingcart.reduce( (accumulator,currentval) => accumulator + currentval.price,0)

console.log(`Your Total Bill is :- ${totalbil}`);