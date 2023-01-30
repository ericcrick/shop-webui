import { useRouter } from "next/router";

function UserList({ user }: any){
  const router = useRouter();
  const handleDelete = async(event: React.FormEvent<HTMLFormElement | any>)=>{
    event.preventDefault();
    const decision = confirm(" Are you sure you want to delete this user")
    if(decision !== false){
      
      const userId = event.currentTarget.value
      
      const response = await fetch(`https://shopweb-api.herokuapp.com/user/${userId}`, {
        method: 'DELETE',
        mode: 'cors',
        credentials: 'same-origin',
        cache: 'no-cache',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const data = await response.json();
      alert("User deleted successfully")
      router.reload();
    }

  }
  return (
    <>
      <td className="px-4 py-3">{user._id}</td>
      <td className="px-4 py-3">{user.name}</td>
      <td className="px-4 py-3">{user.email}</td>
      <td className="px-4 py-3 text-lg text-gray-900">{user.role}</td>
      <td className="py-4 flex justify-between">
      <button className="px-2">
        <span className="bg-green-300 hover:bg-green-600 px-3 rounded-md cursor-pointer text-white py-2">Edit</span>
      </button>
      <button value={user._id} onClick = {handleDelete}  className="px-2">
        <span className="bg-red-600  hover:bg-red-300 px-3 rounded-md cursor-pointer text-white py-2">Delete</span>
      </button>
      </td>
    </>
  )
}

export default UserList;