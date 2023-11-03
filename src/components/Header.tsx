import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div>
      <header className=" body-font text-white bg-gray-900 max-h-screen">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
  <Link href="/" className="flex items-center">
                  <Image src="/logo.png" width={100} height={100} className="h-20" alt=" Logo"></Image>
                  <span className="self-center text-2xl font-bold whitespace-nowrap ">BEETABOX</span>
              </Link>
    <nav className="md:ml-auto md:mr-auto font-bold flex flex-wrap items-center text-base justify-center">
      <a className="mr-5 hover:text-gray-900 hover:cursor-pointer uppercase">Features</a>
      <a className="mr-5 hover:text-gray-900 hover:cursor-pointer uppercase">pricing</a>
      <a className="mr-5 hover:text-gray-900 hover:cursor-pointer uppercase">docs</a>
      <a className="mr-5 hover:text-gray-900 hover:cursor-pointer uppercase">Contact</a>
    </nav>
    
  </div>
  
    <section className="text-white mt-16 flex justify-center items-center h-[900px] ">
    <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl dark:text-white">Discover, Stream and Share your Soundtrack with Beatbox</h1>
        <p className="mb-8 text-lg font-normal text-white lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">Your world of music, all in one place</p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <Link href="/" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-800 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
               Sign  up
                <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </Link>
            <Link href="/" className="inline-flex justify-center items-center py-4 px-8 text-base font-bold text-center text-gray-900 rounded-lg 
            bg-blue-500 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                Start trial
            </Link>  
        </div>
    <div className='mt-16'>
        <Image src='/image.jpg' width={800} height={100} alt="image" className='mx-auto w-auto md:w-[800px]'></Image>
    </div>
    </div>
    
    </section>

</header>
    </div>
  )
}

export default Header
