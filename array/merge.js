let arr1=[1,3,5,7]
let arr2=[2,4,6]

let merge=[]

let i=j=k=0
while(i<arr1.length && j<arr2.length){
    if(arr1[i]<arr2[j]){
        merge[k]=arr1[i]
        k++
        i++
    }else{
        merge[k]=arr2[j]
        k++
        j++
    }
}
while(i<arr1.length){
    merge[k]=arr1[i]
    k++
    i++
}
while(j<arr2.length){
    merge[k]=arr2[j]
    k++
    j++
}
console.log(merge)