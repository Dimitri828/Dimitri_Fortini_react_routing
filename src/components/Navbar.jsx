import { Link } from "react-router-dom"



export default function Navbar(){
    return(
        <nav className="navbar">
            <Link className="nav-link"  to={"/"}>Homepage</Link>
            <Link className="nav-link" to={"/info"}>Info</Link>
            <Link className="nav-link" to={"/register"}>Register</Link>
            <Link className="nav-link" to={"/login"}>Login</Link>

        </nav>
    )
}