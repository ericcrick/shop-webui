import LoginForm from "@/components/loginUserForm";
import { useState } from "react";
import { useRouter } from "next/router";


export default function Login(){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  let payload = {
    email: "",
    password: ""
  }
  //handling user login
  const handleLogin = async (event:React.FormEvent<HTMLFormElement>)=>{
    event.preventDefault();
    payload.email = email;
    payload.password = password;

    if(payload.email && payload.password){
      const response = await fetch('https://shopweb-api.herokuapp.com/user/login',{
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
      if(data.message){
        router.push('/user')
      }
      router.push('/login');
    }
    router.push('/login');
  }
  return <>
    <LoginForm 
    email={email} 
    password={password} 
    setEmail={setEmail} 
    setPassword={setPassword}
    handleLogin = {handleLogin}
    />
  </>
}