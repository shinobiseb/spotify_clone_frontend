import React from 'react'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import LibraryMusicRoundedIcon from '@mui/icons-material/LibraryMusicRounded';

export default function Nav() {
  return (
    <div className='nav block w-navSize'>
        {/* ----------- Header -----------*/}
        <ul className='nav-div bg-bg-black text-lg block py-2 px-3 rounded-lg'>
            <li className='nav-li'>
                <a className='nav-item flex' href="#Home"> 
                    <HomeRoundedIcon className='icon' style={{ 
                        color: '#a5a5a5', 
                        fontSize: '2rem'
                        }}/>
                    <span>Home</span>
                </a>
            </li>
            <li className='nav-li'>
                <a className='nav-item flex' href="#search"> 
                    <SearchRoundedIcon className='icon' style={{ 
                        color: '#a5a5a5', 
                        fontSize: '2rem'
                        }}/>
                    <span className='pl-4'>Search</span>
                </a>
            </li>  
        </ul>
        {/* ----------- End of Header -----------*/}

        {/* ----------- Library -----------*/}
        <div className='library nav-div bg-bg-black text-lg py-2 px-3 rounded-lg mt-2 block'>
            <div className='w-full flex justify-between items-center'>
                <button className='nav-item flex-row'> 
                    <LibraryMusicRoundedIcon className='icon' 
                        style={{ 
                        color: '#a5a5a5', 
                        fontSize: '2rem'
                        }}/>
                    <span className='pl-3'> Your Library </span>
                </button>
                    <AddRoundedIcon className='icon' 
                        style={{ 
                        color: '#a5a5a5', 
                        fontSize: '2rem'
                        }}/>
            </div>
            <section className='bg-nav-bg-grey rounded-lg text-white px-5 py-4 justify-items-start w-full flex flex-col justify-between my-2 flex-start min-h-full h-36'>
                    <span className=' text-md font-bold'>Create your first playlist</span>
                    <span className='block text-sm'>It's easy, we'll help you</span>
                <button className='bg-white text-black rounded-2xl font-bold px-3 py-1 w-40 mt-4'>
                    Create Playlist</button>
            </section>
        </div>
    </div>
  )
}
