import UserList from '@/components/user-list';
import { BASE_URL } from '@/contants'
import { useEffect, useState } from 'react'



const Users = () => {
  type data = any[]
  const [users, setUsers]: data = useState([]);
  
  //using useEffects to fetch data
  useEffect( ()=>{
    const apiResponse = async ()=>{
      const response = await fetch(`https://shopweb-api.herokuapp.com/user`,{
      method: 'GET',
      mode: 'cors',
      credentials: 'same-origin',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    setUsers(data)

    }
    apiResponse();
  },[])

  //component

  console.log(users)
  return (
  <section className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-col text-center w-full mb-20">
        <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">User List</h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Updated List of All User In The Platform</p>
      </div>
      <div className="lg:w-2/3 w-full mx-auto overflow-auto">
        <table className="table-auto w-full text-left whitespace-no-wrap">
          <thead>
            <tr>
              <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">ID</th>
              <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Name</th>
              <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Email</th>
              <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Role</th>
              <th className="w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map((user: any)=>(
                <tr key={user._id}>
                  <UserList user={user}/>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
      <div className="flex pl-4 mt-4 lg:w-2/3 w-full mx-auto">
        <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
        <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Create New User</button>
      </div>
    </div>
  </section>
  )
}


export default Users;