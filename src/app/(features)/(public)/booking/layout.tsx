import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Booking',
  description: 'Choose a appropriate session date and time',
};

export default function BookingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <section className="h-full">{children}</section>;
}
