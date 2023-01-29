
const SuccessMessage = ({submitted}:any)=>{
  return(
    <>
    {
      submitted && submitted === true&&(
        <div className="success container mx-auto">
        <div className="flex justify-center mx-auto border border-green-500 bg-green-500 w-3/6 text-gray-900 my-4 text-center bg-opacity-5">
        Product Saved
        </div>
      </div>
      )
    }
    </>
  )
}

export default SuccessMessage;