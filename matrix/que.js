const people = [
    {name:"Rohan",age:25,city:"Mumbai"},
    {name:"Aarav",age:22,city:"Delhi"},
    {name:"Kabir",age:25,city:"Pune"},
    {name:"Neha",age:22,city:"Banglore"},
    {name:"Zara",age:22,city:"Kolkata"},
    {name:"Isha",age:25,city:"Hyderabad"},
]

people.sort(customLogic)

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

