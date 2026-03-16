const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const url = "https://jsonplaceholder.typicode.com/posts"
const options = {
    method: "POST",
    body: JSON.stringify({ username: "eakki" }),
    headers: myHeaders,
};
async function postData(){

    const response = await fetch(url,options);
    let data = await response.json()
    console.log("Mydata",data)
}
postData()