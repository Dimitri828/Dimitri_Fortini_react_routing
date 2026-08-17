import { Link } from "react-router-dom";
import { Context } from "../context/Context";
import { useContext, useState } from "react";

export default function Navbar() {
    const { user,logout } = useContext(Context);
    
    return (
    <nav className="navbar">
      <ul className="d-flex ul">
        <li>
          <Link className="nav-link" to={"/"}>
            Homepage
          </Link>
        </li>
        {(user && (
          <>
            <li>
              <Link className="nav-link" to={"/info"}>
                Info
              </Link>
            </li>
            <li>
              <p className="nav-link">{user.name}</p>
            </li>
            <li>
                <button onClick={logout}>Logout</button>
                </li>
          </>
        ))||
        (!user && (
          <>
            <li>
              <Link className="nav-link" to={"/register"}>
                Register
              </Link>
            </li>
            <li>
              <Link className="nav-link" to={"/login"}>
                Login
              </Link>
            </li>
          </>
        ))}
      </ul>
    </nav>
  );
}
