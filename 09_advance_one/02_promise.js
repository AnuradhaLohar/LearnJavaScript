
//promise(function(){}).then().then().catch().finally()    //syntax for promise//it is like fetch() method

// const promiseOne = new Promise(function(resolve,reject){
//   setTimeout(function(){
//     console.log("async task completed");
//     resolve()
//     },1000)
// })

// promiseOne.then(function(){
//     console.log("promise consumed...");
// });


// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("async task 2 completed");
//         resolve()
//     },1000)
// }).then(function(){
//     console.log("promise 2 cansumed...");
// });



// let promiseThree = new Promise((resolve,reject)=>{
//    setTimeout(()=>{
//     console.log("async task 3 compeleted");
//     resolve({username: "Ajaya" , password:"123"})
//    },1000)
// })
// promiseThree.then((user)=>{
//     console.log(user);
// })


// let promisefour = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         error = true
//         if (!error) {
//             console.log("async task 4 completed...");
//             resolve({username: "Anu" , email:"anu@.com"})
//         }else{
//             reject("error!!! something went wrong....");
//         }
//     })
// })

// promisefour.then((user)=>{
//     console.log(user);
//     return user.username;
// })
// .then(function(username)  {
//     console.log(username);
// }).catch((error)=>{
//     console.log(error);

// }).finally(()=>{
//     console.log("promises either sloved or rejected..");
// })


// const promiseFive = new Promise((resolve,reject)=>{
    
//     setTimeout(()=>{
//         error = false 
//         if (!error) {
//             console.log("promise 5 completed....");
//             resolve({username: "Lalaa" , password: "12345"})
//         }else{
//             reject("Error : somthing went wrong..")
//         }
//     },1000)
// }) 

// async function comsumepromiseFive(){
//     try {
//         const response = await promiseFive
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }

// }
// comsumepromiseFive()


// async function user(){
//     try {
//         const response = await fetch('https://api.github.com/users/hiteshchoudhary')
//         const data = await response.json()
//         console.log(data); 
//     } catch (error) {
//         console.log(error);
//     }
// }
// user()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((user)=>{
 return user.json()
})
.then((info)=>{
  console.log(info);
  return info.name , info.login , info.id , info.followers
  
})
.then((name , login , id , followers)=>{
    console.log(name ,login ,id,followers );
})

.catch((error)=>{
    console.log(error);
}).finally(()=> console.log("Api fetched SuccessFully"))