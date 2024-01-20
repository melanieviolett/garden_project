"use client";
import { useState } from "react";
import Link from "next/link";
import { Divide as Hamburger } from "hamburger-react";
import { GiFlowers } from "react-icons/gi";
const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-deep-green">
      <nav
        className={` w-10/12 mx-auto top-0 flex bg-deep-green md:justify-around justify-between items-center text-2xl text-coral py-9`}
      >
        <div className="w-1/5 flex flex-row">
          <ul className="flex flex-row items-center gap-x-1">
            <li>
              <div className="text-coral mr-1">
                <GiFlowers size={38} />
              </div>
            </li>
            <li className="md:text-4xl font-bold hover:underline decoration-wavy whitespace-nowrap text-xl">
              <Link href="/">Grow Your Garden</Link>
            </li>
          </ul>
        </div>

        <ul className="hidden md:flex justify-end w-4/5 font-semibold text-2xl">
          <li className="hover:underline decoration-wavy">
            <Link href="/grow">Grow</Link>
          </li>
          {/* <li className='hover:underline decoration-wavy'>
                    <Link href="#">Blog</Link>
                </li>
                <li className='hover:underline decoration-wavy'>
                    <Link href="#">Login</Link>
                </li> */}
        </ul>

        <div className="md:hidden block">
          <Hamburger toggled={open} toggle={setOpen} size={30} />
          {open && (
            <ul className="absolute bg-coral rounded md:w-1/4 w-1/6 text-white text-base text-center p-1">
              <li className="hover:underline decoration-wavy py-4">
                <Link
                  href="/grow"
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  Grow
                </Link>
              </li>
              {/* <li className='hover:underline decoration-wavy py-4'>
                            <Link href="#">Blog</Link>
                        </li>
                        <li className='hover:underline decoration-wavy py-4'>
                            <Link href="#">Login</Link>
                        </li> */}
            </ul>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
