import { useState } from 'react'
import { Link } from 'react-router-dom'
import lumeLogo from '../assets/lumelogonobackground.svg'
import './Navbar.css'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <header className="navbar">
      <div className="navbar__inner">
        <button className="navbar__toggle" aria-label="Abrir menu" aria-expanded={open} onClick={() => setOpen((value) => !value)}>
          <span /><span /><span />
        </button>
        <nav className={`navbar__menu navbar__menu--left ${open ? 'is-open' : ''}`} aria-label="Navegação principal">
          <Link to="/" onClick={close}>Home</Link>
          <a href="#about" onClick={close}>About</a>
          <a href="#talents" onClick={close}>Talents</a>
        </nav>
        <Link to="/" className="navbar__logo" onClick={close} aria-label="Lume Management — início">
          <img src={lumeLogo} alt="Lume Management" />
        </Link>
        <a className="navbar__contact" href="mailto:contato@lumemanagement.com">Contact</a>
      </div>
    </header>
  )
}

