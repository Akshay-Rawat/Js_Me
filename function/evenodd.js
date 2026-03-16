let arr = [10,21,30,43,50,65,11]
let arr1=[]
let arr2=[]

for(let i = 0;i<arr.length;i++){
    if(arr[i]%2==0){
        arr1.push(arr[i])
    }else{
        arr2.push(arr[i])
    }
}
console.log(arr1)
console.log(arr2)