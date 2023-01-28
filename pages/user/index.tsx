import User from "@/components/user";
import { InferGetServerSidePropsType } from 'next'
import { GetServerSideProps } from 'next'
import { useEffect, useState } from "react";

interface IUsers{
  name: string,
  email: string,
  role: string,
}

type Data = IUsers[];

//server side prop
export async function agetServerSideProps(){

  //making api call for users
  const apiResponse =  await fetch('https://shopweb-api.herokuapp.com/user');

    //response data parse into json format
    const data = await apiResponse.json();

    return {
      props: {
        users: data
      }
    }
};

function Users({users}: any){
  console.log(users)
  return (
    <div>
      <div>{users}</div>
    </div>
  )
}

export default Users;
