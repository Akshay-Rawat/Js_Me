const prompt = require("prompt-sync")();
var n = Number(prompt("enter number for answer"))

// if (a === null) {
//     console.log("undefined")
// }
// if (isNaN(a)) {
//     console.log("Invalid")
// }
// else {
//     if (a > 0) {
//         var prime = true
//         for (var i = 2; i <= Math.floor(a / 2); i++) {
//             if (a % i === 0) {
//                 prime = false;
//                 break;
//             }
//         }
//         console.log(prime);
//     }
//     else {
//         console.log("should add more than 0");
//     }
// }

function isPrime(n){
    if(n<=1) return false;
    if(n==2) return true;
    if(n%2 == 0) return false;
    for(let i =3;i<=Math.floor(Math.sqrt(n)); i+=2){
        if(n%i === 0){
            return false;
        }
    }
    return true;
}
console.log(isPrime(n))



