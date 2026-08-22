export default function Login(){
    return(
        <>
        <h1 className="mt-[100px] text-9xl mb-[50px]">Login</h1>
        <form action="" className="flex justify-center items-center flex-col gap-y-[10px]">
            <label htmlFor="loginEmail">Email</label>
            <input className="input mb-[10px]" type="email" id="loginEmail" />
            
            <label htmlFor="loginPassword">Password</label>
            <input className="input mb-[50px]" type="password" id="loginPassword"/>

            <button type="submit" className="btn  btn-xl btn-success">Click here</button>
        </form>
        </>
    )
}