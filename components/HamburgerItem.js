
import Link from "next/link";
const HamburgerItem = ({pathname, pathname_var, linkText, setOpen}) => {
  return (
    <li
    className={`hover:underline decoration-wavy py-4 ${
      pathname == pathname_var ? "underline decoration-1" : ""
    }`}
  >
    <Link
      href={pathname_var}
      onClick={() => {
        setOpen(false);
      }}
    >
      {linkText}
    </Link>
  </li>
  )
}

export default HamburgerItem