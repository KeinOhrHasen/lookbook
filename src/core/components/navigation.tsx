'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logout from './Logout';
import { useSession } from 'next-auth/react';

const links = [
  { href: '/', label: 'Home' },
  { href: '/albums', label: 'Albums' },
  { href: '/upload', label: 'Upload' },
  { href: '/grids', label: 'Grids' },
  { href: '/booking', label: 'Booking' },
  { href: '/settings', label: 'Settings' },
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
            {links.map((link) => (
              <li key={link.label} className="mr-4">
                <Link className={`link ${pathname === link.href ? 'text-orange-500' : ''}`} href={link.href}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          {session.status === 'authenticated' ? (
            <div>
              {session.data?.user?.name}|
              <Logout />
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
    </nav>
  );
}
