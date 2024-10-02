'use client';

import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import GridList from './_grid-list';
import React from 'react';
import { useAppDispatch, useAppSelector } from '@/lib/redux/hook';
import { selectGrids } from '@/lib/redux/features/grids/selectors';
import { list } from '@/lib/redux/features/grids/slice';

export const GridsContext = React.createContext([]);

export default function Grid() {
  const router = useRouter();
  const grids = useAppSelector(selectGrids);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(list());
  }, []);

  function addNewGrid() {
    router.push('/grids/new');
  }

  return (
    <GridsContext.Provider value={grids}>
      <div className="px-24 py-12 bg-slate-300 h-full">
        <div className="flex justify-between">
          <h1>Grids</h1>
          <Button onClick={addNewGrid}>Add Grid</Button>
        </div>

        <GridList></GridList>
      </div>
    </GridsContext.Provider>
  );
}
