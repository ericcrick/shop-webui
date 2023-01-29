import Link from "next/link"
import React from "react"
import { signIn, signOut, useSession } from "next-auth/react";
import { useEffect } from 'react';


type DashboardLayoutProps = {
  children: React.ReactNode,
};

export default function Layout({ children }: DashboardLayoutProps){
  const { data: session, status } = useSession();
  useEffect(() => {
    if (status === 'unauthenticated') signIn();
  }, [status]);

  if (status !== 'authenticated') {
    return <h2>Loading...</h2>;
  }
  return(
    <>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">Shop</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center text-indigo-600">
            <Link  href="/" className="mr-5 hover:text-gray-900">Home</Link>
            <Link href= "/user" className="mr-5 hover:text-gray-900">Users</Link>
            <Link href= "/product" className="mr-5 hover:text-gray-900">Products</Link>
          </nav>
          {!session && status == "unauthenticated" && (
            <Link className="px-3" href="/api/auth/signin" onClick={(e) => {
                    e.preventDefault();
                    signIn('github');
            }}>
            <button  className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
              Log In
            </button>
            </Link>
          )}

          {session && status == 'authenticated' && (
            <Link href="/api/auth/signout" onClick={(e) => {
                e.preventDefault();
                signOut();
              }}>
            <button  className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
              LogOut
            </button>
            </Link>
          )}
        </div>
      </header>

      <main>{children}</main>
    </>
  )
}