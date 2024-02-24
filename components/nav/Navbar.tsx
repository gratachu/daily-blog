"use client"

import Link from "next/link";
import LoginForm from "@/components/nav/LoginForm";
import {useUser} from "@/lib/store/user";

export default function Navbar() {
  const user = useUser((state) => state.user)
  console.log(user)

  return (
    <nav className="flex items-center justify-between">
      <div className="group">
        <Link href="/" className="text-2xl font-bold">Daily Blog</Link>
        <div className="h-1 w-0 group-hover:w-full transition-all bg-green-500"></div>
      </div>
      { user?.id ? <h1>Profile</h1> : <LoginForm />}
    </nav>
  )
}