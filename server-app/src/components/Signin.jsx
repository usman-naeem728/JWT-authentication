import { useState} from "react";
import axios from "axios"


const baseUrl = 'http://localhost:5001'


function Signin() {
    
    const [result, setResult] = useState("");

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const loginhandler = async (e) => {
        e.preventDefault();

        try {
            let response = await axios.post(`${baseUrl}/login`, {
                email: email,
                password: password
            }, {
                withCredentials: true
            })


            console.log("login successful");
            setResult("login successful")

        } catch (e) {
            console.log("e: ", e);
        }

        // e.reset();
    }
    return (
        <div>
            <h1>This is signin page</h1>

            <form onSubmit={loginhandler}>
                <input type="text" placeholder="email" onChange={(e) => {
                    setEmail(e.target.value)
                }} />
                <input type="password" placeholder="password" onChange={(e) => {
                    setPassword(e.target.value)
                }} />
                <button type="submit">sigin</button>
            </form>

        </div>
    )
}

export default Signin;