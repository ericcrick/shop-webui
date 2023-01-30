import React, { useState } from "react";
import { useRouter } from "next/router";

function ProductList({ products }: any){
  const router = useRouter();
  const handleDelete = async(event: React.FormEvent<HTMLFormElement | any>)=>{
    event.preventDefault();
    const decision = confirm(" Are you sure you want to delete this product")
    if(decision !== false){
      
      const productId = event.currentTarget.value
      
      const response = await fetch(`https://shopweb-api.herokuapp.com/products/${productId}`, {
        method: 'DELETE',
        mode: 'cors',
        credentials: 'same-origin',
        cache: 'no-cache',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const data = await response.json();
      alert("Product deleted successfully")
      router.reload();
    }

  }
  return (
    <>
      <td className="px-4 py-3">{products._id}</td>
      <td className="px-4 py-3">{products.productName}</td>
      <td className="px-4 py-3">{products.productDescription}</td>
      <td className="px-4 py-3 text-lg text-gray-900">{products.productPrice}</td>
      <td className="py-4 flex justify-between">
      <div className="px-2">
        <span className="bg-green-300 hover:bg-green-600 px-3 rounded-md cursor-pointer text-white py-2">Edit</span>
      </div>
      <button value={products._id} onClick = {handleDelete} className="px-2">
        <span className="bg-red-600  hover:bg-red-300 px-3 rounded-md cursor-pointer text-white py-2">Delete</span>
      </button>
      </td>
    </>
  )
}

export default ProductList;