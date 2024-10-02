import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useContext } from 'react';
import { GridsContext } from './page';
import DeleteForm from '@/src/core/components/grids/delete-form';

export default function GridList() {
  const data = useContext(GridsContext);

  if (!data?.length) return <p className="p-24 bg-slate-400 h-full">No grid data</p>;

  return (
    <div className="mt-[24px]">
      <Table>
        <TableCaption>A list gids.</TableCaption>
        <TableHeader className="bg-gradient-to-r from-cyan-500 to-blue-500">
          <TableRow>
            <TableHead className="w-[100px] text-amber-400">Name</TableHead>
            <TableHead className="text-amber-400">Columns</TableHead>
            <TableHead className="text-amber-400">Ceated at</TableHead>
            <TableHead className="text-right text-amber-400"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data &&
            data.map((grid) => (
              <TableRow key={grid._id}>
                <TableCell className="font-medium">{grid.name}</TableCell>
                <TableCell>{grid.columns}</TableCell>
                <TableCell className="">{grid.date ? new Date(grid.date).toDateString() : '-'}</TableCell>
                <TableCell className="text-right flex justify-end gap-4">
                  <DeleteForm id={grid._id} />
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
}
