'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
    const pathname = usePathname()
    
    return <nav className="p-4 fixed top-0 left-0 right-0 border-b-2 border-slate-300 backdrop-blur-md z-10"> 
            <ul className="flex items-center justify-between">
                <li className="p-4">
                    <Link className={`link ${pathname === '/' ? 'active' : ''}`} href="/">
                    Home
                    </Link>
                </li>
                <li className="p-4">
                    <Link
                    className={`link ${pathname === '/upload' ? 'active' : ''}`}
                    href="/upload"
                    >
                    Upload
                    </Link>
                </li>
                <li className="p-4">
                    <Link
                    className={`link ${pathname === '/grids' ? 'active' : ''}`}
                    href="/grids"
                    >
                    Grids
                    </Link>
                </li>
                <li className="p-4">
                    <button>Logout</button>
                </li>
            </ul>
        </nav>
}