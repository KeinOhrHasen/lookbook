'use client';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Image from 'next/image';
import mountain from '../../../public/images/mountain.jpg';
import { Button } from '@/components/ui/button';
import { useRef } from 'react';
import axios from 'axios';
import { ENVIRONMENT } from '@/configs/environment';
import { useRouter } from 'next/navigation';

export default function UploadFile() {
  const nameRef = useRef(null);
  const picturesRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', picturesRef.current?.files[0]);

    axios
      .post(`${ENVIRONMENT.apiURL}/upload`, formData, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data',
        },
      })
      .then(function (response) {
        return axios.post(`${ENVIRONMENT.apiURL}/album/create`, {
          name: nameRef.current?.value,
          pictures: [response.data.imageUrl],
        });
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        router.push('/');
      });
  }

  return (
    <div className="px-24 pt-24 pb-40 bg-slate-200 h-full">
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <div className="title">Upload new album</div>
        <form action="" onSubmit={handleSubmit}>
          <Image className="blur-md" src={mountain} alt="Picture of the author" height={200} />
          <Label htmlFor="picture">Pictures</Label>
          <Input id="pictures" name="pictures" type="file" ref={picturesRef} multiple />

          <Label htmlFor="name">Name</Label>
          <Input id="name" name="name" ref={nameRef} type="text" />

          <Button type="submit" className="my-4">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
}
