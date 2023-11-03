import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FiFacebook, FiInstagram, FiTwitter, FiYoutube } from 'react-icons/fi'

const Footer = () => {
  return (
    <div>
      
<footer className="bg-white mt-16">
    <div className=" w-full mx-auto container p-4 py-6 lg:py-8">
        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4">
          <div className="mb-6 md:mb-0">
              <Link href="/" className="flex items-center justify-center md:justify-start">
                  <Image src="/logo.png" width={100} height={100} className="h-20" alt=" Logo"></Image>
                  <span className="self-center text-2xl font-bold whitespace-nowrap ">BEETABOX</span>
              </Link>
              <p className='text-xl mx-auto md:text-start md:w-full text-center w-1/2 text-gray-900'>Beatbox Ltd. Registered in the UK. #123456. 19 AnyTown Street, Belfast, United Kingdom</p>
          </div>
          {/* <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3"> */}
              <div>
                  <h2 className="mb-6 text-2xl font-bold text-center text-blue-950 uppercase ">Resources</h2>
                  <ul className=" text-xl underline font-medium text-center">
                      <li className="mb-2">
                          <Link href="/" className="hover:underline">About</Link>
                      </li>
                      <li className='mb-2'>
                          <Link  href="/" className="hover:underline">Blog</Link>
                      </li>
                      <li>
                          <Link href="/" className="hover:underline">Contact us</Link>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-2xl font-bold text-center text-blue-950 uppercase ">Follow us</h2>
                  <ul className="text-xl underline font-medium text-center" >
                      <li className="mb-2">
                          <Link href="https://github.com/themesberg/flowbite" className="hover:underline ">Terms</Link>
                      </li>
                      <li>
                          <Link href="https://discord.gg/4eeurUVvTy" className="hover:underline">Policy</Link>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-xl text-blue-950 font-bold text-center  uppercase ">Connect</h2>
                  <div className='flex gap-3 text-center justify-center'>
                  <Link className='hover:text-blue-500 hover:duration-300' href="#"><FiTwitter size={30} /></Link>
                  <Link className='hover:text-red-500 hover:duration-300' href="#"><FiYoutube  size={30}/></Link>
                  <Link className='hover:text-yellow-800 hover:duration-300' href="#"><FiInstagram  size={30}/></Link>
                  <Link className='hover:text-blue-500 hover:duration-300' href="#"><FiFacebook  size={30}/></Link>
                  </div>
              </div>
          {/* </div> */}
      </div>
      
    </div>
</footer>

    </div>
  )
}

export default Footer
