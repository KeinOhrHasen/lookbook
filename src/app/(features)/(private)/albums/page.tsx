'use client';

import React, { useEffect } from 'react';
import Gallery from '@/src/core/components/gallery';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { useAppDispatch } from '@/lib/redux/hook';
import { list } from '@/lib/redux/features/grids/slice';

export default function Albums() {
  const router = useRouter();
  const dispatch = useAppDispatch();

  function addNewAlbum() {
    router.push('/upload');
  }

  useEffect(() => {
    // gridRef.current.focus();
    dispatch(list());
  }, []);

  return (
    <div className="px-24 py-12 bg-slate-300 h-full">
      <div className="flex justify-between mb-6">
        <h1>Albums</h1>
        <Button onClick={addNewAlbum}>Add Album</Button>
      </div>
      <Gallery />
    </div>
  );
}
