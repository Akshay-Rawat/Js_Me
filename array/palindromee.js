let arr = [10,20,10,20,10]

let start = 0
let end = arr.length-1
let count  = 0 
while(start<=end){
    if(arr[start]==arr[end]){
        count++
    }
    start=start+1
    end=end-1
}

let l = arr.length
if(Math.ceil(l/2)==count){
    console.log("palindrome")
}
else{
    console.log("Not palindrome")
}