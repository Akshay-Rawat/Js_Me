// function fib(n){
//     if(n===0) return 0
//     if(n===1) return 1
//     return fib(n-1)+fib(n-2)

// }
// let a = fib(5)
// console.log(a)

function fibByPosition(pos) {
    return fibByPosition(pos - 1)
}

console.log(fibByPosition(5))