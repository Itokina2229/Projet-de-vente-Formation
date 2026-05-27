import React from 'react'
import { Menu, X, Search, ShoppingCart, User } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-primary">K</span>
            <div className="flex flex-col">
              <span className="text-xs font-bold text-dark">BEAUTY</span>
              <span className="text-xs text-gray-600">ACADEMY</span>
            </div>
          </div>

          {/* Menu Desktop */}
          <div className="hidden md:flex gap-8 items-center">
            <a href="#" className="text-dark hover:text-primary transition">Accueil</a>
            <a href="#formations" className="text-dark hover:text-primary transition">Formations</a>
            <a href="#boutique" className="text-dark hover:text-primary transition">Boutique</a>
            <a href="#approche" className="text-dark hover:text-primary transition">Approche</a>
            <a href="#blog" className="text-dark hover:text-primary transition">Blog</a>
            <a href="#contact" className="text-dark hover:text-primary transition">Contact</a>
          </div>

          {/* Icons */}
          <div className="hidden md:flex items-center gap-4">
            <button className="p-2 hover:bg-light rounded-full">
              <Search size={20} />
            </button>
            <button className="p-2 hover:bg-light rounded-full">
              <ShoppingCart size={20} />
            </button>
            <button className="btn-primary text-sm">S&apos;inscrire</button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 space-y-4 pb-4 border-t pt-4">
            <a href="#" className="block text-dark hover:text-primary">Accueil</a>
            <a href="#formations" className="block text-dark hover:text-primary">Formations</a>
            <a href="#boutique" className="block text-dark hover:text-primary">Boutique</a>
            <a href="#approche" className="block text-dark hover:text-primary">Approche</a>
            <a href="#blog" className="block text-dark hover:text-primary">Blog</a>
            <a href="#contact" className="block text-dark hover:text-primary">Contact</a>
            <button className="btn-primary w-full">S&apos;inscrire</button>
          </div>
        )}
      </nav>
    </header>
  )
}
