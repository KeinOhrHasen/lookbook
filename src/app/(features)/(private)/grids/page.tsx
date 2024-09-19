'use client';

import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { ENVIRONMENT } from '../../../../core/configs/environment';
import { useState, useEffect } from 'react';
import GridList from './_grid-list';
import React from 'react';
import { useAppDispatch, useAppSelector } from '@/lib/redux/hook';
import { selectGrids } from '@/lib/redux/features/grids/selectors';
import { list } from '@/lib/redux/features/grids/slice';

export const GridsContext = React.createContext([]);

export default function Grid() {
  const router = useRouter();
  const [data, setData] = useState([]);
  const grids = useAppSelector(selectGrids);
  const dispatch = useAppDispatch();
  useEffect(() => {
    // fetchGrids();
    dispatch(list());
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
    <GridsContext.Provider value={grids}>
      <div className="p-24 bg-slate-300 h-full">
        <div className="flex justify-between">
          <h1>Grids</h1>
          <Button onClick={addNewGrid}>Add Grid</Button>
        </div>

        <GridList></GridList>
      </div>
    </GridsContext.Provider>
  );
}
