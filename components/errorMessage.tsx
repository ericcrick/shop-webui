const ErrorMessage = ({submitted}:any)=>{
  return(
    <>
    { submitted && submitted ===true &&(
            <div className="error container mx-auto">
            <div className="flex justify-center mx-auto border border-red-500 bg-red-500 w-3/6 text-gray-900 my-4 text-center bg-opacity-5">
              Invalid Form Data Server Error
            </div>
          </div>
    )}
    </>
  )
}

export default ErrorMessage;