import { useLoaderData } from "react-router-dom"
import { Link } from "react-router-dom";


export default function Info(){
    const posts= useLoaderData();
    return(
        <>
        <h1 className="mt-100">INFO</h1>
        <ul>
            {posts && posts.map((post)=>{
                return  <li key={post.id}>{post.title} <Link to={`detail/${post.id}`}>-Detail</Link></li>
            })}
        </ul>
        </>
    )
}