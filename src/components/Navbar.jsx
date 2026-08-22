import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { useContext, useState } from "react";
import { Context } from "../context/UserContext";
import useScroll from "../hooks/useScroll";

export default function Navbar() {
  const { user, logout } = useContext(Context);
  const [scrolled, scrollY] = useScroll();
  return (
    // Navbar PRE SELFWORK
    // <nav ref={scrolled} className={`navbar ${scrollY>0 ? 'dark':'light'}`} >
    //   <ul className="d-flex ul ">
    //     <li>
    //       <Link className="nav-link" to={"/"}>
    //         Homepage
    //       </Link>
    //     </li>
    //     {(user && (
    //       <>
    //         <li>
    //           <Link className="nav-link" to={"/info"}>
    //             Info
    //           </Link>
    //         </li>
    //         <li>
    //           <p className="nav-link">{user.name}</p>
    //         </li>
    //         <li>
    //             <button onClick={logout}>Logout</button>
    //             </li>
    //       </>
    //     ))||
    //     (
    //       <>
    //         <li>
    //           <Link className="nav-link" to={"/register"}>
    //             Register
    //           </Link>
    //         </li>
    //         <li>
    //           <Link className="nav-link" to={"/login"}>
    //             Login
    //           </Link>
    //         </li>
    //       </>
    //     )}
    //   </ul>
    // </nav>

    // NAVBAR DAISYUI
    <div ref={scrolled} className={`navbar  shadow-sm ${scrollY>0 ? 'dark':'light'} `}>
      <div className="flex-1  ">
        <Link to={"/"} className="btn btn-ghost text-xl">
          HELLO,WORLD!
        </Link>
      </div>
      <ul className=" flex gap-3 items-center">
        {(user && (
          <>
            <li>
              <Link className="btn btn-ghost text-xl" to={"/info"}>
                Info
              </Link>
            </li>
            <li className="dropdown dropdown-left dropdown-hover">
              <div tabIndex={0} role="button" className="btn m-1">
                 {user.name}
              </div>
              <ul
                tabIndex={-1}
                className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
              >
                <li>
                  <button onClick={logout} className="btn btn-ghost text-xl">
                Logout
              </button>
                </li>
              </ul>              
            </li>
          </>
        )) || (
          <div className=" flex gap-3 justify-end w-full">
            <li>
              <Link className=" btn btn-ghost text-xl" to={"/register"}>
                Register
              </Link>
            </li>
            <li>
              <Link className="btn btn-ghost text-xl" to={"/login"}>
                Login
              </Link>
            </li>
          </div>
        )}
      </ul>

      {/* <div className="flex-none">
        <button className="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-5 w-5 stroke-current"
          >
            {" "}
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
            ></path>{" "}
          </svg>
        </button>
      </div> */}
    </div>
  );
}
