'use client';

import Image from 'next/image';
import './styles.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { ENVIRONMENT } from '@/configs/environment';
import { IAlbum } from '@/app/(interfaces)/albums.model';
import { useRouter } from 'next/navigation';

export default function Gallery() {
  const [gallery, setGallery] = useState<IAlbum[]>([]);
  const router = useRouter();

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
        setGallery(data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        console.log('loader turn off');
      });
  }

  function navigateToAlbum(albumId: string): void {
    router.push(`/albums/${encodeURIComponent(albumId)}`);
  }

  return (
    <div className="flex flex-col justify-center w-full">
      <div className="grid sm:grid-cols-3 lg:grid-cols-4 gap-8 lg:gap-12">
        {gallery &&
          gallery.map((album) => (
            <div
              key={album._id}
              className="flex flex-col justify-center relative w-full h-full min-w-48 min-h-48 max-h-48 max-w-48"
              onClick={() => navigateToAlbum(album._id)}
            >
              <div className="flex flex-row justify-center w-full h-full">
                <Image
                  className="w-full h-full"
                  src={album.pictures[0]}
                  alt={album.name}
                  width={128}
                  height={128}
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="absolute bottom-0 right-0 left-0 flex flex-col gap-1 bg-slate-800/80">
                <div className="text-center text-black">{album.name}</div>
                <div className="text-center text-gray-400">Wedding</div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
