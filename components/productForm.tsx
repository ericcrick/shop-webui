const ProductForm = ()=>{
    return(
        <>
        <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">

            <div className="lg:w-2/3 md:w-1/2 bg-white w-full md:py-8 mt-8 md:mt-0">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Create New Product</h2>
            <p className="leading-relaxed mb-5 text-gray-600 text-sm">Create New Product That will be visible for other users to buy</p>
            <div className="relative mb-4">
                <label htmlFor="name" className="leading-7 text-sm text-gray-600">Product Name</label>
                <input required type="text" id="productName" name="productName" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
            <div className="relative mb-4">
                <label htmlFor="productPrice" className="leading-7 text-sm text-gray-600">Product Price</label>
                <input required type="number" id="productPrice" name="productPrice" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
            <div className="relative mb-4">
                <label htmlFor="productDescription" className="leading-7 text-sm text-gray-600">Product Description</label>
                <textarea id="productDescription" name="productDescription" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
            </div>
            <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Save</button>
            </div>
        </div>
        </section>
        </>
    )
}

export default ProductForm;
