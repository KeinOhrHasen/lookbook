'use client';

import Image from 'next/image';
import './styles.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { ENVIRONMENT } from '@/configs/environment';
import { IAlbum } from '@/app/(interfaces)/albums.model';

export default function Gallery() {
  const [gallery, setGallery] = useState<IAlbum[]>([]);

  useEffect(() => {
    fetchAlbums();
  }, []);

  function fetchAlbums(): void {
    axios
      .get(`${ENVIRONMENT.apiURL}/albums`, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
      .then(function ({ data }) {
        const fixedData = data.map((album) => ({ ...album, pictures: album.pictures.map((p) => p.slice(1, -1)) }));
        setGallery(fixedData);
        console.log(fixedData);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        console.log('loader turn off');
      });
  }

  return (
    <div className="min-h-screen flex flex-col justify-center w-full">
      <h2 className="header p-12 lg:px-16 text-center text-4xl bg-blue-100" style={{ color: 'orange' }}>
        My gallery
      </h2>
      <div className="grid grid-cols-3 gap-8 p-24 lg:gap-12 lg:p-28">
        {gallery &&
          gallery.map((item) => (
            <div key={item._id} className="flex flex-col justify-center">
              <div className="flex flex-row justify-center">
                <Image
                  className=""
                  src={item.pictures[0]}
                  alt={item.name}
                  width="250"
                  height="150"
                  loading="lazy"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="text-center text-black">{item.name}</div>
              <div className="text-center text-gray-400">Wedding</div>
            </div>
          ))}
      </div>
    </div>
  );
}
