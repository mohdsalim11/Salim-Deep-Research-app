import {useState} from "react";

import SearchBox from "../components/SearchBox";

import ReportViewer from "../components/ReportViewer";

import {researchAPI} from "../../services/api";



function Home(){


const [query,setQuery]=useState("");

const [result,setResult]=useState("");

const [loading,setLoading]=useState(false);



async function research(){


setResult("");

setLoading(true);


const response = await researchAPI(query);


const reader=response.body.getReader();

const decoder=new TextDecoder();



while(true){


const {done,value}=await reader.read();


if(done)
break;



const chunk=decoder.decode(value,{
stream:true
});


setResult(prev=>prev+chunk);


}


setLoading(false);


}



return(

<div>




<SearchBox

query={query}

setQuery={setQuery}

research={research}

loading={loading}

/>



<ReportViewer

result={result}

/>


</div>


)

}


export default Home;