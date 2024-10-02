import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sessions',
  description: 'Booked sessions',
};

export default function SessionsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <section className="h-full">{children}</section>;
}
