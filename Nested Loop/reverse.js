let n =237
let rev = 0
while(n>0){
    last = n%10
    rev = rev*10+last
    n = parseInt(n/10)

}
console.log(rev);
