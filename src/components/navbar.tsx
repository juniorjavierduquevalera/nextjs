'use client' 
import { usePathname } from 'next/navigation';
import Image from "next/image";
import Link from "next/link";
import ButtonContact from "app/ui/button";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <>
      <header className="text-gray-700 body-font main-bg">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link
            href="/"
            className={`flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 ${
              pathname === '/' ? 'font-bold' : ''
            }`}
          >
            <Image
              src="/juniorduque.svg"
              alt="Next.js Logo"
              width={65}
              height={32}
              priority={true}
            />
            <span className="ml-3 text-xl hidden md:block">Junior Duque</span>
          </Link>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 flex flex-wrap items-center text-base justify-center">
            <Link href="/" className={`mr-5 hover:text-gray-900 ${pathname === '/' ? 'font-bold' : ''}`}>
              Inicio
            </Link>
            <Link href="/servicios" className={`mr-5 hover:text-gray-900 ${pathname === '/servicios' ? 'font-bold' : ''}`}>
              Servicios
            </Link>
            <Link href="/contacto" className={`mr-5 hover:text-gray-900 lg:hidden ${pathname === '/contacto' ? 'font-bold' : ''}`}>
              Contacto
            </Link>
          </nav>
          <Link href="/contacto" className={`hidden md:block ${pathname === '/contacto' ? 'font-bold' : ''}`}>
            <ButtonContact name="Contacto" />
          </Link>
        </div>
      </header>
    </>
  );
}
