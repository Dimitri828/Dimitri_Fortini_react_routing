export default function Register(){
    return(
        <>
        <h1>Register</h1>
        <form action="" className="form">
            <label htmlFor="userName">Name</label>
            <input type="text" id="userName"/>
            
            <label htmlFor="userEmail">Email</label>
            <input type="email" id="userEmail" />
            
            <label htmlFor="userPassword">Password</label>
            <input type="password" id="userPassword"/>

            <label htmlFor="confirmPassword">Confirm Password</label>
            <input type="password" id="confirmPassword" />
        </form>
        </>
    )
}