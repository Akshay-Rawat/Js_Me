let arr=[10,20,30,10,20,10,30,20,10,20,40,50]

let temp=[]

for(let i of arr){
    if(temp.indexOf(i)==-1){
        temp.push(i)
    }
}
console.log(temp)