import CreateUserForm from "@/components/createUserForm"
import { useRouter} from "next/router";
import React, {useState } from "react"

function RegisterUser(){
  const router = useRouter();
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
    try {
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
      if((data?.token !== undefined || null )){
        alert("User Created")
        router.reload()
        return;
      }
      alert(data?.message)
    } catch (error) {
      alert("Error Occured")
      return;
    }
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