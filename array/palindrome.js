let arr = [10,20,10]

for(let i = 0;i<arr.length;i++){
    for(let j=i;j<arr.length;j++){
        let x = arr.slice(i,j+1)

        if(palindrome(x)==true){
            console.log(x)
        }
    }

}
function palindrome(arr)
{
    let brr=[]
    for(let i =arr.length-1;i>=0;i--){
        brr.push(arr[i])

    }
    let count = 0
    for(let i = 0;i<arr.length;i++){
        if(arr[i]==brr[i]){
            count++
        }
    }
        if(count==arr.length){
            return true
        }
        return false
    }
