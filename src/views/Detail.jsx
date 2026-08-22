import { useLoaderData } from "react-router-dom"

export default function Detail(){
    
    const post= useLoaderData();

    return(
        <>
        <h1 className="mt-[100px] text-9xl">DETAIL</h1>
        <div className="flex justify-center flex-col items-center h-screen ">
        <h3 className="text-xl">TITLE: <span className="text-3xl font-bold">{post.title}</span></h3>
        <p className="text-xl w-[50vw] mt-[20px]">TEXT: <span className="text-2xl font-semibold text-justify ">{post.body} </span></p>

        </div>
        </>
    )
}