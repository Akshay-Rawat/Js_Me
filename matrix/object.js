const symbo = Symbol("key1")

const obj = {
    name:"rohit",
    account_balance:420,
    gender:"Male",
    "age":30,
    [symbo]:"mykey1"
}

// console.log(obj["account_balance" ] )
// console.log(obj[symbo ] )
// console.log(typeof obj.symbol)

// Object.freeze(obj)
obj.name = "Akshay Rawat"

// console.log(obj)

obj.greeting = function(){
    console.log("Hello");
}
console.log(obj.greeting(  ))