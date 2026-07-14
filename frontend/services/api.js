export async function researchAPI(query){


const response = await fetch(
"http://127.0.0.1:8000/research-stream",
{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({
query:query
})

}

);


return response;


}