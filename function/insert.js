// let arr = [10,20,30,40,50,60]
// let index=3
// let n = 35

// for(let i = arr.length-1;i>=index;i--){
//     arr[i+1]= arr[i]

//     console.log(i,arr)

// }
// arr[index]=n
// console.log(arr)

//! Delete

let arr = [10,20,30,40,50,60]
let index=3


for(let i = 0;i<arr.length-1;i++){
    if(i>=index){

        arr[i] = arr[i+1]
    }
  
}
arr.length=arr.length-1
console.log(arr)