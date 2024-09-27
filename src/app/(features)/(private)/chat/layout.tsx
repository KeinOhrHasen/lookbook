import type { Metadata } from 'next';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
export const metadata: Metadata = {
  title: 'Settings',
  description: 'Customize your app experience',
};

export default function ChatLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const queryClient = new QueryClient();

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <section className="h-full">{children}</section>
    </HydrationBoundary>
  );
}
