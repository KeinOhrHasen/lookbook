import { ReactNode } from 'react';
import { Toaster } from 'react-hot-toast';

export function ProvidersAll({ children }: { children: ReactNode }) {
  return (
    <>
      <Toaster position="top-center" />
      {children}
    </>
  );
}
