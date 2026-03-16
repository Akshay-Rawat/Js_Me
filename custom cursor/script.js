let main = document.querySelector("#main")
let cursor = document.querySelector(".cursor")

main.addEventListener("mousemove",(ak)=>{
    cursor.style.left=ak.x+"px"
    cursor.style.top=ak.y+"px"
})