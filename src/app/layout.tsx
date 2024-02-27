"use client"
import { Andada_Pro } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useStore } from '../stores/store'

const andada_pro = Andada_Pro({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const pathname = usePathname();
  const nav = useStore((state) => state.nav)
  const setNav = useStore((state: any) => state.updateNav)
  const [isWindowLarge, setIsWindowLarge] = useState(false)

  useEffect(() => {
    function handleResize() {
      setIsWindowLarge(window.innerWidth >= 1024 ? true : false);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    setNav(false)
  }, [pathname])

  return (
    <html lang="en">
      <head>
        <title>Title</title>
        <meta name='description' content='Description' />
      </head>
      <body className={andada_pro.className}>
        <Navbar />
        {!(nav && !isWindowLarge) && children}
      </body>
    </html>
  );
}
