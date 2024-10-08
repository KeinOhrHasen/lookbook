'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logout from './Logout';
import { useSession } from 'next-auth/react';
import Login from './Login';
import { ModeToggle } from './theme-toggle';

const publicLinks = [
  { href: '/', label: 'Home' },
  { href: '/booking', label: 'Booking' },
];

const privateLinks = [
  { href: '/', label: 'Home' },
  { href: '/albums', label: 'Albums' },
  { href: '/upload', label: 'Upload' },
  { href: '/grids', label: 'Grids' },
  { href: '/booking', label: 'Booking' },
  { href: '/sessions', label: 'Sessions' },
  { href: '/settings', label: 'Settings' },
  { href: '/chat', label: 'Chat' },
];

export default function Navigation() {
  const pathname = usePathname();
  const session = useSession();

  return (
    <nav className="p-5 fixed top-0 left-0 right-0 border-b-2 border-slate-900 backdrop-blur-md z-10">
      <div className="flex items-center justify-between">
        <div className="font-semibold text-lg">LOOKBOOK</div>
        <div className="flex items-center justify-between">
          <ul className="flex items-center mr-16">
            {session.status === 'authenticated' &&
              privateLinks.map((link) => (
                <li key={link.label} className="mr-4">
                  <Link className={`link ${pathname === link.href ? 'text-orange-500' : ''}`} href={link.href}>
                    {link.label}
                  </Link>
                </li>
              ))}
            {session.status !== 'authenticated' &&
              publicLinks.map((link) => (
                <li key={link.label} className="mr-4">
                  <Link className={`link ${pathname === link.href ? 'text-orange-500' : ''}`} href={link.href}>
                    {link.label}
                  </Link>
                </li>
              ))}
          </ul>
          <div className="mr-8">
            <ModeToggle></ModeToggle>
          </div>

          <>
            {session.status === 'authenticated' ? (
              <>
                <div className="mr-8">{session.data?.user?.name}</div>
                <Logout />
              </>
            ) : (
              <Login />
            )}
          </>
        </div>
      </div>
    </nav>
  );
}
