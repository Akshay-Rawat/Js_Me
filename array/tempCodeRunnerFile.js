let copy = arr[0]

for(let i =0;i<arr.length;i++){
    arr[i]=arr[i+1]
}
arr[arr.length-1]=copy
console.log(arr)