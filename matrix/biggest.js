let arr = [
[1, 2, 3],
[4, 5,100,500],
[7],
[10, 11, 12] 
]
let max= 0
let maxArray
for(let row of arr){

   let l = row.length
   if(l>max){
    max=l
    maxArray= row
   }
}
console.log(max,maxArray)