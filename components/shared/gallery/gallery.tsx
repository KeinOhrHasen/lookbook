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
        const fixedData = data.map((album) => ({ ...album, pictures: album.pictures.map((p) => p.slice(1, -1)) }));
        // ""https:s3.com"" -> "https:s3.com"
        setGallery(fixedData);
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
      <div className="grid grid-cols-3 gap-8 lg:gap-12 lg:p-28">
        {gallery &&
          gallery.map((album) => (
            <div key={album._id} className="flex flex-col justify-center" onClick={() => navigateToAlbum(album._id)}>
              <div className="flex flex-row justify-center">
                <Image
                  className=""
                  src={album.pictures[0]}
                  alt={album.name}
                  width="250"
                  height="150"
                  loading="lazy"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="text-center text-black">{album.name}</div>
              <div className="text-center text-gray-400">Wedding</div>
            </div>
          ))}
      </div>
    </div>
  );
}
