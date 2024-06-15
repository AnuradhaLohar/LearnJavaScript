const testUser = {}

testUser.id = "123"
testUser.name ="anny"
testUser.isLoggedIn = false

//console.log(testUser);

const realtest = {
        email : "Anu@gamil.com",
        fullname : {
            userfullname : {
                firstname : "anu",
                lastname : "Lohar"

            }
        }

}

// console.log(realtest.fullname.userfullname.firstname);
// console.log(realtest.fullname.userfullname.lastname);

const obj1 = {1:"Anu",2:"lohar"}
const obj2 = {3:"Aju",4:"dhokale"}
const obj3 = {5:"sanku",6:"khumbhar"}
const obj5 = {7:"kk",8:"birnale"}

//const obj4 ={...obj1,...obj2,...obj3}

const obj4=Object.assign({} ,obj1,obj2,obj3,obj5)
console.log(obj4);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]