import React from 'react'

export default function SignUpBanner() {
  return (
    <div className='flex flex-row p-4 items-center justify-between bg-gradient-to-r from-gradient-pink to-gradient-blue'>
        <div className='sign-up-text text-white'>
            <span className='text-md'>PREVIEW OF SPOTIFY</span>
            <p className='text-lg'>Sign up to get unlimited songs and podcasts with occasional ads. No credit card needed.</p>
        </div>
        <button className='text-black font-bold px-8 py-3 bg-white rounded-3xl'>
            Sign up free
        </button>
    </div>
  )
}
