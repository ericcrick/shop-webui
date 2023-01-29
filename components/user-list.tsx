function UserList({ user }: any){
  return (
    <>
      <td className="px-4 py-3">{user._id}</td>
      <td className="px-4 py-3">{user.name}</td>
      <td className="px-4 py-3">{user.email}</td>
      <td className="px-4 py-3 text-lg text-gray-900">{user.role}</td>
      <td className="w-10 text-center">
        <input name="plan" type="button"/>
        <span className="bg-green-600 px-2 rounded-md cursor-pointer text-white py-2">Edit</span>
      </td>
      <td className="w-10 text-center">
        <input name="plan" type="button"/>
        <span className="bg-red-600 px-2 rounded-md cursor-pointer text-white py-2">Delete</span>
      </td>
    </>
  )
}

export default UserList;