import React from 'react';
import { SubWallet } from '../assets';


const Signin = () => {
  return (
    <div>
      <div class="flex flex-col justify-center items-center h-[100vh]">
            <div class="!z-5 relative  rounded-[20px] max-w-[300px]  bg-clip-border shadow-3xl shadow-shadow-500 flex flex-col w-full !p-6 3xl:p-![18px] bg-secondary undefined">
                 
            <div class="relative flex flex-row justify-between">
                <h4 class="text-xl font-bold text-navy-700 dark:text-white">
                    Sign Up
                </h4>
            </div>
 
            <div class="h-full w-full mt-5 flex flex-row"> 
                <img src={ SubWallet } alt="SubWallet" className='h-16 w-16' />
                <button class="rounded-xl bg-gradient-to-br from-[#6025F5] to-[#FF5555] px-10 py-2 text-base font-medium text-white transition duration-200 hover:shadow-lg hover:shadow-[#6025F5]/50">
                SubWallet
                </button>
            </div>   
        </div>
        </div>
    </div>
  )
}

export default Signin
