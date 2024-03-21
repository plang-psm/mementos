import React from 'react';
import Image from 'next/image';
import mementoslogo from '@/public/static/mementoslogo.svg';
import InstantPhotosSvg from '@/public/static/InstantPhotosSvg.svg';
import LinkButton from './LinkButton';

type MediaType = {
  media_url: string;
  id: number;
};

type MediaDataType = {
  data: MediaType[];
};

export const getInstagramMedia = async () => {
  const url = `https://graph.instagram.com/me/media?fields=media_url&access_token=${process.env.INSTAGRAM_KEY}`;
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error('Failed to fetch instagram media');
  } else {
    return res.json();
  }
};

const GalleryHomeList = async () => {
  const media: MediaDataType = await getInstagramMedia();

  return (
    <>
      {media.data.slice(0,9).map(({ media_url, id }: MediaType) => (
        <div className='image' key={id}>
          <img
            src={media_url}
            className='m-auto w-[300px] h-[200px] object-cover'
            alt='Photobooth image'
          />
        </div>
      ))}
      {media.data.length === 0 && <p>No images found</p>}
    </>
  );
};

export default GalleryHomeList;
