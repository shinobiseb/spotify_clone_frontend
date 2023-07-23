import Header from './Header'
import PlaylistGallery from './PlaylistGallery'


export default function Main() {
  return (
    <div id='main' className='h-full max-h-[850px] w-full p-0 bg-bg-black rounded-lg ml-2 overflow-y-auto'>
        <Header/>
        <PlaylistGallery/>
        <PlaylistGallery/>
        <PlaylistGallery/>
        <PlaylistGallery/>
        <PlaylistGallery/>
        <PlaylistGallery/>
        <PlaylistGallery/>
        <PlaylistGallery/>
        <PlaylistGallery/>
    </div>
  )
}