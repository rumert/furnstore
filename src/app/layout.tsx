"use client"
import { Andada_Pro } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/Navbar";
import { useEffect, useState } from "react";
import { useStore } from '../stores/globalValues'
import { usePathname } from "next/navigation";

const andada_pro = Andada_Pro({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const nav = useStore((state) => state.nav)
  const setNav = useStore((state: any) => state.updateNav)
  const navbarRooms = useStore((state) => state.navbarRooms)
  const setNavbarRooms = useStore((state: any) => state.updateNavbarRooms)
  const [isWindowLarge, setIsWindowLarge] = useState(false)
  const pathname = usePathname();

  useEffect(() => {
    setNav(false)
    setNavbarRooms(false)
  }, [pathname])

  useEffect(() => {
    function handleResize() {
      setIsWindowLarge(window.innerWidth >= 1024 ? true : false);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <html lang="en">
      <head>
        <title>Title</title>
        <meta name='description' content='Description' />
      </head>
      <body className={`${andada_pro.className} bg-base-color-1 text-white text-md sm:text-2xl lg:text-3xl xl:text-4xl`}>
        <Navbar isNavbarAnimated={(nav && !isWindowLarge)}/>
        {!(nav && !isWindowLarge) && children}
      </body>
    </html>
  );
}
