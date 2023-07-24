import Header from './Header'
import PlaylistGallery from './PlaylistGallery'

type loginProps = {
  setLogIn : React.Dispatch<React.SetStateAction<boolean>> 
  state : boolean
}

export default function Main( {setLogIn, state} : loginProps ) {
  return (
    <div id='main' className='h-full max-h-[850px] w-full p-0 bg-bg-black rounded-lg ml-2 overflow-y-auto'>
        <Header state={state} setLogIn={setLogIn} />
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