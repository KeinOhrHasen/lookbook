import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Albums',
  description: 'Explore your Albums',
};

export default function AlbumsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <section>{children}</section>;
}
