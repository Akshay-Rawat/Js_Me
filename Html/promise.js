// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Hi Buddyu")
//         resolve()
//     },1000)
// }).then(function(){
//     console.log("resolved")
// })

// const PromiseTwo = new Promise(function(resolve,rejct){
//     setTimeout(function(){
//         resolve({username:"Akshay",email:"chai@gmail.com"})
//     },1000)
// }).then(function(user){
//     console.log(user)
// })

// const Promisefour = new Promise(function(resolve,rejct){
//     setTimeout(function(){
//         let error = false
//         if(!error){
//             resolve({username:"Akshay",password:"123"})
//         }else{
//             rejct("eroor ho gya guru")
//         }
//     },1000)
// })

// Promisefour
// .then((user)=>{
//     console.log(user)
//     return user.username  
// })
// .then((username)=>{
//     console.log(username)
// })
// .catch((error)=>{
//     console.log(error)
// })
// .finally(()=>console.log("the promiose is either rsoolved or reject")) 

const Promisefive = new Promise(function(resolve,rejct){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username:"Akshay",password:"123"})
        }else{
            rejct("eroor hai akshay guru")
        }
    },1000)
})

async function consumerPromiseFive() {
    const response = await Promisefive
    console.log(response)
}
consumerPromiseFive() 

async function getAllUsers() {
   try {
     const response = await fetch('https://www.google.com')

   const data= await response.json()
   console.log(data) 
   } catch (error) {
    console.log("er",error)
   }
}
getAllUsers()