import {ReactNode} from "react";
import Navlink from "@/app/dashboard/components/Navlink";

export default function layout({ children }: { children: ReactNode }) {
  return (
    <div className="space-y-5">
      <Navlink />
      {children}
    </div>
  )
}