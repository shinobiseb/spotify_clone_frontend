import React from 'react'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import LibraryMusicRoundedIcon from '@mui/icons-material/LibraryMusicRounded';

export default function Nav() {
  return (
    <>
        <nav className='block w-64'>
                <ul className='nav-div bg-bg-black text-lg block py-2 px-3 rounded-lg'>
                    <li className='nav-li'>
                        <a className='nav-link' href="#Home"> 
                            <HomeRoundedIcon style={{ color: '#a5a5a5'}}/>
                            <span>Home</span>
                        </a>
                    </li>
                    <li className='nav-li'>
                        <a className='nav-link' href="#search"> 
                            <SearchRoundedIcon style={{ color: '#a5a5a5'}}/>
                            <span>Search</span>
                        </a>
                    </li>  
                </ul>

        </nav>
    </>
  )
}
