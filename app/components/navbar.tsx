'use client'
import React from 'react';
import Link from 'next/link';
import Logo from '../../public/jj-logo.svg';
import Image from 'next/image';
import { usePathname } from 'next/navigation';


const Navbar = () => {


    const pathName = usePathname();

    return (
        <nav className="mt-8 flex justify-between h-20 items-center">

            <div className="lg:w-6/12 md:w-2/12 ml-10">
            {pathName === '/' ? (
                    <div></div>
                ) : (
                    <Link href="/"><Image src={Logo} alt="Logo for the homepage" /></Link>
                )}
            </div>
                

            <ul className="flex justify-evenly  flex-grow items-center ">

                <li>
                    <Link href="/about-me">About me</Link>
                </li>
                <li>
                    <Link href="/knowledge">Knowledge</Link>
                </li>
                <li>
                    <Link href="/experiences">Experiences</Link>
                </li>
                <li>
                    <Link href="/portfolio">Portfolio</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;