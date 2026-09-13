import Link from "next/link"

function Header() {
  return (
    <header className="header">
        <nav>
            <div className="logo"><Link href="/">LOGO</Link></div>
        </nav>
    </header>
  )
}

export default Header
