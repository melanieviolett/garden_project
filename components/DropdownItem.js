import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import Link from "next/link";
const DropdownItem = ({linkText, pathname, pathname_var }) => {
  return (
    <DropdownMenuItem
      className={`focus:bg-coral/80 ${
        pathname == pathname_var ? "underline decoration-wavy decoration-1" : ""
      }`}
    >
      <Link href={`${pathname_var}`}>{linkText}</Link>
    </DropdownMenuItem>
  );
};

export default DropdownItem;
