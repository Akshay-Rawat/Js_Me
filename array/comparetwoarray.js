let arr=[10,20,10,50]

let brr=[]

for(let i =0;i<arr.length;i++){
    brr.push(arr[i])
}
let count =0
for(let i =0;i<arr.length;i++){
    if(arr[i]==brr[i]){
        count++
    }
}

if(count==arr.length){
    console.log("YES")
}else{
    console.log("No")
}