let a =0
let b=1000
for(let i =a;i<=b;i++){
    let count =0
    let temp =i
while(temp>0){
    count++
    temp= parseInt(temp/10)
}
let temp2=i
let sum =0
    while(temp2>0){
        last = temp2%10
        sum += last**count
        temp2 = parseInt(temp2/10)
    }
if(sum==i){
    console.log(i)
}
}