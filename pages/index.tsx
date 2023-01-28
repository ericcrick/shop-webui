import { Inter } from '@next/font/google'
import Login from './login'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <>
      <div className='container'>
        <h2>Welcome</h2>
      </div>

      {/* <Login/> */}
    </>
  )
}
