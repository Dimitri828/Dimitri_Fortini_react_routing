import { useState } from "react"
import useFetch from "../hooks/useFetch";

export default function Homepage(){
    const[url,setUrl]=useState();
    const data= useFetch(url,url);
    return ( 
    <>
    
    <h1 className="mt-100">HELLO,WORLD</h1>
    <button onClick={()=>setUrl('https://jsonplaceholder.typicode.com/albums')}>Albums</button>
    <button onClick={()=>setUrl('https://jsonplaceholder.typicode.com/users')}>Users</button>
    <ul>
        {data && data.map((el)=>{
            return(
            <li key={el.id}>{el.title || el.name}</li>)
        })}
    </ul>
    </>
    )
}