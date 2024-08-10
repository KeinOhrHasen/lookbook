'use client';

import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { ENVIRONMENT } from '../../../configs/environment';
import { useState, useEffect } from 'react';
import GridList from './_grid-list';
import React from 'react';

export const GridsContext = React.createContext([]);

export default function Grid() {
  const router = useRouter();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchGrids();
  }, []);

  async function fetchGrids(): void {
    try {
      const resp = await fetch(`${ENVIRONMENT.apiURL}/grids`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      const grids = await resp.json();
      setData(grids);
    } catch {
      throw new Error('Can`t load grids');
    }
  }

  function addNewGrid() {
    router.push('/grids/new');
  }

  return (
    <GridsContext.Provider value={data}>
      <div className="p-24 bg-slate-400 h-full">
        <div className="flex justify-between">
          <h1>Grids</h1>
          <Button onClick={addNewGrid}>Add Grid</Button>
        </div>

        <GridList fetchGrids={fetchGrids}></GridList>
      </div>
    </GridsContext.Provider>
  );
}
