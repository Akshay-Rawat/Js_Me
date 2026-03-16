const peopleArr = [
  { name: "Rohan", age: 25, city: "Mumbai", pinCodes: [400001, 400050] },
  { name: "Aarav", age: 22, city: "Delhi", pinCodes: [110001, 110007, 110008] },
  { name: "Kabir", age: 25, city: "Pune", pinCodes: [411001, 411002] },
  { name: "Neha", age: 22, city: "Chennai", pinCodes: [600001, 600020] },
  { name: "Zara", age: 25, city: "Bengaluru", pinCodes: [560001, 560010, 560020] },
  { name: "Isha", age: 22, city: "Kolkata", pinCodes: [700001, 700002] }
];


peopleArr.sort(customeLogic)

function customLogic(obj1,obj2){
if(obj1.age>obj2.age){
    return 1
}
else if(obj1.age<obj2.age){
    return -1
}
else if(obj1.age==obj2.age){
    if(obj1.city>obj2.city){
        return 1
    }else return -1
}
}
console.log(people)

