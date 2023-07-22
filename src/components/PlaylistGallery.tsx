import React from 'react'
import PlaylistCard from './PlaylistCard'

export default function PlaylistGallery() {
  return (
    <div className='px-4 mt-10'>
        <h1 className='text-white font-bold text-2xl mb-3'>Playlist</h1>
        <div className='w-full flex flex-row overflow-hidden'>
            <PlaylistCard title='Kira Jotaro' description='Loream mdsfiajdsikajfdskla fdjsklaf mvs kafajd sa;lf sdaf ksdal;j' imageUrl='https://tailschannel.com/wp-content/uploads/2020/11/Capture-1024x887.png'/>
            <PlaylistCard title='Kira Jotaro' description='Loream mdsfiajdsikajfdskla fdjsklaf mvs kafajd sa;lf sdaf ksdal;j' imageUrl='https://tailschannel.com/wp-content/uploads/2020/11/Capture-1024x887.png'/>
            <PlaylistCard title='Kira Jotaro' description='Loream mdsfiajdsikajfdskla fdjsklaf mvs kafajd sa;lf sdaf ksdal;j' imageUrl='https://tailschannel.com/wp-content/uploads/2020/11/Capture-1024x887.png'/>
            <PlaylistCard title='Kira Jotaro' description='Loream mdsfiajdsikajfdskla fdjsklaf mvs kafajd sa;lf sdaf ksdal;j' imageUrl='https://tailschannel.com/wp-content/uploads/2020/11/Capture-1024x887.png'/>
        </div>
    </div>
  )
}
