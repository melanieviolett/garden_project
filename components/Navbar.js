"use client";
import { useState } from "react";
import Link from "next/link";
import { Divide as Hamburger } from "hamburger-react";
import { GiFlowers } from "react-icons/gi";
import { usePathname } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// not gonna map here, but gonna just get prof info of the current user
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
                <li
                  className={`md:text-4xl font-bold hover:underline ${
                    pathname == "/" ? "underline decoration-2" : ""
                  } decoration-wavy whitespace-nowrap text-xl`}
                >
                  <Link href="/">Grow Your Garden</Link>
                </li>
              </ul>
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
                <li
                  className={`md:text-4xl font-bold hover:underline ${
                    pathname == "/" ? "underline decoration-2" : ""
                  } decoration-wavy decoration-2 whitespace-nowrap text-xl`}
                >
                  <Link href="/">Grow Your Garden</Link>
                </li>
              </ul>
            </div>

            <ul className="hidden blog-break:flex relative font-semibold text-2xl items-center justify-end space-x-20 w-3/4">
              <li
                className={`hover:underline decoration-wavy ${
                  pathname == "/grow" ? "underline decoration-1" : ""
                }`}
              >
                <Link href="/grow">Grow</Link>
              </li>
              <li
                className={`hover:underline decoration-wavy ${
                  pathname == "/blogs" ? "underline decoration-1" : ""
                }`}
              >
                <Link href="/blogs">Blog</Link>
              </li>
              <li
                className={`hover:underline decoration-wavy ${
                  pathname == "/login" ? "underline decoration-1" : ""
                }`}
              >
                <Link href="/login">Login</Link>
              </li>

              <li className="hover:underline decoration-wavy">
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <div className="rounded-full grad5 md:w-20 md:h-20 w-10 h-10"></div>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="text-white font-semibold border-coral bg-coral">
                    <DropdownMenuItem
                      className={`focus:bg-coral/80 ${
                        pathname == "/e_profile"
                          ? "underline decoration-wavy decoration-1"
                          : ""
                      }`}
                    >
                      <Link href="/e_profile">Edit profile</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      className={`focus:bg-coral/80 ${
                        pathname == "/e_posts"
                          ? "underline decoration-wavy decoration-1"
                          : ""
                      }`}
                    >
                      <Link href="/e_posts">Edit posts</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      className={`focus:bg-coral/80 ${
                        pathname == "/view_profile"
                          ? "underline decoration-wavy decoration-1"
                          : ""
                      }`}
                    >
                      <Link href="/view_profile">View public profile</Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </li>
            </ul>

            <div className="blog-break:hidden block">
              <Hamburger toggled={open} toggle={setOpen} size={30} />
              {open && (
                <ul className="absolute bg-coral rounded text-white blog-break:text-base text-sm text-center p-1">
                  <li
                    className={`hover:underline decoration-wavy py-4 ${
                      pathname == "/grow" ? "underline decoration-1" : ""
                    }`}
                  >
                    <Link
                      href="/grow"
                      onClick={() => {
                        setOpen(false);
                      }}
                    >
                      Grow
                    </Link>
                  </li>
                  <li
                    className={`hover:underline decoration-wavy py-4 ${
                      pathname == "/blogs" ? "underline decoration-1" : ""
                    }`}
                  >
                    <Link
                      href="/blogs"
                      onClick={() => {
                        setOpen(false);
                      }}
                    >
                      Blog
                    </Link>
                  </li>
                  <li
                    className={`hover:underline decoration-wavy py-4 ${
                      pathname == "/login" ? "underline decoration-1" : ""
                    }`}
                  >
                    <Link
                      href="/login"
                      onClick={() => {
                        setOpen(false);
                      }}
                    >
                      Login
                    </Link>
                  </li>
                  <li
                    className={`hover:underline decoration-wavy py-4 ${
                      pathname == "/e_profile" ? "underline decoration-1" : ""
                    }`}
                  >
                    <Link href="/e_profile">Edit profile</Link>
                  </li>
                  <li
                    className={`hover:underline decoration-wavy py-4 ${
                      pathname == "/e_posts" ? "underline decoration-1" : ""
                    }`}
                  >
                    <Link href="/e_posts">Edit posts</Link>
                  </li>
                  <li
                    className={`hover:underline decoration-wavy py-4 ${
                      pathname == "/view_profile"
                        ? "underline decoration-1"
                        : ""
                    }`}
                  >
                    <Link href="/view_profile">View profile</Link>
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
