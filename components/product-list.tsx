function ProductList({ products }: any){
  return (
    <>
      <td className="px-4 py-3">{products._id}</td>
      <td className="px-4 py-3">{products.productName}</td>
      <td className="px-4 py-3">{products.productDescription}</td>
      <td className="px-4 py-3 text-lg text-gray-900">{products.productPrice}</td>
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

export default ProductList;