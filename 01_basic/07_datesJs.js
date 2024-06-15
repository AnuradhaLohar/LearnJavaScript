///Dates

const mydate = new Date ()
// console.log(mydate.toString()); op = //Sat Jun 15 2024 05:41:31 GMT+0000 (Coordinated Universal Time)
// console.log(mydate.toDateString()); //op = Sat Jun 15 2024
// console.log(mydate.toISOString()); op = 2024-06-15T05:41:31.524Z
// console.log(mydate.toJSON()); // op = 2024-06-15T05:41:31.524Z
// console.log(mydate.toLocaleDateString()); op = 6/15/2024
// console.log(mydate.toLocaleString()); op = 6/15/2024, 5:41:31 AM
// console.log(mydate.toLocaleTimeString()); op = 5:41:31 AM
//console.log(typeof mydate);


//let myCreatedDate = new Date(2023, 0, 23)
let myCreatedDate = new Date(2024, 0, 15, 11, 24)
//let myCreatedDate = new Date("2023-01-14")
//let myCreatedDate = new Date("01-14-2023")
//  console.log(myCreatedDate.toLocaleString());


let newDate = new Date()
console.log(newDate.getDay());

newDate.toLocaleString('defalut',{
        weekDay:"long",
})

