'use client';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Image from 'next/image';
import mountain from '../../../public/images/mountain.jpg';

export default function UploadFile() {
  function handleFileChange(e) {
    console.log(e);
    e.preventDefault();
    const form = e.target.files;
    console.log(form);
    // const formData = new FormData(e);
  }

  return (
    <div className="px-24 pt-24 pb-40 bg-slate-200 h-full">
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Image className="blur-md" src={mountain} alt="Picture of the author" height={200} />
        <Label htmlFor="picture">Pictures</Label>
        <Input id="picture" type="file" multiple onChange={handleFileChange} />
      </div>
    </div>
  );
}
