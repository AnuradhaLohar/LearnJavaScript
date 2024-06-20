//for_map

const myarr = [1,2,3,4,5,6,7,8,9,10]

//const new1 = myarr.map( (num) => {return num + 10})

const nums = myarr.map((num) => (num * 10) )
                  .map( (val) => (val + 1))   
                  .filter( (val2) => (val2 >= 30))

console.log(nums);

