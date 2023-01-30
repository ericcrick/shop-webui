import React, { useReducer, useState } from "react";
import { useRouter } from "next/router";

const formReducer = (state: any, event: any) => {
  return {
    ...state,
    [event.target.name]: event.target.value
  }
}

interface statusType{
    message: string,
    status: number,
}
const ProductForm = ()=>{
    const [formData, setFormData] = useReducer(formReducer, {});
    const router = useRouter();

    //handle form submit
    const handleFormSubmit = async (e:React.FormEvent<HTMLFormElement>| any)=>{
        try {
            e.preventDefault();
            const response = await fetch('https://shopweb-api.herokuapp.com/products', {
                method: 'POST',
                body: JSON.stringify(formData),
                mode: 'cors',
                credentials: 'same-origin',
                cache: 'no-cache',
                headers: {
                  'Content-Type': 'application/json'
                }
              });
    
              const data = await response.json();
              if(!data?.message &&  (data?.productName !== undefined || null )){
                alert("Product Added")
                router.reload();
                return;
              }
              alert(data?.message)
        } catch (error) {
            alert("No Iternet Access");
            return;
        }
    }
    return(
        <>
        <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">

            <div className="lg:w-2/3 md:w-1/2 bg-white w-full md:py-8 mt-8 md:mt-0">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Create New Product</h2>
            <p className="leading-relaxed mb-5 text-gray-600 text-sm">Create New Product That will be visible for other users to buy</p>
            <div className="relative mb-4">
                <label htmlFor="productName" className="leading-7 text-sm text-gray-600">Product Name</label>
                <input required onChange={setFormData} type="text" id="productName" name="productName" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
            <div className="relative mb-4">
                <label htmlFor="productPrice" className="leading-7 text-sm text-gray-600">Product Price</label>
                <input required onChange={setFormData} type="number" id="productPrice" name="productPrice" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
            <div className="relative mb-4">
                <label htmlFor="productDescription" className="leading-7 text-sm text-gray-600">Product Description</label>
                <textarea onChange={setFormData} id="productDescription" name="productDescription" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
            </div>
            <button onClick={ handleFormSubmit } className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Save</button>
            </div>
        </div>
        </section>
        </>
    )
}

export default ProductForm;
