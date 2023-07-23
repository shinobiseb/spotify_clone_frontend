import React from 'react';

interface PlaylistCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const PlaylistCard: React.FC<PlaylistCardProps> = ({ title, description, imageUrl }) => {
  return (
    <div className='playlist-card rounded-md shadow-black-xl md:w-48 p-4 bg-card-grey mr-3'>
      <div className="imageCont">
        <img className='card-img object-cover w-xl h-xl rounded-md mb-4' src={imageUrl} alt="" />
      </div>

      <div style={{ 
        display: '-webkit-box', 
        WebkitLineClamp: 3, 
        WebkitBoxOrient: 'vertical', 
        overflow: 'hidden'}}>
        <h3 className='text-white font-bold'>{title}</h3>
        <p className='text-text-grey text-sm mt-2'>
          {description}
        </p>
      </div>
    </div>
  );
};

export default PlaylistCard;
