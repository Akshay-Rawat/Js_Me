let arr = [10,2,78,100,4];
let max = arr[0];

for(let i = 1;i<arr.length;i++){
    if(max<arr[i]){
        max=arr[i];
    }
}
console.log(max)