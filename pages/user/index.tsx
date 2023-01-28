import User from "@/components/user";

function UserList({ users }:any){
  return <>
      {
      <div className="container flex justify-center mx-auto p-8 mt-8">
      <div className="flex flex-col w-full h-full">
        <div className="w-full">
          <div className="border-b border-gray-200 shadow">
            <table className="divide-y divide-green-400 w-full h-full ">
              <thead className="bg-gray-50 w-full flex-1 text-left">
                <tr>
                  <th className="px-6 py-2 text-xs text-gray-500">
                    ID
                  </th>
                  <th className="px-6 py-2 text-xs text-gray-500">
                    Name
                  </th>
                  <th className="px-6 py-2 text-xs text-gray-500">
                    Email
                  </th>
                  <th className="px-6 py-2 text-xs text-gray-500">
                    Role
                  </th>
                  <th className="px-6 py-2 text-xs text-gray-500">
                    Edit
                  </th>
                  <th className="px-6 py-2 text-xs text-gray-500">
                    Delete
                  </th>
                </tr>
              </thead>
                {
                  users.map((user: any)=>{
                      return (
                          <tbody key={user._id} className="bg-white divide-y divide-gray-300">
                            <User user={user}/>
                          </tbody>
                      )
                    })
                  }
            </table>
          </div>
        </div>
      </div>
    </div>
      }
    </>
}


export async function getStaticProps(){
  const response = await fetch('https://shopweb-api.herokuapp.com/user');
  const data = await response.json();

  return {
    props: {
      users: data
    }
  }
}

export default UserList