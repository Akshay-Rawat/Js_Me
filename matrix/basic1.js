let arr = [
[1, 2, 3],
[4, 5,100],
[7],
[10, 11, 12] 
]
n=arr.length
for(let row =0;row<n;row++){

    let innerArray = arr[row]
    for(let j=0;j<arr[row].length;j++){
        console.log(innerArray[j])
    }
}