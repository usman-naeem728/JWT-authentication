import { useState } from "react";
import axios from "axios"




const baseUrl = 'http://localhost:5001'

function Signup() {
    const [result, setResult] = useState("");
    const [msg,setMsg] = useState("")
    const [firstname, setfirstname] = useState("");
    const [lastname, setlastname] = useState("");
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")



    const signuphandler = async (e) => {
        e.preventDefault();
        try {
            let response = await axios.post(`${baseUrl}/signup`, {
                firstName: firstname,
                lastName: lastname,
                email: email,
                password: password
            })


            console.log("signup successful");
            setResult("signup successful")

        } catch (e) {
            console.log("e: ", e);
            console.log("error", e.response.data.message)
            setMsg(e.response.data.message)
        }
    }


    return (
        <div>
            <h1>This is Signup page</h1>
            <h4>{msg}</h4>
            <form onSubmit={signuphandler}>
                <input type="text" placeholder="FristName"  onChange={(e) => { setfirstname(e.target.value) }}/>
                <input type="text" placeholder="LastName"  onChange={(e) => { setlastname(e.target.value) }}  />
                <input type="text" placeholder="email"  onChange={(e) => { setemail(e.target.value) }}  />
                <input type="password" placeholder="password"  onChange={(e) => { setpassword(e.target.value) }} />
                <input type="password" placeholder="re-password"   />
                <button type="submit">Signup</button>
            </form>
        </div>
    )
}

export default Signup;