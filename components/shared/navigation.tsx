'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
// import { useSession } from 'next-auth/react';

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
  const router = useRouter();

  // const session = useSession();
  // const userData = session.data?.user;

  function logout() {
    router.push('/login');
  }

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
          {/* {session.status === 'authenticated' ? 'Auth Success!' : 'NOT AUTHENTICATED'} */}

          <Button onClick={logout}>Logout</Button>
        </div>
      </div>
    </nav>
  );
}
