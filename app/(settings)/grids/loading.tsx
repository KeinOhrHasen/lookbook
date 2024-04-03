import { Skeleton } from "@/components/ui/skeleton"


export default function Loading() {
  return (   
    <div className="flex flex-col items-center justify-center space-y-3 w-full h-full p-24 mt-24">
      <div className="space-y-2">
        <Skeleton className="h-8 w-[600px]" />
        <Skeleton className="h-8 w-[500px]" />
        <Skeleton className="h-8 w-[600px]" />
        <Skeleton className="h-8 w-[500px]" />
        <Skeleton className="h-8 w-[600px]" />
        <Skeleton className="h-8 w-[200px]" />
      </div>
  </div>);
}