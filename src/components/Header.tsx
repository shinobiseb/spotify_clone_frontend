import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import { useState } from 'react';

export default function Header() {


  return (
    <div className='flex flex-row justify-between items-center h-16 z-100'>
        <button className='ml-5 bg-black px-2 py-1 rounded-full'>
            <ArrowBackIosNewRoundedIcon className='icon' 
                        style={{ 
                        color: 'white', 
                        fontSize: '1.2rem'}}/>
        </button>

        <div className='flex w-3/4 max-w-lg justify-around items-center'>
            <button className='search-link hidden md:inline-block'>Premium</button>
            <button className='search-link hidden md:inline-block'>Support</button>
            <button className='search-link hidden md:inline-block'>Download</button>
            <div className='bar'></div>
            <button className='search-link'>Sign up</button>
            <button className='white-button'>Log in</button>
        </div>
    </div>
  )
}
