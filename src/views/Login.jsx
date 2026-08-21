export default function Login(){
    return(
        <>
        <h1 className="mt-100">Login</h1>
        <form action="" className="form">
            <label htmlFor="loginEmail">Email</label>
            <input type="email" id="loginEmail" />
            
            <label htmlFor="loginPassword">Password</label>
            <input type="password" id="loginPassword"/>
        </form>
        </>
    )
}