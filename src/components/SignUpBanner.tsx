import React from 'react'

export default function SignUpBanner() {
  return (
    <div className='flex flex-row p-4 items-center justify-between bg-gradient-to-r from-gradient-pink to-gradient-blue mt-2'>
        <div className='sign-up-text text-white'>
            <span className=''>PREVIEW OF SPOTIFY</span>
            <p className='text-lg'>Sign up to get unlimited songs and podcasts with occasional ads. No credit card needed.</p>
        </div>
        <button className='white-button'>
            Sign up free
        </button>
    </div>
  )
}
