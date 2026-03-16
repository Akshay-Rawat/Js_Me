let arr1 =[1,2,3,4,5,6]
const newArr=arr1.join()

// console.log(arr1)
// console.log(typeof newArr)

//! slice, splice

console.log("A",arr1)

const my1 = arr1.slice(1,3)
console.log(my1)
console.log("B",arr1)

const my2 = arr1.splice(1,3)
console.log("C",arr1)
console.log(my2)