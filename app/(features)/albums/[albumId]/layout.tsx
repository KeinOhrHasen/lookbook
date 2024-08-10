import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Album',
  description: 'Discover all photos. Set grid',
};

export default function AlbumLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <section className="h-full">{children}</section>;
}
