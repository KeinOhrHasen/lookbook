'use client';

import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { ENVIRONMENT } from '../../../configs/environment';
import { useState, useEffect } from 'react';
import GridList from './_grid-list';

export default function Grid() {
  const router = useRouter();
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const resp = await fetch(`${ENVIRONMENT.apiURL}/messages`, {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        });
        const grids = await resp.json();
        setData(grids);
      } catch {
        setError(true);
      }
    };
    fetchUser();
  }, []);

  function addNewGrid() {
    router.push('/grids/new');
  }

  if (error) return <p className="p-24 bg-slate-400 h-full">Some errors have appeared...</p>;
  if (!data?.length) return <p className="p-24 bg-slate-400 h-full">No grid data</p>;

  return (
    <div className="p-24 bg-slate-400 h-full">
      <div className="flex justify-between">
        <h1>Grids</h1>
        <Button onClick={addNewGrid}>Add Grid</Button>
      </div>

      <GridList list={data}></GridList>
    </div>
  );
}
