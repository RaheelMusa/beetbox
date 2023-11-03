import FeatureList from '../components/FeatureList'
import Header from '../components/Header'
import React from 'react'
import { FiCheckCircle } from 'react-icons/fi'
import { BsXCircle } from 'react-icons/bs'
import Footer from '../components/Footer'
import Link from 'next/link'

const Home = () => {
   return (
      <>
         <div className='min-h-screen'>
            <div className='min-h-screen'>

               <Header />
            </div>
            <section className=" body-font my-16 py-16">

               <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
                  <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl dark:text-gray-500">1000 + Customers Trust BeatBox</h1>
                  <p className="mb-8 text-lg font-normal lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">They saved over $500 each compared to other streaming services</p>
                  <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                  </div>

               </div>

               <div className="grid mb-8  rounded-lg shadow-sm  md:mb-12 md:grid-cols-3">
                  <figure className="flex flex-col  p-8  bg-white  rounded-t-lg md:rounded-t-none md:rounded-tl-lg dark:bg-gray-800">
                     <blockquote className="max-w-2xl mx-auto mb-4 text-black font-medium   md:text-lg lg:mb-8">

                        <p className="my-4">"As a music enthusiast and record label owner, I've tried numerous music streaming apps. Beatbox is the game-changer I've been waiting for. It offers the perfect blend of discoverability and personalization "</p>
                     </blockquote>
                     <figcaption className="flex md:text-start  space-x-3">
                        <img className="rounded-full w-9 h-9" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" alt="profile picture" />
                        <div className="space-y-0.5 font-bold text-black text-left">
                           <div>Bonnie Green</div>
                           <div className="text-sm  font-medium ">CEO, Acoustic Harmony Records</div>
                        </div>
                     </figcaption>
                  </figure>
                  <figure className="flex flex-col  p-8 bg-white   rounded-tr-lg ">
                     <blockquote className="max-w-2xl mx-auto mb-4 text-black font-medium  md:text-lg lg:mb-8">

                        <p className="my-4">"I've been a music blogger for years, and Beatbox has simplified my music discovery process. It's intuitive, and the personalized playlists keep my readers engaged"</p>
                     </blockquote>
                     <figcaption className="flex  space-x-3">
                        <img className="rounded-full w-9 h-9" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png" alt="profile picture" />
                        <div className="space-y-0.5 font-bold text-left">
                           <div>Alex parker</div>
                           <div className="text-sm font-medium">Music Bloggers</div>
                        </div>
                     </figcaption>
                  </figure>
                  <figure className="flex flex-col  p-8 bg-white  rounded-bl-lg   dark:bg-gray-800">
                     <blockquote className="max-w-2xl mx-auto mb-4 text-black font-medium  md:text-lg lg:mb-8">

                        <p className="my-4">"Being an independent artist, Beatbox has given me the platform ot reach a broader audience. The seamless sharing features and analytics have been a game-changer for my music career."</p>
                     </blockquote>
                     <figcaption className="flex  space-x-3">
                        <img className="rounded-full w-9 h-9" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="profile picture" />
                        <div className="space-y-0.5 font-bold  text-left">
                           <div>David Nguyen</div>
                           <div className="text-sm font-medium">Artist at GroveMakers</div>
                        </div>
                     </figcaption>
                  </figure>

               </div>



            </section>
         </div>


         {/*  Features Section              */}



         <FeatureList />

         <div>
            <div className="hero max-h-screen my-10 bg-blue-950 text-white">
               <div className="flex-col gap-10 lg:flex-row">
                  <div className="mx-auto py-20 text-center">
                     <h2 className="text-3xl  md:text-6xl font-bold">Unleshed your musical journey</h2>
                     <p className="mt-4 text-base md:text-lg  font-bold tracking-tight  sm:text-sm">Discover new genres artist and hidden gems effortlessly</p>
                     <hr className='border-2 border-solid border-white w-[10%] mx-auto mt-5' />

                  </div>

               </div>
               <div className='py-10 md:flex md:justify-evenly'>

                  <video className="w-full p-5 md:w-3/5 max-auto" controls>
                     <source src="https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/rvHltJTkjl7hoo5ds/videoblocks-0z_slice_tower_bm0dg97us__400b5a7c521ffd5afaabedb7780152db__P360.mp4" type="video/mp4" />
                     Your browser does not support the video tag.
                  </video>
                  <div className='flex flex-col justify-center'>
                     <div className='text-base flex items-center gap-2 md:text-2xl font-medium mb-10'><span><FiCheckCircle size={30} /> </span>Find music based on your mood</div>
                     <div className='text-base flex items-center gap-2 md:text-2xl font-medium mb-10'><span><FiCheckCircle size={30} /> </span>Find music based on your mood</div>
                     <div className='text-base flex items-center gap-2 md:text-2xl font-medium mb-10'><span><FiCheckCircle size={30} /> </span>Find music based on your mood</div>
                     <div className='text-base flex items-center gap-2 md:text-2xl font-medium mb-10'><span><FiCheckCircle size={30} /> </span>Find music based on your mood</div>

                  </div>
               </div>
            </div>
         </div>



         <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
               <div className="mx-auto py-20 text-center">
                  <h2 className="text-3xl  md:text-6xl font-bold">How it works</h2>
                  <p className="mt-4 text-base md:text-3xl  font-semibold tracking-tight  sm:text-sm">Get set up in 3 simple step</p>
                  <hr className='border-2 border-solid border-white w-[10%] mx-auto mt-5' />

               </div>
               <div className="flex flex-wrap -m-4">
                  <div className="p-4 md:w-1/3 mb-3">
                     <div className="flex rounded-lg h-full p-8 flex-col">
                        <div className="flex items-center mb-3">
                           <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-950 text-white font-bold text-lg flex-shrink-0">
                              1
                           </div>
                           <h2 className="text-gray-950 md:text-2xl text-base  font-bold">Sign up</h2>
                        </div>
                        <div className="flex-grow">
                           <p className="text-black md:text-xl text-base">Create an account, and start exploring your personalized music journey</p>

                        </div>
                     </div>
                  </div>
                  <div className="p-4 md:w-1/3 mb-3">
                     <div className="flex rounded-lg h-full p-8 flex-col">
                        <div className="flex items-center mb-3">
                           <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-950 text-white font-bold text-lg flex-shrink-0">
                              2
                           </div>
                           <h2 className="text-gray-950 md:text-2xl text-base  font-bold">Customize your profile</h2>
                        </div>
                        <div className="flex-grow">
                           <p className="text-black md:text-xl text-base">Tell us your music preferences, and we'll do the rest</p>

                        </div>
                     </div>
                  </div>
                  <div className="p-4 md:w-1/3 mb-3">
                     <div className="flex rounded-lg h-full p-8 flex-col">
                        <div className="flex items-center mb-3">
                           <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-950 text-white font-bold text-lg flex-shrink-0">
                              3
                           </div>
                           <h2 className="text-gray-950 md:text-2xl text-base  font-bold">Dive into world of music</h2>
                        </div>
                        <div className="flex-grow">
                           <p className="text-black md:text-xl text-base">Stream, discover and share your favorite tune with the world</p>

                        </div>
                     </div>
                  </div>

               </div>
               <video className="w-full p-5 " controls>
                  <source src="https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/rvHltJTkjl7hoo5ds/videoblocks-0z_slice_tower_bm0dg97us__400b5a7c521ffd5afaabedb7780152db__P360.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
               </video>
            </div>
         </section>



         {/*   Pricing */}





         <div className=" px-4 bg-blue-950 text-white py-8 sm:px-6  sm:py-12 lg:px-8 lg:py-16">
            <div className="mx-auto  py-20 text-center">
               <h2 className="text-3xl  md:text-6xl font-bold">Pricing</h2>
               <p className="mt-4 text-base md:text-3xl  font-semibold tracking-tight  sm:text-sm">Join 1000s of Customers who are saving over 10$ per month</p>
               <hr className='border-2 border-solid border-white w-[10%] mx-auto mt-5' />

               <div>
                  <div className='max-w-screen-xl px-5 py-4 text-bold  md:text-2xl mx-auto my-20 bg-indigo-500 text-white'>We support purchasing power parity for citizens of Thailand. If you need it, use coupon THAI50 at checkOut </div>
               </div>

               <div
                  className="grid grid-cols-1 max-w-screen-xl mx-auto text-center gap-4 sm:grid-cols-2 sm:items-stretch md:grid-cols-3 md:gap-8"
               >
                  <div
                     className=" divide-gray-200  bg-white rounded-2xl border  border-gray-200 shadow-sm"
                  >
                     <div className="p-6 sm:px-8  text-black">
                        <h2 className="text-lg font-bold md:text-4xl mb-10">
                           Basic

                        </h2>
                        <p className="mt-2 sm:mt-4">
                           <strong className="text-5xl font-bold  sm:text-4xl">
                              20$
                           </strong>

                           <span className="text-sm font-medium ">/month</span>
                        </p>


                     </div>

                     <div className="p-6 bg-white sm:px-8 text-black">

                        <ul className="mt-2 space-y-2 sm:mt-4">
                           <li className="flex items-center gap-1">

                              <span className='h-5 w-5 mr-1'><FiCheckCircle size={22} color="green" /></span>

                              <span className="text-gray-700 font-semibold md:text-xl text-lg">Personalized Playlists </span>
                           </li>

                           <li className="flex items-center gap-1">

                              <span className='h-5 w-5 mr-1'><FiCheckCircle size={22} color="green" /></span>

                              <span className="text-gray-700 text-lg font-semibold md:text-xl">High-Quality Streaming </span>
                           </li>

                           <li className="flex items-center gap-1">

                              <span className='h-5 w-5 mr-1'><BsXCircle size={22} color="red" /></span>

                              <span className="text-gray-700 font-semibold md:text-xl text-lg">Offline listening </span>
                           </li>

                           <li className="flex items-center gap-1">

                              <span className='h-5 w-5 mr-1'><BsXCircle size={22} color="red" /></span>

                              <span className="text-gray-700 font-semibold md:text-xl text-lg">Cross-PlatForm Cross </span>
                           </li>


                           <li className="flex items-center gap-1">

                              <span className='h-5 w-5 mr-1'><BsXCircle size={22} color="red" /></span>

                              <span className="text-gray-700 font-semibold md:text-xl text-lg">Curated Playlists </span>
                           </li>


                           <li className="flex items-center gap-1">

                              <span className='h-5 w-5 mr-1'><BsXCircle size={22} color="red" /></span>

                              <span className="text-gray-700 font-semibold md:text-xl text-lg">Multi-Genre Library </span>
                           </li>
                           <li className="flex items-center gap-1">

                              <span className='h-5 w-5 mr-1'><BsXCircle size={22} color="red" /></span>

                              <span className="text-gray-700 font-semibold md:text-xl text-lg">Lyrics </span>
                           </li>
                           <li className="flex items-center gap-1">

                              <span className='h-5 w-5 mr-1'><BsXCircle size={22} color="red" /></span>

                              <span className="text-gray-700 font-semibold md:text-xl text-lg">Podcas Hub </span>
                           </li>
                           <li className="flex items-center gap-1">

                              <span className='h-5 w-5 mr-1'><BsXCircle size={22} color="red" /></span>

                              <span className="text-gray-700 font-semibold md:text-xl text-lg">Artist Insights </span>
                           </li>
                           <li className="flex items-center gap-1">

                              <span className='h-5 w-5 mr-1'><BsXCircle size={22} color="red" /></span>

                              <span className="text-gray-700 font-semibold md:text-xl text-lg">Create and share mixtapes </span>
                           </li>
                           <li className="flex items-center gap-1">

                              <span className='h-5 w-5 mr-1'><BsXCircle size={22} color="red" /></span>

                              <span className="text-gray-700 font-semibold md:text-xl text-lg">Smart Recommadations </span>
                           </li>



                        </ul>
                        <a
                           className="mt-4 block w-fit rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-center text-lg mx-auto font-bold text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500 sm:mt-6"
                           href="/"
                        >
                           START TRIAL
                        </a>
                     </div>
                  </div>

                  <div
                     className=" divide-gray-200  bg-white rounded-2xl border  border-gray-200 shadow-sm"
                  >
                     <div className="p-6 sm:px-8  text-black">
                        <h2 className="text-lg font-bold md:text-4xl mb-10">
                           Basic

                        </h2>
                        <p className="mt-2 sm:mt-4">
                           <strong className="text-5xl font-bold  sm:text-4xl">
                              20$
                           </strong>

                           <span className="text-sm font-medium ">/month</span>
                        </p>


                     </div>

                     <div className="p-6 bg-white sm:px-8 text-black">

                        <ul className="mt-2 space-y-2 sm:mt-4">
                           <li className="flex items-center gap-1">

                              <span className='h-5 w-5 mr-1'><FiCheckCircle size={22} color="green" /></span>

                              <span className="text-gray-700 font-semibold md:text-xl text-lg">Personalized Playlists </span>
                           </li>

                           <li className="flex items-center gap-1">

                              <span className='h-5 w-5 mr-1'><FiCheckCircle size={22} color="green" /></span>

                              <span className="text-gray-700 text-lg font-semibold md:text-xl">High-Quality Streaming </span>
                           </li>

                           <li className="flex items-center gap-1">

                              <span className='h-5 w-5 mr-1'><FiCheckCircle size={22} color="green" /></span>

                              <span className="text-gray-700 font-semibold md:text-xl text-lg">Offline listening </span>
                           </li>

                           <li className="flex items-center gap-1">

                              <span className='h-5 w-5 mr-1'><FiCheckCircle size={22} color="green" /></span>

                              <span className="text-gray-700 font-semibold md:text-xl text-lg">Cross-PlatForm Cross </span>
                           </li>


                           <li className="flex items-center gap-1">

                              <span className='h-5 w-5 mr-1'><FiCheckCircle size={22} color="green" /></span>

                              <span className="text-gray-700 font-semibold md:text-xl text-lg">Curated Playlists </span>
                           </li>


                           <li className="flex items-center gap-1">

                              <span className='h-5 w-5 mr-1'><FiCheckCircle size={22} color="green" /></span>

                              <span className="text-gray-700 font-semibold md:text-xl text-lg">Multi-Genre Library </span>
                           </li>
                           <li className="flex items-center gap-1">

                              <span className='h-5 w-5 mr-1'><FiCheckCircle size={22} color="green" /></span>

                              <span className="text-gray-700 font-semibold md:text-xl text-lg">Lyrics </span>
                           </li>
                           <li className="flex items-center gap-1">

                              <span className='h-5 w-5 mr-1'><BsXCircle size={22} color="red" /></span>

                              <span className="text-gray-700 font-semibold md:text-xl text-lg">Podcas Hub </span>
                           </li>
                           <li className="flex items-center gap-1">

                              <span className='h-5 w-5 mr-1'><BsXCircle size={22} color="red" /></span>

                              <span className="text-gray-700 font-semibold md:text-xl text-lg">Artist Insights </span>
                           </li>
                           <li className="flex items-center gap-1">

                              <span className='h-5 w-5 mr-1'><BsXCircle size={22} color="red" /></span>

                              <span className="text-gray-700 font-semibold md:text-xl text-lg">Create and share mixtapes </span>
                           </li>
                           <li className="flex items-center gap-1">

                              <span className='h-5 w-5 mr-1'><BsXCircle size={22} color="red" /></span>

                              <span className="text-gray-700 font-semibold md:text-xl text-lg">Smart Recommadations </span>
                           </li>



                        </ul>
                        <a
                           className="mt-4 block w-fit rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-center text-lg mx-auto font-bold text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500 sm:mt-6"
                           href="/"
                        >
                           START TRIAL
                        </a>
                     </div>
                  </div>

                  <div
                     className=" divide-gray-200  bg-white rounded-2xl border  border-gray-200 shadow-sm"
                  >
                     <div className="p-6 sm:px-8  text-black">
                        <h2 className="text-lg font-bold md:text-4xl mb-10">
                           Basic

                        </h2>
                        <p className="mt-2 sm:mt-4">
                           <strong className="text-5xl font-bold  sm:text-4xl">
                              20$
                           </strong>

                           <span className="text-sm font-medium ">/month</span>
                        </p>


                     </div>

                     <div className="p-6 bg-white sm:px-8 text-black">

                        <ul className="mt-2 space-y-2 sm:mt-4">
                           <li className="flex items-center gap-1">

                              <span className='h-5 w-5 mr-1'><FiCheckCircle size={22} color="green" /></span>

                              <span className="text-gray-700 font-semibold md:text-xl text-lg">Personalized Playlists </span>
                           </li>

                           <li className="flex items-center gap-1">

                              <span className='h-5 w-5 mr-1'><FiCheckCircle size={22} color="green" /></span>

                              <span className="text-gray-700 text-lg font-semibold md:text-xl">High-Quality Streaming </span>
                           </li>

                           <li className="flex items-center gap-1">

                              <span className='h-5 w-5 mr-1'><FiCheckCircle size={22} color="green" /></span>

                              <span className="text-gray-700 font-semibold md:text-xl text-lg">Offline listening </span>
                           </li>

                           <li className="flex items-center gap-1">

                              <span className='h-5 w-5 mr-1'><FiCheckCircle size={22} color="green" /></span>

                              <span className="text-gray-700 font-semibold md:text-xl text-lg">Cross-PlatForm Cross </span>
                           </li>


                           <li className="flex items-center gap-1">

                              <span className='h-5 w-5 mr-1'><FiCheckCircle size={22} color="green" /></span>

                              <span className="text-gray-700 font-semibold md:text-xl text-lg">Curated Playlists </span>
                           </li>


                           <li className="flex items-center gap-1">

                              <span className='h-5 w-5 mr-1'><FiCheckCircle size={22} color="green" /></span>

                              <span className="text-gray-700 font-semibold md:text-xl text-lg">Multi-Genre Library </span>
                           </li>
                           <li className="flex items-center gap-1">

                              <span className='h-5 w-5 mr-1'><FiCheckCircle size={22} color="green" /></span>

                              <span className="text-gray-700 font-semibold md:text-xl text-lg">Lyrics </span>
                           </li>
                           <li className="flex items-center gap-1">

                              <span className='h-5 w-5 mr-1'><FiCheckCircle size={22} color="green" /></span>

                              <span className="text-gray-700 font-semibold md:text-xl text-lg">Podcas Hub </span>
                           </li>
                           <li className="flex items-center gap-1">

                              <span className='h-5 w-5 mr-1'><FiCheckCircle size={22} color="green" /></span>

                              <span className="text-gray-700 font-semibold md:text-xl text-lg">Artist Insights </span>
                           </li>
                           <li className="flex items-center gap-1">

                              <span className='h-5 w-5 mr-1'><FiCheckCircle size={22} color="green" /></span>

                              <span className="text-gray-700 font-semibold md:text-xl text-lg">Create and share mixtapes </span>
                           </li>
                           <li className="flex items-center gap-1">

                              <span className='h-5 w-5 mr-1'><FiCheckCircle size={22} color="green" /></span>

                              <span className="text-gray-700 font-semibold md:text-xl text-lg">Smart Recommadations </span>
                           </li>



                        </ul>
                        <a
                           className="mt-4 block w-fit rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-center text-lg mx-auto font-bold text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500 sm:mt-6"
                           href="/"
                        >
                           START TRIAL
                        </a>
                     </div>
                  </div>
               </div>
            </div>
         </div>



         {/* Frequently Asked Question */}


         <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto  px-6 lg:px-8">
               <div className="mx-auto  text-center">
                  <h2 className="text-3xl  md:text-5xl font-bold  text-blue-950">Frequently Asked Questions</h2>
                  <p className="mt-4 text-base md:text-lg  font-bold tracking-tight text-gray-900 sm:text-sm">If you have further question you can contact us.</p>

               </div>
               <div className="mx-auto mt-16  sm:mt-20 lg:mt-24 ">
                  <dl className="grid  grid-cols-1 md:grid-cols-2 gap-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
                     <div className="relative ">
                        <dt className="text-base  flex  items-center font-semibold leading-7 text-gray-900">

                           <h4 className=' text-lg md:text-4xl font-bold text-blue-900'> Is there free trail available?</h4>
                        </dt>
                        <dd className="mt-2 text-base md:text-xl font-semi-bold text-gray-800 ">Yes, you can enjoy a 14-trail of our Premium tier to experience all the features.</dd>
                     </div>
                     <div className="relative ">
                        <dt className="text-base  flex  items-center font-semibold leading-7 text-gray-900">

                           <h4 className=' text-lg md:text-4xl font-bold text-blue-900'> Can i cancel my subscription anytime?</h4>
                        </dt>
                        <dd className="mt-2 text-base md:text-xl font-semi-bold text-gray-800 ">Yes, you can cancel your subscription at any time, and there are no cancellation fees.</dd>
                     </div>
                     <div className="relative ">
                        <dt className="text-base  flex  items-center font-semibold leading-7 text-gray-900">

                           <h4 className=' text-lg md:text-4xl font-bold text-blue-900'> Is Offline listening is available for all songs?</h4>
                        </dt>
                        <dd className="mt-2 text-base md:text-xl font-semi-bold text-gray-800 ">Offline listening is available for most songs, but some tracks maybe restricted due to licensing agreements.</dd>
                     </div>
                     <div className="relative ">
                        <dt className="text-base  flex  items-center font-semibold leading-7 text-gray-900">

                           <h4 className=' text-lg md:text-4xl font-bold text-blue-900'> How i can contact customer supports?</h4>
                        </dt>
                        <dd className="mt-2 text-base md:text-xl font-semi-bold text-gray-800 ">Our support team is available 24/7. You can contact us through our website or email.</dd>
                     </div>
                     <div className="relative ">
                        <dt className="text-base  flex  items-center font-semibold leading-7 text-gray-900">

                           <h4 className=' text-lg md:text-4xl font-bold text-blue-900'> Can i share my playlist with friends?</h4>
                        </dt>
                        <dd className="mt-2 text-base md:text-xl font-semi-bold text-gray-800 ">Yes, you can share your playlists with your friends via social sharing features.</dd>
                     </div>
                     <div className="relative ">
                        <dt className="text-base  flex  items-center font-semibold leading-7 text-gray-900">

                           <h4 className=' text-lg md:text-4xl font-bold text-blue-900'> Do you offer student discount?</h4>
                        </dt>
                        <dd className="mt-2 text-base md:text-xl font-semi-bold text-gray-800 ">Yes, we offer special discount for eligible students.</dd>
                     </div>



                  </dl>
               </div>
            </div>
         </div>


         <div className=" px-4  bg-gray-900 text-white py-8 sm:px-6  sm:py-12 lg:px-8 lg:py-16">
            <div className="mx-auto  py-20 text-center">
               <h2 className="text-3xl  md:text-6xl font-bold">Start Your Free Trail Today</h2>
               <p className="mt-4 text-base md:text-3xl  font-semibold tracking-tight  sm:text-sm">Try Beatbox today and immerse yourself in a world of music like never before</p>
               <hr className='border-2 border-solid border-white w-[10%] mx-auto mt-5' />

               <div className='mt-16 flex flex-wrap mx-auto items-center justify-center gap-10'>
               <Link href="/" className="inline-flex justify-center items-center py-4 px-24  text-base font-bold text-center  md:text-2xl uppercase text-white rounded-lg 
            bg-blue-500 hover:bg-indigo-800 focus:ring-4  ">
                sign up
            </Link>  
               <Link href="/" className="inline-flex justify-center items-center py-4 px-24 text-base font-bold text-center bg-opacity-30 md:text-2xl uppercase text-white rounded-lg 
            bg-transparent border-2 border-white  focus:ring-4  ">
                sign up
            </Link>  
            
               </div>
            </div>
         </div>
         <Footer />
      </>
   )
}

export default Home
