fetch('https://instagram-express-app.vercel.app/login', {
    method: "POST",
    headers: {
        'Content-Type': "application/json"
    },
    body: JSON.stringify({
        "userName": "ramesh",
        "password": "1234"
    }),

 })
 .then(res=>res.json())
 .then(data=>{

   let token =  data.token 
   fetch('https://instagram-express-app.vercel.app/user/history',{
    method:"GET",
    headers:{
        Token: token
    }
   })
})
.then(res=>res.json())
.then(info=>{
    console.log("BOOk history fetched")
for(let t of info.data){
    fetch(`https://instagram-express-app.vercel.app/book/${t.bookID}`, {
        method: "GET",
        headers: {
            Token: token
        }
    })
    .then(res => res.json())
    .then(ig => console.log(ig))
}
 .catch(err=>console.log(err))