import React, { useState } from "react";


const reghandler=()=>{
    fetch('http://localhost:4000/register') 
}   

const Register=()=>{
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");

    return(<>
        <h1>Register</h1>
        <form>
            <input placeholder="username"
                onChange={(e)=>{setUsername(e.target.value)}}
            />
            <br/>
            <br/>
            <input type="password" placeholder="password"
                onChange={(e)=>{setPassword(e.target.value)}}
            />
            <br/>
            <br/>
            <button onClick={reghandler}>Register</button>
            <br/>
        </form>
    </>)
}
export default Register;