'use client';

import { useEffect, useRef, useState } from 'react';
import 'react-day-picker/dist/style.css';
import { Button } from '@/components/ui/button';
import { useParams } from 'next/navigation';
import axios from 'axios';
import { ENVIRONMENT } from '@/configs/environment';
import { IAlbum } from '@/app/(interfaces)/albums.model';
import Image from 'next/image';
import { MdFileDownload, MdFullscreen } from 'react-icons/md';

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
    <div className="p-24">
      <h1 className="title mb-4">Album {album?.name}</h1>
      <div className="grid grid-cols-3 gap-8 lg:gap-12 lg:p-28">
        {album &&
          album.pictures.map((picture, index) => (
            <div key={index} className="flex flex-col justify-center">
              <div className="flex flex-row justify-center">
                <Image
                  className=""
                  src={picture}
                  alt={album.name + index}
                  width="250"
                  height="150"
                  loading="lazy"
                  style={{ objectFit: 'cover' }}
                />
                <Button onClick={() => downloadPicture(picture, index)} className="ml-4">
                  <MdFileDownload />
                </Button>
                <Button onClick={() => openFullScreen(picture, index)} className="ml-4">
                  <MdFullscreen />
                </Button>
              </div>
            </div>
          ))}
      </div>
      <input type="input" id="name" name="name" ref={gridRef} className="w-80 m-3"></input>
      <Button onClick={saveConfigs} className="ml-4">
        Submit
      </Button>
    </div>
  );
}
