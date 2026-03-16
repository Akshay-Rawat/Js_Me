let Array=[10,100,40,50,300,70,60,50,299]
let max =-1
let smax=-1

for(let i=0;i<Array.length;i++){
    if(Array[i]>max){
        smax=max
        max=Array[i]
    }else if(Array[i]>smax && max!=Array[i]){
        smax=Array[i]
    }
}
console.log(smax)
console.log(max)