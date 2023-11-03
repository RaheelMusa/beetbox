import React from 'react'
import { GrPlay } from 'react-icons/gr'
import { TbActivityHeartbeat } from 'react-icons/tb'
import { FaWifi } from 'react-icons/fa'
import {  FaMicrophoneLines } from 'react-icons/fa6'
import { CiMobile2, CiUser } from 'react-icons/ci'
import { PiDeviceMobileCameraBold } from 'react-icons/pi'
import { BsHeadphones, BsBook, Bs0Circle } from 'react-icons/bs'
import { HiMiniArrowUpTray } from 'react-icons/hi2'

import { AiOutlineUnorderedList } from 'react-icons/ai'

const FeatureList = () => {
  return (
    <>
      <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto  px-6 lg:px-8">
               <div className="mx-auto  text-center">
                  <h2 className="text-3xl  md:text-6xl font-bold  text-blue-950">Features</h2>
                  <p className="mt-4 text-base md:text-lg  font-bold tracking-tight text-gray-900 sm:text-sm">Discover your endless possibilities with BeatBox</p>
               
               </div>
               <div className="mx-auto mt-16  sm:mt-20 lg:mt-24 ">
                  <dl className="grid  grid-cols-1 md:grid-cols-2 gap-10 lg:max-w-none lg:grid-cols-4 lg:gap-y-16">
                     <div className="relative ">
                        <dt className="text-base  flex  items-center font-semibold leading-7 text-gray-900">
                           <div className="flex h-10 w-10 items-center justify-center rounded-lg ">
                              <GrPlay size={30} />
                           </div>
                          <h4 className=' text-lg md:text-2xl font-bold text-blue-950'> Personalized playlist</h4>
                        </dt>
                        <dd className="mt-2 text-base md:text-lg font-bold ">Tailor playlist based on your music performances</dd>
                     </div>
                     <div className="relative ">
                        <dt className="text-base  flex  items-center font-semibold leading-7 text-gray-900">
                           <div className="flex h-10 w-10 items-center justify-center rounded-lg ">
                              <TbActivityHeartbeat size={30} />
                           </div>
                          <h4 className=' text-lg md:text-2xl font-bold text-blue-950'> High-Quality Streaming</h4>
                        </dt>
                        <dd className="mt-2 text-base md:text-lg font-bold ">Tailor playlist based on your music performances</dd>
                     </div>
                     <div className="relative ">
                        <dt className="text-base  flex  items-center font-semibold leading-7 text-gray-900">
                           <div className="flex h-10 w-10 items-center justify-center rounded-lg ">
                              <FaWifi size={30} />
                           </div>
                          <h4 className=' text-lg md:text-2xl font-bold text-blue-950'> Wifi Listening</h4>
                        </dt>
                        <dd className="mt-2 text-base md:text-lg font-bold ">Tailor playlist based on your music performances</dd>
                     </div>
                     <div className="relative ">
                        <dt className="text-base  flex  items-center font-semibold leading-7 text-gray-900">
                           <div className="flex h-10 w-10 items-center justify-center rounded-lg ">
                              <CiMobile2 size={30} />
                           </div>
                          <h4 className=' text-lg md:text-2xl font-bold text-blue-950'> Cross-Platform Sync</h4>
                        </dt>
                        <dd className="mt-2 text-base md:text-lg font-bold ">Tailor playlist based on your music performances</dd>
                     </div>
                     <div className="relative ">
                        <dt className="text-base  flex  items-center font-semibold leading-7 text-gray-900">
                           <div className="flex h-10 w-10 items-center justify-center rounded-lg ">
                              <AiOutlineUnorderedList size={30} />
                           </div>
                          <h4 className=' text-lg md:text-2xl font-bold text-blue-950'> Curated playlists</h4>
                        </dt>
                        <dd className="mt-2 text-base md:text-lg font-bold ">Tailor playlist based on your music performances</dd>
                     </div>
                     <div className="relative ">
                        <dt className="text-base  flex  items-center font-semibold leading-7 text-gray-900">
                           <div className="flex h-10 w-10 items-center justify-center rounded-lg ">
                              <BsBook size={30} />
                           </div>
                          <h4 className=' text-lg md:text-2xl font-bold text-blue-950'> Multi Genre Library</h4>
                        </dt>
                        <dd className="mt-2 text-base md:text-lg font-bold ">Tailor playlist based on your music performances</dd>
                     </div>
                     <div className="relative ">
                        <dt className="text-base  flex  items-center font-semibold leading-7 text-gray-900">
                           <div className="flex h-10 w-10 items-center justify-center rounded-lg ">
                              <PiDeviceMobileCameraBold size={30} />
                           </div>
                          <h4 className=' text-lg md:text-2xl font-bold text-blue-950'> Lyrics</h4>
                        </dt>
                        <dd className="mt-2 text-base md:text-lg font-bold ">Tailor playlist based on your music performances</dd>
                     </div>
                     <div className="relative ">
                        <dt className="text-base  flex  items-center font-semibold leading-7 text-gray-900">
                           <div className="flex h-10 w-10 items-center justify-center rounded-lg ">
                              <HiMiniArrowUpTray size={30} />
                           </div>
                          <h4 className=' text-lg md:text-2xl font-bold text-blue-950'> Social sharing</h4>
                        </dt>
                        <dd className="mt-2 text-base md:text-lg font-bold "> Tailor playlist based on your music performances</dd>
                     </div>
                     <div className="relative ">
                        <dt className="text-base  flex  items-center font-semibold leading-7 text-gray-900">
                           <div className="flex h-10 w-10 items-center justify-center rounded-lg ">
                              <BsHeadphones size={30} />
                           </div>
                          <h4 className=' text-lg md:text-2xl font-bold text-blue-950'>Podcast Hub </h4>
                        </dt>
                        <dd className="mt-2 text-base md:text-lg font-bold ">Tailor playlist based on your music performances</dd>
                     </div>
                    
                     
                     <div className="relative ">
                        <dt className="text-base  flex  items-center font-semibold leading-7 text-gray-900">
                           <div className="flex h-10 w-10 items-center justify-center rounded-lg ">
                              <CiUser size={30} />
                           </div>
                          <h4 className=' text-lg md:text-2xl font-bold text-blue-950'> Artist Insight</h4>
                        </dt>
                        <dd className="mt-2 text-base md:text-lg font-bold ">Tailor playlist based on your music performances</dd>
                     </div>
                     <div className="relative ">
                        <dt className="text-base  flex  items-center font-semibold leading-7 text-gray-900">
                           <div className="flex h-10 w-10 items-center justify-center rounded-lg ">
                              <FaMicrophoneLines size={30} />
                           </div>
                          <h4 className=' text-lg md:text-2xl font-bold text-blue-950'>Voice Commands </h4>
                        </dt>
                        <dd className="mt-2 text-base md:text-lg font-bold ">Tailor playlist based on your music performances</dd>
                     </div>
                     <div className="relative ">
                        <dt className="text-base  flex  items-center font-semibold leading-7 text-gray-900">
                           <div className="flex h-10 w-10 items-center justify-center rounded-lg ">
                              <Bs0Circle size={30} />
                           </div>
                          <h4 className=' text-lg md:text-2xl font-bold text-blue-950'> Mixtapes</h4>
                        </dt>
                        <dd className="mt-2 text-base md:text-lg font-bold ">Tailor playlist based on your music performances</dd>
                     </div>
                    
                     
                  </dl>
               </div>
            </div>
         </div> 
    </>
  )
}

export default FeatureList
