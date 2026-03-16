let n = 9089
let sum = 0
// while(n>0){
//     last = n%10
//     sum+=last
//     n = parseInt(n/10)
// }
// console.log(sum)

for(;n>0;n=parseInt(n/10)){
    last  = n%10
    sum+=last
}
console.log(sum)