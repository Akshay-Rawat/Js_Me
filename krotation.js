let prompt = require('prompt-sync')();
let arr = [1, 2, 3, 4, 5]
let k = Number(prompt("Value de k ki"))
k = k % arr.length
let count = 0;

for (let j = 0; j < k; j++) {
    count++
    let copy = arr[0]
    for (let i = 0; i < arr.length - 1; i++) {
        arr[i] = arr[i + 1]
    }
    arr[arr.length - 1] = copy
}
console.log(arr)
console.log(count)