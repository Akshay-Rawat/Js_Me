let arr = [1, 2, 3, 4, 5]
let k = 2
k=k%arr.length
m=arr.length
//! 1st trial

// k=k%arr.length
// for(let j = 0;j< n;j++){
//     let copy =arr[0]

//     for(let i=0;i<arr.length;i++){
//         arr[i]=arr[i+1]
//     }
//     arr[arr.length-1] = copy
// }
// console.log(arr)

//!2nd 
let temp = []

for(let i=0;i<arr.length;i++){
//     //! left rotation
    temp[i]=arr[(i+k)%m]

//     //! Right rotation
    //  temp[(i+k)%m]=arr[i]
}
console.log(temp)

//!3rd using function


// let i =0
// let j =arr.length-1

// reverse(0,k-1)
// reverse(k,arr.length-1)
// reverse(0,arr.length-1)
// console.log(arr)
// function reverse(i, j) {

//     while (i < j) {
//         let temp = arr[i]
//         arr[i]=arr[j]
//         arr[j]=temp
//         i++
//         j--
//     }
// }