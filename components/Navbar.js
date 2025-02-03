"use client";
import { useState } from "react";
import Link from "next/link";
import { Divide as Hamburger } from "hamburger-react";
import { GiFlowers } from "react-icons/gi";
import { usePathname } from "next/navigation";
import DropdownItem from "./DropdownItem";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import HamburgerItem from "./HamburgerItem";

// TODO: make less verbose and repetitive
// not gonna map here, but gonna just get prof info of the current user
const Navbar = ({ session, signOutProps, isRegistered }) => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {!session?.user && (
        <div
          className={`${
            pathname == "/login"
              ? "bg-inherit absolute w-full z-20"
              : "bg-deep-green"
          }`}
        >
          <nav
            className={`w-10/12 mx-auto top-0 flex md:justify-between justify-between items-center text-2xl text-coral py-9`}
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
                  pathname == "/login" ? "underline decoration-1" : ""
                }`}
              >
                <Link href="/login">Login</Link>
              </li>
            </ul>
            <div className="blog-break:hidden block">
              <Hamburger toggled={open} toggle={setOpen} size={30} />
              {open && (
                <ul className="absolute bg-coral rounded text-white blog-break:text-base text-sm text-center p-1">
                  <HamburgerItem
                    pathname={pathname}
                    pathname_var="/grow"
                    setOpen={setOpen}
                    linkText="Grow"
                  />
                  <HamburgerItem
                    pathname={pathname}
                    pathname_var="/login"
                    setOpen={setOpen}
                    linkText="Login"
                  />
                </ul>
              )}
            </div>
          </nav>
        </div>
      )}
      {session?.user && isRegistered && (
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

              <li className="hover:underline decoration-wavy">
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <div className="rounded-full grad5 md:w-20 md:h-20 w-10 h-10"></div>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="text-white font-semibold border-coral bg-coral">
                    <DropdownItem
                      linkText="Edit profile"
                      pathname={pathname}
                      pathname_var="/e_profile"
                    />

                    <DropdownItem
                      linkText="Create new post"
                      pathname={pathname}
                      pathname_var="/create_post"
                    />

                    <DropdownItem
                      linkText="View your posts"
                      pathname={pathname}
                      pathname_var="/your_posts"
                    />

                    <DropdownItem
                      linkText="View public profile"
                      pathname={pathname}
                      pathname_var="/view_profile"
                    />

                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="focus:bg-coral/80">
                      {" "}
                      <form action={signOutProps}>
                        <button type="submit">Sign Out</button>
                      </form>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </li>
            </ul>

            <div className="blog-break:hidden block">
              <Hamburger toggled={open} toggle={setOpen} size={30} />
              {open && (
                <ul className="absolute bg-coral rounded text-white blog-break:text-base text-sm text-center p-1">
                  <HamburgerItem
                    pathname={pathname}
                    pathname_var="/grow"
                    setOpen={setOpen}
                    linkText="Grow"
                  />
                  <HamburgerItem
                    pathname={pathname}
                    pathname_var="/blogs"
                    setOpen={setOpen}
                    linkText="Blog"
                  />

                  <HamburgerItem
                    pathname={pathname}
                    pathname_var="/e_profile"
                    setOpen={setOpen}
                    linkText="Edit profile"
                  />
                  <HamburgerItem
                    pathname={pathname}
                    pathname_var="/create_post"
                    setOpen={setOpen}
                    linkText="Create new post"
                  />
                  <HamburgerItem
                    pathname={pathname}
                    pathname_var="/your_posts"
                    setOpen={setOpen}
                    linkText="View your posts"
                  />
                  <HamburgerItem
                    pathname={pathname}
                    pathname_var="/view_profile"
                    setOpen={setOpen}
                    linkText="View profile"
                  />
                  <li>
                    {" "}
                    <form action={signOutProps}>
                      <button
                        className="hover:underline decoration-wavy font-bold py-4"
                        type="submit"
                      >
                        Sign Out
                      </button>
                    </form>
                  </li>
                </ul>
              )}
            </div>
          </nav>
        </div>
      )}

      {session?.user && !isRegistered && (
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

              <li className="hover:underline decoration-wavy">
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <div className="rounded-full grad5 md:w-20 md:h-20 w-10 h-10"></div>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="text-white font-semibold border-coral bg-coral">
                    <DropdownMenuItem className="focus:bg-coral/80">
                      {" "}
                      <form action={signOutProps}>
                        <button type="submit">Sign Out</button>
                      </form>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </li>
            </ul>

            <div className="blog-break:hidden block">
              <Hamburger toggled={open} toggle={setOpen} size={30} />
              {open && (
                <ul className="absolute bg-coral rounded text-white blog-break:text-base text-sm text-center p-1">
                  <li>
                    {" "}
                    <form action={signOutProps}>
                      <button
                        className="hover:underline decoration-wavy font-bold py-4"
                        type="submit"
                      >
                        Sign Out
                      </button>
                    </form>
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
