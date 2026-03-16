// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Akshay"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email:"abc@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Akshay",
            lastname:"Rawat"
        }
    }
}
// console.log(regularUser.fullname.userfullname);

const obj1 = {1: "a",2:"b"}
const obj2 = {3: "c",4:"d"}

// const obj3={obj1,obj2}
// const obj3 = Object.assign({},obj1,obj2)

const obj3 = {...obj1,...obj2}
// console.log(obj3);

const user = [
    {
        id:1,
        email: "h@gmail.com"
    },
    {
        id:1,
        email: "h@gmail.com"
    },
    {
        id:1,
        email: "h@gmail.com"
    }
]

user[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))

console.log(tinderUser.hasOwnProperty('isLoggedIn'));