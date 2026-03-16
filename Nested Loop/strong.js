n = prompt("Enter no")
var copy = Number(n)
var sum =0
while (n > 0) {
    var rem = n % 10
    var fac = 1
    for (var i = 1; i <= rem; i++) {
        fac = fac * i
    }
    sum = sum  + fac
    n = Math.floor(n / 10)
}
if(copy===sum){
console.log("strong")
}
else{
    console.log("no");

}