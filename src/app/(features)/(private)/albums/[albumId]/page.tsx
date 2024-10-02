'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import 'react-day-picker/dist/style.css';
import { Button } from '@/components/ui/button';
import { useParams } from 'next/navigation';
import axios from 'axios';
import { ENVIRONMENT } from '@/src/core/configs/environment';
import { IAlbum } from '@/app/_interfaces/albums.model';
import { MdFileDownload, MdFullscreen } from 'react-icons/md';
import { Input } from '@/components/ui/input';

export default function Album() {
  const gridRef = useRef(null);
  const params = useParams();
  const [album, setAlbum] = useState<IAlbum>(null);

  useEffect(() => {
    // gridRef.current.focus();
    console.log(params.albumId);
    console.log(`${ENVIRONMENT.apiURL}/album/${params.albumId}`);

    axios
      .get(`${ENVIRONMENT.apiURL}/album/${params.albumId}`, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
      .then(function ({ data }) {
        setAlbum(data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const saveConfigs = () => {
    console.log(gridRef.current?.value);
  };

  const downloadPicture = (pictureUrl, index) => {
    const element = document.createElement('a');
    element.setAttribute('href', pictureUrl);
    element.setAttribute('download', album.name + index);
    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
  };

  const openFullScreen = (pictureUrl, index) => {
    console.log('Open full screen mode');
  };

  return (
    <div className="px-24 py-12 bg-slate-300">
      <h1 className="title mb-6">Album {album?.name}</h1>
      <div className="grid sm:grid-cols-3 lg:grid-cols-4 gap-8 lg:gap-12">
        {album &&
          album.pictures.map((picture, index) => (
            <div key={index} className="flex flex-col justify-center">
              <div className="flex flex-row justify-center relative w-full h-full">
                <Image
                  className="w-full h-full"
                  src={picture}
                  alt={album.name + index}
                  width={256}
                  height={256}
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute top-0 right-0 flex flex-col gap-2">
                  <Button onClick={() => downloadPicture(picture, index)} className="ml-4">
                    <MdFileDownload />
                  </Button>
                  <Button onClick={() => openFullScreen(picture, index)} className="ml-4">
                    <MdFullscreen />
                  </Button>
                </div>
              </div>
            </div>
          ))}
      </div>

      <h1 className="title mt-6">{album?.name} grid setup</h1>
      <div className="flex items-center">
        <Input type="input" id="name" name="name" ref={gridRef} className="w-80 p-2 my-4"></Input>
        <Button onClick={saveConfigs} className="ml-4">
          Save grid configs
        </Button>
      </div>
    </div>
  );
}
