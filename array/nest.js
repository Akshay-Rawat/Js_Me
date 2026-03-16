let arr=[10,20,30,[40,50,60],70,[80,90],100]

//! 1st method
// for(let i =0;i<arr.length;i++){

//     if(typeof(arr[i])=="number"){
//         console.log(arr[i])
//     }
//     else if(Array.isArray(arr[i])){
//         let temp=arr[i]
//         for(let t of temp){
//             console.log(t);
            
//         }
//     }
// }

//! 2nd method

let  rrr =arr.flat(Infinity)
console.log(rrr)


//! 3rd method for exact copy of array

let shallow= structuredClone(arr)

arr[3][0]=500
console.log("arr",arr)
console.log("shallow",shallow)

//? structur clone work in node 17v

//! 4th spread operator

let brr=[...arr]
console.log("brr",brr)