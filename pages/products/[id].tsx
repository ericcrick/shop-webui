import { useRouter } from "next/router"

export default function ProductDetail(){

  const router = useRouter();
  return <h2>Product Detail: {router.query.id }</h2>
}