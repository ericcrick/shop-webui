function UserList({ user }: any){
  return (
    <>
      <td className="px-4 py-3">{user._id}</td>
      <td className="px-4 py-3">{user.name}</td>
      <td className="px-4 py-3">{user.email}</td>
      <td className="px-4 py-3 text-lg text-gray-900">{user.role}</td>
      <td className="py-4 flex justify-between">
      <div className="px-2">
        <input name="plan" type="button"/>
        <span className="bg-green-300 hover:bg-green-600 px-3 rounded-md cursor-pointer text-white py-2">Edit</span>
      </div>
      <div className="px-2">
        <input name="plan" type="button"/>
        <span className="bg-red-600  hover:bg-red-300 px-3 rounded-md cursor-pointer text-white py-2">Delete</span>
      </div>
      </td>
    </>
  )
}

export default UserList;