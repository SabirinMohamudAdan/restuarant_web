import React, { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi' // Import icons from react-icons

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { name: 'Home /' , href: '/' },
    { name: 'Menu /', href: '/menu' },
    { name: 'About Us /', href: '/about' },
    { name: 'Book /', href: '/book' },
    { name: 'Event /', href: '/event' },
    { name: 'Blog /', href: '/blog' },
    { name: 'Contact ', href: '/contact' },
  ]

  return (
    <header className="bg-black  bg-opacity shadow-sm sticky top-0 z-50 text-white ">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center ">
            <h1 href="/" className="font-bold text-white text-4xl ">
              DELI <span className='text-[#da9360]'>Z</span>US
              <p className='text-[15px]  ml-6'> <span className='text-gray-500 
               mr-1 text-4xl '>- </span>
                Resto & cafe <span className='text-gray-500 
               mr-1 text-4xl '>- </span></p>
            </h1>
          
            
          </div>
           
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 py-6 px-20">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white hover:text-[#da9360] font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white  focus:outline-none"
            >
              {isMenuOpen ? (
                <FiX className="h-6 w-6" />
              ) : (
                <FiMenu className="h-6 w-6 text-white text-3xl" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-white hover:text-indigo-600 font-medium py-2 
                  px-4 rounded hover:bg-gray-50 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header