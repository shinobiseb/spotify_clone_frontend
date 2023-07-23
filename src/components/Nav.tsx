import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import LibraryMusicRoundedIcon from '@mui/icons-material/LibraryMusicRounded';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';

export default function Nav() {
  return (
    <div className='nav flex flex-col h-screen w-navSize'>
        {/* ----------- Header -----------*/}
        <ul className='nav-div bg-bg-black text-lg block py-3 px-3 rounded-lg'>
            <li className='nav-li'>
                <a className='other-link nav-item flex' href="#Home"> 
                    <HomeRoundedIcon className='icon' style={{ 
                        color: '#a5a5a5', 
                        fontSize: '2rem',
                        }}/>
                    <span>Home</span>
                </a>
            </li>
            <li className='nav-li'>
                <a className='other-link nav-item flex' href="#search"> 
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
        <div className='library nav-div bg-bg-black text-lg py-2 px-3 rounded-lg mt-2 flex flex-col h-full justify-between'>
            <div className="library-header">
                <div className='w-full py-1 flex justify-between items-center'>
                    <button className='nav-item flex-row'> 
                        <LibraryMusicRoundedIcon className='icon' 
                            style={{ 
                            color: '#a5a5a5', 
                            fontSize: '2rem'
                            }}/>
                        <span className='other-link pl-3'> Your Library </span>
                    </button>
                        <AddRoundedIcon className='icon' 
                            style={{ 
                            color: '#a5a5a5', 
                            fontSize: '2rem'
                            }}/>
                </div></div>
            <div className='folding-div overflow-hidden'>
                
                <section className='bg-nav-bg-grey rounded-lg text-white px-5 py-4 justify-items-start w-full flex flex-col justify-between my-2 flex-start h-36'>
                        <span className=' text-md font-bold'>Create your first playlist</span>
                        <span className='block text-sm'>It's easy, we'll help you</span>

                        <button className='bg-white text-black rounded-2xl font-bold py-1 w-40 mt-4'>
                        Create playlist
                    </button>
                </section>
        {/* ----------- End of Library -----------*/}

        {/* ----------- Podcasts -----------*/}
            <section className='bg-nav-bg-grey rounded-lg text-white px-5 py-4 justify-items-start w-full flex flex-col justify-between my-6 flex-start h-44'>
                <span className=' text-md font-bold'>Browse Playlists</span>
                <span className='block text-sm'>We'll keep you updated on new episodes</span>
                
                <button className='bg-white text-black rounded-2xl font-bold py-1 w-40'>
                    Browse podcasts
                </button>
            </section>
        </div>
        {/* ----------- End of Podcasts -----------*/}

        {/* ----------- Links -----------*/}
            <div className='bottom-links-cont px-1 flex-wrap flex '>
                <div className='link-cont'>
                    <a href="#">Legal</a>
                </div>
                <div className='link-cont'>
                    <a href="#">Privacy Center</a>
                </div>
                <div className='link-cont'>
                    <a href="#">Privacy Policy</a>
                </div>
                <div className='link-cont'>
                    <a href="#">Cookies</a>
                </div>
                <div className='link-cont'>
                    <a href="#">Abouts Ads</a>
                </div>
                <div className='link-cont'>
                    <a href="#">Accessibility</a>
                </div>
                <div className='link-cont'>
                    <a href="#">Notice at Collection</a>
                </div>
                <div className='link-cont'>
                    <a href="#">Your Privacy Choices</a>
                </div>
                <a className='link-cont' href="#cookies">Cookies</a>
            </div>
            <button className='border border-white rounded-3xl px-4 py-1 flex mb-10 ml-5 w-28 justify-center'>
                <LanguageRoundedIcon style={{ 
                    color: 'white', 
                    }}/>
                <span className='ml-1 text-white'>English</span>
            </button>
        </div>
    </div>
  )
}
