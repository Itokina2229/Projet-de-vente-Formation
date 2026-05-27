import React from 'react'
import { MapPin, Mail, Phone, Instagram, Facebook, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-dark text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-bold text-primary">K</span>
              <div className="flex flex-col">
                <span className="text-xs font-bold">BEAUTY</span>
                <span className="text-xs text-gray-400">ACADEMY</span>
              </div>
            </div>
            <p className="text-sm text-gray-400 mb-2">
              Des formations professionnelles pour lancer votre carrière en beauté.
            </p>
            <div className="flex gap-4">
            <a href="#" className="py-2 hover:bg-gray-800 rounded-full transition">
              <Instagram size={20} />
            </a>
            <a href="#" className="p-2 hover:bg-gray-800 rounded-full transition">
              <Facebook size={20} />
            </a>
            <a href="#" className="p-2 hover:bg-gray-800 rounded-full transition">
              <Linkedin size={20} />
            </a>
          </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-bold text-white mb-4">Formations</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-primary transition">Prothésiste Ongulaire</a></li>
              <li><a href="#" className="hover:text-primary transition">Cils & Extensions</a></li>
              <li><a href="#" className="hover:text-primary transition">Nail Art</a></li>
              <li><a href="#" className="hover:text-primary transition">Business & Branding</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-white mb-4">Entreprise</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-primary transition">À propos</a></li>
              <li><a href="#" className="hover:text-primary transition">Politiques</a></li>
              <li><a href="#" className="hover:text-primary transition">Mentions légales</a></li>
              <li><a href="#" className="hover:text-primary transition">FAQ</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-white mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <MapPin size={16} className="text-primary flex-shrink-0" />
                <span>Paris, France</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-primary flex-shrink-0" />
                <a href="mailto:contact@kbeauty.fr" className="hover:text-primary">contact@kbeauty.fr</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-primary flex-shrink-0" />
                <a href="tel:+33123456789" className="hover:text-primary">+33 1 23 45 67 89</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            &copy; 2026 K Beauty Academy. Tous droits réservés.
          </p>

          {/* Social Links */}
          
        </div>
      </div>
    </footer>
  )
}
