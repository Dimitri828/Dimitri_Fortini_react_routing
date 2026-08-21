import { useLoaderData } from "react-router-dom"

export default function Detail(){
    
    const post= useLoaderData();

    return(
        <>
        <h1 className="mt-100">DETAIL</h1>

        <h3>{post.title}</h3>
        <p>{post.body}</p>
        </>
    )
}