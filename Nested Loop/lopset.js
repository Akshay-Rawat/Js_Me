let n = 123455
let temp = n
let count = 0


while(temp > 0){
    count++
    temp = Math.floor(temp / 10)
}
console.log("count:", count)

for(let i = count; i > 0; i--){
    let digit = Math.floor(n / 10**(i - 1)) % 10
    console.log("Digit", digit)
}  