
function ProductList({products}:any){
  return <>
  <h2>{products}</h2>
  </>
}

export default ProductList

export async function getStaticProps(){
  const response = await fetch('https://shopweb-api.herokuapp.com/products');
  const data = await response.json();

  return {
    props: {
      products: data
    }
  }
}