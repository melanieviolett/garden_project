'use client';
import { useState } from 'react'
import Link from 'next/link'
import { Divide as Hamburger } from 'hamburger-react'
import Image from 'next/image'
import flowerLogo from '../public/icons8-flower-48.png'

const Navbar = ({ backgroundColor }) => {
    const [open, setOpen] = useState(false);

    return (
        <nav className={`w-full top-0 flex ${backgroundColor} justify-around items-center text-2xl text-coral py-9`}>

            <div className='w-1/5 flex flex-row'>
                <ul>
                    <li className='font-medium lg:text-2xl hover:underline decoration-wavy whitespace-nowrap text-base sm:text-xl'>
                        <Link href="/">Grow Your Garden</Link>
                    </li>
                </ul>
            </div>

            <ul className="hidden surface-pro:flex justify-around w-2/5 text-base">
                <li className='hover:underline decoration-wavy'>
                    <Link href="/grow">Grow</Link>
                </li>
                <li className='hover:underline decoration-wavy'>
                    <Link href="#">Blog</Link>
                </li>
                <li className='hover:underline decoration-wavy'>
                    <Link href="#">Login</Link>
                </li>
            </ul>

            <div className="surface-pro:hidden block">
                <Hamburger
                    toggled={open}
                    toggle={setOpen}
                    size={30}
                />
                {
                    open &&

                    <ul className="fixed bg-coral rounded w-1/4 text-white text-base text-center p-1">
                        <li className='hover:underline decoration-wavy py-4'>
                            <Link href="#">Find New Plants</Link>
                        </li>
                        <li className='hover:underline decoration-wavy py-4'>
                            <Link href="#">Learn</Link>
                        </li>
                        <li className='hover:underline decoration-wavy py-4'>
                            <Link href="#">Blog</Link>
                        </li>
                        <li className='hover:underline decoration-wavy py-4'>
                            <Link href="#">Login</Link>
                        </li>
                    </ul>
                }
            </div>
        </nav>

    )
}

export default Navbar