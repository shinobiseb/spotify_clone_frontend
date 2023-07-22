import React from 'react'
import Header from './Header'
import PlaylistCard from './PlaylistCard'
import PlaylistGallery from './PlaylistGallery'

export default function Main() {
  return (
    <div className='w-3/4 max-w-3/4 bg-bg-black rounded-lg ml-2'>
        <Header/>
        <PlaylistGallery/>
        <PlaylistGallery/>
        <PlaylistGallery/>
    </div>
  )
}
