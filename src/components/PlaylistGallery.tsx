
import PlaylistCard from './PlaylistCard'

export default function PlaylistGallery() {

  return (
    <div className='px-4 mt-10 '>
        <h1 className='text-white font-bold text-2xl mb-3'>Music for You</h1>
        <div className='w-full flex flex-row overflow-hidden justify-left'>
            <PlaylistCard title='Peaceful Morning' 
            description='Have a great morning' 
            imageUrl='https://images.unsplash.com/photo-1525838983331-f8bd3c000585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'/>
            <PlaylistCard title='Metal is Me' 
            description='Metal Music for your SOUL' 
            imageUrl='https://images.unsplash.com/photo-1515890326200-a07ce46010a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWV0YWwlMjBtdXNpY3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60'/>
            <PlaylistCard title='Dope Vibes' 
            description='Rap that fuels your passion for creativity' 
            imageUrl='https://images.unsplash.com/photo-1505964135045-cdada2f6bf43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmFwJTIwbXVzaWN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60'/>
            <PlaylistCard title='Acoustic Covers' 
            description='Many Happy and Sad People sing guitar covers of created music' 
            imageUrl='https://images.unsplash.com/photo-1510915361894-db8b60106cb1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YWNvdXN0aWMlMjBndWl0YXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60'/>
        </div>
    </div>
  )
}
