import { useLoaderData } from "react-router-dom"
import { Link } from "react-router-dom";


export default function Info(){
    const posts= useLoaderData();
    return(
        <>
        <h1 className="mt-[100px] text-9xl">INFO</h1>
        <ul className="flex justify-center flex-col items-center mt-[20px]">
            {posts && posts.map((post)=>{
                return  <li key={post.id}>{post.title} <Link to={`detail/${post.id}`} className="text-sky-600">-Detail</Link></li>
            })}
        </ul>
        </>
    )
}