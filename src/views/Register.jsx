import { useContext, useState } from "react";
import { Context, UserContext } from "../context/UserContext";
export default function Register() {
  const { register } = useContext(Context);
  const [userName, setUserName] = useState();
  const [userEmail, setUserEmail] = useState();
  function handleChange(e) {
    if (e.target.id ==="userName") {
        setUserName(e.target.value);
    }else if (e.target.id ==="userEmail") {
        setUserEmail(e.target.value);
    }
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (userName && userEmail) {
        register({name:userName,email:userEmail});
    }
  }
  return (
    <>
      <h1 className="mt-[100px] text-9xl mb-[50px]">Register</h1>
      <form action="" className="flex justify-center items-center flex-col gap-y-[10px]" onSubmit={handleSubmit}>
        <label htmlFor="userName">Name</label>
        <input className="input mb-[10px]" type="text" id="userName" onChange={handleChange} />

        <label htmlFor="userEmail">Email</label>
        <input className="input mb-[10px]" type="email" id="userEmail" onChange={handleChange} />

        <label htmlFor="userPassword">Password</label>
        <input className="input mb-[10px]" type="password" id="userPassword" />

        <label htmlFor="confirmPassword">Confirm Password</label>
        <input className="input mb-[50px]" type="password" id="confirmPassword" />

        <button type="submit" className="btn  btn-xl btn-success">Click here</button>
      </form>
    </>
  );
}
