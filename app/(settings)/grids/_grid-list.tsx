import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { Button } from "@/components/ui/button";
import { ENVIRONMENT } from "@/configs/environment";


export default function GridList({list}) {

    function deleteGrid(id: number) {
        fetch(`${ENVIRONMENT.apiURL}/messages/delete`, {
            method: "DELETE",
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
              },
            })
            .then((res) => res.json())
            .then((data) => {
                // reload page
            })
        }
    

    return (<div className="mt-[24px]">
        <Table>
            <TableCaption>A list gids.</TableCaption>
            <TableHeader className="bg-gradient-to-r from-cyan-500 to-blue-500">
                <TableRow>  
                <TableHead className="w-[100px] text-amber-400">Name</TableHead>
                <TableHead className="text-amber-400">Id</TableHead>
                <TableHead className="text-amber-400">Columns</TableHead>
                <TableHead className="text-right text-amber-400">Ceated at</TableHead>
                <TableHead className="text-right text-amber-400"></TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {list && list.map(grid => (
                
                <TableRow key={grid.id}>
                    <TableCell className="font-medium">{grid.name}</TableCell>
                    <TableCell>{grid.id}</TableCell>
                    <TableCell>1</TableCell>
                    <TableCell className="text-right">{grid.created_at}</TableCell>
                    <TableCell className="flex gap-4">
                        <Button onClick={() => deleteGrid(grid.id)}>Delete</Button>
                    </TableCell>
                </TableRow>
                ))}
  
            </TableBody>
        </Table>
    </div>)
}