'use client';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Image from 'next/image';
import mountain from '../../../../../public/images/mountain.jpg';
import { Button } from '@/components/ui/button';
import { useRef } from 'react';
import axios from 'axios';
import { ENVIRONMENT } from '@/src/core/configs/environment';
import { useRouter } from 'next/navigation';

export default function UploadFile() {
  const nameRef = useRef(null);
  const picturesRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  function handleSubmit(e) {
    e.preventDefault();
    const files = picturesRef.current?.files;
    const requests = Array.from(files).map((file) => {
      const formData = new FormData();
      formData.append('file', file);

      return axios.post(`${ENVIRONMENT.apiURL}/upload`, formData, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data',
        },
      });
    });

    axios
      .all(requests)
      .then(
        axios.spread((...response) => {
          return axios.post(`${ENVIRONMENT.apiURL}/album/create`, {
            name: nameRef.current?.value,
            pictures: response.map((r) => r.data.imageUrl),
          });
        }),
      )
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        router.push('/albums');
      });
  }

  const SubmitButton = () => {
    return (
      <Button type="submit" className="my-4">
        Book event
      </Button>
    );
  };

  return (
    <div className="px-24 pt-12 pb-40 bg-slate-300 h-full">
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <div className="title mb-6">Upload new album</div>
        <form action="" onSubmit={handleSubmit}>
          <Image className="blur-md mb-6" src={mountain} alt="Picture of the author" height={200} />
          <Label htmlFor="picture">Pictures</Label>
          <Input id="pictures" name="pictures" type="file" ref={picturesRef} multiple />
          <Label htmlFor="name">Name</Label>
          <Input id="name" name="name" ref={nameRef} type="text" placeholder="Album name" />
          <SubmitButton />
        </form>
      </div>
    </div>
  );
}
