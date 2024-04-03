'use client'

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button"

export default function Navigation() {
    const pathname = usePathname()
    const router = useRouter(); 

    function logout() {
        router.push("/login");
    }

    return <nav className="p-5 fixed top-0 left-0 right-0 border-b-2 border-slate-900 backdrop-blur-md z-10"> 
            <div className="flex items-center justify-between">
                <div className="font-semibold">LOOKBOOK</div>
                <div className="flex items-center justify-between">
                    <ul className="flex items-center mr-16">
                        <li className="mr-4">
                            <Link className={`link ${pathname === '/' ? 'text-orange-500' : ''}`} href="/">
                                Home
                            </Link>
                        </li>
                        <li className="mr-4">
                            <Link
                            className={`link ${pathname === '/upload' ? 'text-orange-500' : ''}`}
                            href="/upload"
                            >
                            Upload
                            </Link>
                        </li>
                        <li className="mr-4">
                            <Link
                            className={`link ${pathname === '/grids' ? 'text-orange-500' : ''}`}
                            href="/grids"
                            >
                            Grids
                            </Link>
                        </li>
                    </ul>
                    <Button onClick={logout}>Logout</Button>
                </div>
            </div>
        </nav>
}