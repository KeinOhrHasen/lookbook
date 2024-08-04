import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { ENVIRONMENT } from '@/configs/environment';
import { useContext } from 'react';
import { GridsContext } from './page';

export default function GridList({ fetchGrids }) {
  const data = useContext(GridsContext);
  function deleteGrid(id: number) {
    fetch(`${ENVIRONMENT.apiURL}/grid/delete/${id}`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }).then(() => {
      fetchGrids();
    });
  }

  if (!data?.length) return <p className="p-24 bg-slate-400 h-full">No grid data</p>;

  return (
    <div className="mt-[24px]">
      <Table>
        <TableCaption>A list gids.</TableCaption>
        <TableHeader className="bg-gradient-to-r from-cyan-500 to-blue-500">
          <TableRow>
            <TableHead className="w-[100px] text-amber-400">Name</TableHead>
            <TableHead className="text-amber-400">Columns</TableHead>
            <TableHead className="text-right text-amber-400">Ceated at</TableHead>
            <TableHead className="text-right text-amber-400"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data &&
            data.map((grid) => (
              <TableRow key={grid._id}>
                <TableCell className="font-medium">{grid.name}</TableCell>
                <TableCell>{grid.columns}</TableCell>
                <TableCell className="text-right">24.07.2024</TableCell>
                <TableCell className="flex gap-4">
                  <Button onClick={() => deleteGrid(grid._id)}>Delete</Button>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
}
