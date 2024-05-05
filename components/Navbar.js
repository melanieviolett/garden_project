"use client";
import { useState } from "react";
import Link from "next/link";
import { Divide as Hamburger } from "hamburger-react";
import { GiFlowers } from "react-icons/gi";
import { usePathname } from "next/navigation";
import { BsPersonCircle } from "react-icons/bs";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {(pathname == "/login" || pathname == "/register") && (
        <div className="bg-inherit absolute w-full z-20">
          <nav
            className={`w-10/12 mx-auto top-0 flex bg-inherit md:justify-between justify-between items-center text-2xl text-coral py-9`}
          >
            <div className="flex flex-row relative">
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

            <ul className="hidden md:flex font-semibold text-2xl">
              <li className="hover:underline decoration-wavy brightness-75">
                <Link href="/grow">Grow</Link>
              </li>
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
                </ul>
              )}
            </div>
          </nav>
        </div>
      )}
      {pathname != "/login" && pathname != "/register" && (
        <div className="bg-deep-green">
          <nav
            className={`w-10/12 mx-auto top-0 flex bg-deep-green md:justify-between justify-between items-center text-2xl text-coral py-9`}
          >
            <div className="flex flex-row relative w-1/4">
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

            <ul className="hidden blog-break:flex relative font-semibold text-2xl items-center justify-end space-x-20 w-3/4">
              <li className="hover:underline decoration-wavy">
                <Link href="/grow">Grow</Link>
              </li>
              <li className="hover:underline decoration-wavy">
                <Link href="/blogs">Blog</Link>
              </li>
              <li className="hover:underline decoration-wavy">
                <Link href="/login">Login</Link>
              </li>
              <li className="hover:underline decoration-wavy">
                <Link href="/profile">
                  <BsPersonCircle size={40} />
                </Link>
              </li>
            </ul>

            <div className="blog-break:hidden block">
              <Hamburger toggled={open} toggle={setOpen} size={30} />
              {open && (
                <ul className="absolute bg-coral rounded blog-break:w-1/4 w-1/6 text-white text-base text-center p-1">
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
                  <li className="hover:underline decoration-wavy py-4">
                    <Link
                      href="/blogs"
                      onClick={() => {
                        setOpen(false);
                      }}
                    >
                      Blog
                    </Link>
                  </li>
                  <li className="hover:underline decoration-wavy py-4">
                    <Link
                      href="/login"
                      onClick={() => {
                        setOpen(false);
                      }}
                    >
                      Login
                    </Link>
                  </li>
                  <li className="hover:underline decoration-wavy py-4">
                    <Link href="/profile">
                      Profile
                    </Link>
                  </li>
                </ul>
              )}
            </div>
          </nav>
        </div>
      )}
    </>
  );
};

export default Navbar;
