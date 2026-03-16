let arr=[7,1,5,3,6,4]

let minBuy=arr[0]
let profit=0

for(let i=0;i<arr.length;i++){
    if(arr[i]<minBuy){
        minBuy=arr[i]
    }
let  maxprofit = arr[i]-minBuy
profit=Math.max(maxprofit,profit)

}

console.log(profit)