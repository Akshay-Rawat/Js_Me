let arr=[10,100,40,50,300,70]
let temp=[]
let j =0

// for(let i =arr.length-1;i>=0;i--){
//  temp.push(arr[i])
// }

for(let i =arr.length-1;i>=0;i--){
 temp[j]=arr[i]
 j++
}
console.log(temp)