import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Settings',
  description: 'Customize your app experience',
};

export default function SettingsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <section className="h-full">{children}</section>;
}
