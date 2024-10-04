import { useState } from "react"
import { navLinks } from "../constants"

const Navitems = () => {
    return (
      <ul className="nav-ul">
        {navLinks.map(({ id, href, name }) =>
          (<li key={id} className="nav-li">
            <a href={href} className="nav-li_a"
            onClick={() =>{}}
            >
            {name}
            </a>
          </li>)
        )}
      </ul>
    )
  }

const Navbar = () => {
    const [isOpen,setIsOpen] = useState(false)
    const toggleMenu = () => setIsOpen((prevState) => !prevState)
    
    return (
      <header className='fixed top-0 left-0 right-0 z-50
      bg-black/90 text-white'>
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center py-3 mx-auto c-space">
            <a href="/" className="text-neutral-400 hover:text-white
            font-bold text-xl transition-colors">
              Maxime
            </a>
            <button onClick={toggleMenu}
             className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex"
             aria-label="Toggle Menu"
             >
              <img src={isOpen ? "assets/close.svg" : "assets/menu.svg"} className="w-5 h-5" alt='toggle' />
            </button>
            <nav className="sm:flex hidden">
              <Navitems />
            </nav>
          </div>
        </div>
        <div className={`nav-sidebar ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
         <Navitems />
        </div>
      </header>
    )
  }
  
  export default Navbar
  