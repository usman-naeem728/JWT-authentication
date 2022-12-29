import { useState } from "react";


function Signin() {


    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")

    const loginhandler = (e) => {
        e.preventDefault();


       
    }


    return (
        <div>
            <h1>This is signin page</h1>

            <form onSubmit={loginhandler}>
                <input type="text" placeholder="email" onChange={(e) => {
                    setemail(e.target.value)
                }} />
                <input type="password" placeholder="password" onChange={(e) => {
                    setpassword(e.target.value)
                }} />
                <button type="submit">sigin</button>
            </form>

        </div>
    )
}

export default Signin;