// function fetchData(){
//     console.log("hey i am good")
// }
// setInterval(fetchData,500)

//!for each
// let a=[10,20,30,40,50]

// a.forEach(a=>console.log(a))

//! filter
// let arr=[10,22,33,41,50];
// const rtesult = arr.filter((num)=>{
//     return num%2==0
// })
// console.log(rtesult)

//!map

// let arr=[10,22,33,41,50];
// const result = arr.map((num)=>{
//     return num*num
// })
// console.log(result)

//! Reduce

const arr =  [10,20,30,40,50];

// const result = arr.reduce((acc,cur)=>{
    // console.log(acc,cur);
//     acc=acc+cur
//     return acc
// })
const result = arr.reduce((acc,cur)=>acc+cur,0)
console.log(result)