import { Skeleton } from '@/components/ui/skeleton';

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center space-y-3 w-full h-full p-10">
      <Skeleton className="h-[125px] w-[250px] rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[150px]" />
        <Skeleton className="h-4 w-[400px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  );
}
