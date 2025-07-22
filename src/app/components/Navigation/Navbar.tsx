'use client'
import Style from "./Navbar.module.css"
import NavItem from "./NavItem"


const navLinks = [
  { href: "/", label: "Início" },
  { href: "/cadastrarIgrejas", label: "Cadastrar igrejas" },
  { href: "/minhasIgrejas", label: "Minhas igrejas" },
  { href: "/sair", label: "Sair"},
]

export default function Navbar() {
  return (
    <nav className={Style.navbar}>
      <div className={Style["navbar-container"]}>
        <h1 className={Style["navbar-title"]}>IgrejaAqui</h1>
      </div>
      <div className={Style["navbar-links"]}>
        {navLinks.map(link => (
          <NavItem key={link.href} {...link} />
        ))}
      </div>
    </nav>
  )
}