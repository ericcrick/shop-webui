import CreateUserForm from "@/components/createUserForm"
import React, {useState } from "react"
import Layout from "../layout/layout";

function RegisterUser(){
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let payload = {
    name: "",
    email: "",
    password: "",
    role: "user"
  };

  //handling form submission
  const handleSubmit = async (event:React.FormEvent<HTMLFormElement>)=>{
    event.preventDefault();
    payload.name = name;
    payload.email = email;
    payload.password = password;
    const response = await fetch('https://shopweb-api.herokuapp.com/user', {
      method: 'POST',
      body: JSON.stringify(payload),
      mode: 'cors',
      credentials: 'same-origin',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();

    console.log(data);
  }
  return (
    <>
    <CreateUserForm name={name} 
    email={email} 
    password={password} 
    setName={setName} 
    setEmail={setEmail} 
    setPassword={setPassword}
    handleSubmit={handleSubmit}
    />
    </>
  )
}

export default RegisterUser