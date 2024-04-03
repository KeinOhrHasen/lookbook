import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"


export default function GridList({list}) {

return (<div className="mt-[24px]">
        <Table>
            <TableCaption>A list gids.</TableCaption>
            <TableHeader className="bg-gradient-to-r from-cyan-500 to-blue-500">
                <TableRow>  
                <TableHead className="w-[100px] text-amber-400">Name</TableHead>
                <TableHead className="text-amber-400">Id</TableHead>
                <TableHead className="text-amber-400">Columns</TableHead>
                <TableHead className="text-right text-amber-400">Ceated at</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {list && list.map(grid => (
                
                <TableRow key={grid.id}>
                    <TableCell className="font-medium">{grid.name}</TableCell>
                    <TableCell>{grid.id}</TableCell>
                    <TableCell>1</TableCell>
                    <TableCell className="text-right">{grid.created_at}</TableCell>
                </TableRow>
                ))}
  
            </TableBody>
        </Table>
    </div>)
}