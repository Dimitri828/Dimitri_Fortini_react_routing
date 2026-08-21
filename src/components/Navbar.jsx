import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { useContext, useState } from "react";
import { Context } from "../context/UserContext";
import useScroll from"../hooks/useScroll";

export default function Navbar() {
    const { user,logout } = useContext(Context);
    const[scrolled,scrollY]=useScroll();
    return (
    <nav ref={scrolled} className={`navbar ${scrollY>0 ? 'dark':'light'}`} >
      <ul className="d-flex ul ">
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
        (
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
        )}
      </ul>
    </nav>
  );
}
