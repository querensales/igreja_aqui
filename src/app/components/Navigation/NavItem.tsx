'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { clsx } from "clsx"
import Style from "./Navbar.module.css"
interface NavItemProps {
  href: string
  label: string
}

export default function NavItem({ href, label }: NavItemProps) {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link
      href={href} className={clsx(Style['nav-item'], isActive ? Style['nav-item--active'] : "")}
      aria-current={isActive ? "page" : undefined}
    >
      {label}
    </Link>
  )
}