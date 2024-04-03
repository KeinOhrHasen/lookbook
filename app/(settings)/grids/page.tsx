'use client'

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { ENVIRONMENT } from "../../../configs/environment";
import { useState, useEffect } from 'react'
import GridList from "./_grid-list";


export default function Grid() {
  const router = useRouter(); 
  const [data, setData] = useState([])
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`${ENVIRONMENT.apiURL}/messages`, {
      method: "GET",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
      })
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [])
  

  function addNewGrid() {
      router.push("/grids/new");
  }

  if (!data || isLoading ) return <p className="p-24 bg-slate-400 h-full">No grid data</p>
  
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
