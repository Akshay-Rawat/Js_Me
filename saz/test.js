let arr=[1,2,3,-1,8,-9,-9,0,2,4]
let m = arr.length
for(let i =0;i<=m;i++){
    if(arr[i]<0){
        continue
    }
    else if(arr[i]==0){
        break
    }
    console.log(arr[i])
}