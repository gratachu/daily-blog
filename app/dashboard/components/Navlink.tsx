import {PersonIcon, ReaderIcon} from "@radix-ui/react-icons";
import Link from "next/link";
import {cn} from "@/lib/utils";

export default function Navlink() {
  const links = [
    {
      href: "/dashboard",
      text: "Dashboard",
      Icon: ReaderIcon
    },
    {
      href: "/dashboard/user",
      text: "User",
      Icon: PersonIcon
    }
  ]

  return (
    <div className="flex items-center gap-5">
      {links.map(({href, text, Icon}, index) => {
        return (
          <Link href={href} key={index} className={cn("flex items-center gap-1")}>
            <Icon />/{text}
          </Link>
        )
      })}
    </div>
  )
}