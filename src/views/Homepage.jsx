import { useState } from "react"
import useFetch from "../hooks/useFetch";

export default function Homepage(){
    const[url,setUrl]=useState();
    const data= useFetch(url,url);
    return ( 
    <>
    <header className="flex items-center justify-center h-screen bg-[url(https://picsum.photos/2560/1440)] inset-0 bg-black/50 ">
    <h1 className="mt-[100px] text-9xl title ">HELLO,WORLD!</h1>

    </header>
    <div className="flex justify-center grid grid-cols-2 gap-3">
    <button className="btn btn-dash btn-primary mt-[10px] btn-xl col-span-1 ms-3" onClick={()=>setUrl('https://jsonplaceholder.typicode.com/albums')}>Albums</button>
    <button className="btn btn-dash btn-primary mt-[10px] btn-xl col-span-1 me-3" onClick={()=>setUrl('https://jsonplaceholder.typicode.com/users')}>Users</button>
    <ul className="col-span-2 flex flex-col items-center justify-center">
        {data && data.map((el)=>{
            return(
            <li key={el.id} className="">{el.title || el.name}</li>)
        })}
    </ul>

    </div>
    </>
    )
}