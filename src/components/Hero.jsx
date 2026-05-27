import React from 'react'
import { BookOpenText , CheckCircle2 , BadgeCheck , Users } from 'lucide-react';
import Ongle from "../img/image.png"

export default function Hero() {
  return (
    <section className="bg-light py-12 md:py-15 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div>
            <p className="text-sm font-semibold text-primary mb-3">DEVENEZ EXPERTE</p>
            <h1 className="section-title text-6xl font-normal">
              Prothésiste 
            </h1>
            <h1 className="section-title text-6xl  font-normal">
              <span className='text-primary'>Ongulaire</span> & Experte 
            </h1>
            <h1 className="section-title text-6xl  mb-10 font-normal">
              Cils
            </h1>

            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              Formations professionnelles 100% pratique, accessibles et rentables.
            </p>

            {/* Benefits */}
            <div className=" mb-10 flex gap-8">
              <div className="flex items-start gap-3">
                <BookOpenText className="text-primary mt-3 flex-shrink-0 mt-1" size={25} />
                <span className="text-dark">Formations liberales</span>
              </div>
              <div className="flex items-start gap-3">
                <BadgeCheck className="text-primary mt-3 flex-shrink-0 mt-1" size={25} />
                <span className="text-dark">Certification lucrative</span>
              </div>
              <div className="flex items-start gap-3">
                <Users className="text-primary mt-3 flex-shrink-0 mt-1" size={20} />
                <span className="text-dark">Accompagnement intensif</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary">Voir mes formations</button>
              <button className="btn-secondary">Réserver un appel</button>
            </div>

            {/* Stats */}
            <div className="mt-12 flex gap-3 text-sm">
              <div class="flex -space-x-2 overflow-hidden mt-3">
               <img src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" class="inline-block size-8 rounded-full ring-2 ring-white outline -outline-offset-1 outline-black/5" />
               <img src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" class="inline-block size-8 rounded-full ring-2 ring-white outline -outline-offset-1 outline-black/5" />
               <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" alt="" class="inline-block size-8 rounded-full ring-2 ring-white outline -outline-offset-1 outline-black/5" />
               <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" class="inline-block size-8 rounded-full ring-2 ring-white outline -outline-offset-1 outline-black/5" />
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">⭐⭐⭐⭐⭐</p>
                <p className="text-gray-600">4.9/5 avis clients</p>
              </div>
            </div>
          </div>

          {/* Image */}
       <div className="relative h-full hidden md:flex items-center justify-center">
    <div className="hidden md:block">
  <img
    src={Ongle}
    alt="Formation beauté"
    className="absolute right-20 top-13   -translate-y-1/2 w-[500px] object-contain"
  />
</div>

  {/* BADGES CONTAINER */}
  <div className="absolute -right-5 top-1/2 -translate-y-1/2 flex flex-col gap-2">

    {/* Badge 1 */}
      <div
      className="
        bg-[rgba(255,252,250,0.82)]
        backdrop-blur-[14px]
        border border-[rgba(192,122,106,0.2)]
        rounded-xl px-5 py-3
        shadow-xl min-w-[170px]
      "
    >
      <span className="block text-2xl font-bold text-[#2e1c14]">
        +2500
      </span>

      <span className="text-[11px] uppercase tracking-[0.15em] text-[rgba(46,28,20,0.6)]">
        Élèves formées
      </span>

      <div className="mt-2 h-[2px] bg-[rgba(192,122,106,0.15)] rounded-full overflow-hidden">
        <div className="h-full w-[85%] bg-[#c07a6a] rounded-full"></div>
      </div>
    </div>

    {/* Badge 2 */}
     <div
      className="
        bg-[rgba(255,252,250,0.82)]
        backdrop-blur-[14px]
        border border-[rgba(192,122,106,0.2)]
        rounded-xl px-5 py-3
        shadow-xl min-w-[170px]
      "
    >
      <span className="block text-2xl font-bold text-[#c5884a]">
        98%
      </span>

      <span className="text-[11px] uppercase tracking-[0.15em] text-[rgba(46,28,20,0.6)]">
        Taux de satisfaction
      </span>

      <div className="mt-2 h-[2px] bg-[rgba(192,122,106,0.15)] rounded-full overflow-hidden">
        <div className="h-full w-[98%] bg-[#c5884a] rounded-full"></div>
      </div>
    </div>

    {/* Badge 3 */}
      <div
      className="
        bg-[rgba(255,252,250,0.82)]
        backdrop-blur-[14px]
        border border-[rgba(192,122,106,0.2)]
        rounded-xl px-5 py-3
        shadow-xl min-w-[170px]
      "
    >
      <span className="block text-2xl font-bold text-[#c07a6a]">
        100%
      </span>

      <span className="text-[11px] uppercase tracking-[0.15em] text-[rgba(46,28,20,0.6)]">
        De réussite
      </span>

      <div className="mt-2 h-[2px] bg-[rgba(192,122,106,0.15)] rounded-full overflow-hidden">
        <div className="h-full w-full bg-[#c07a6a] rounded-full"></div>
      </div>
    </div>

  </div>

<div
  className="
    absolute -bottom-10 left-1/2 -translate-x-1/2
    z-10 flex flex-row items-center justify-between gap-5
    w-[90%] max-w-[320px]
    bg-[rgba(255,252,250,0.88)]
    backdrop-blur-[14px]
    border border-[rgba(192,122,106,0.2)]
    rounded-[10px]
    px-5 py-3
    cursor-pointer
    transition-all duration-200
    hover:shadow-xl hover:-translate-y-1
    animate-[slideUp_0.9s_cubic-bezier(0.22,1,0.36,1)_0.7s_both]
  "
>
  {/* IMAGE */}
  <div className="w-[65px] h-[80px] rounded-md overflow-hidden flex-shrink-0">
    <img
      src="https://images.unsplash.com/photo-1604654894610-df63bc536371?w=200&q=80&fit=crop"
      alt="Formation"
      className="w-full h-full object-cover"
    />
  </div>

  {/* CONTENT */}
  <div className="flex-1">
    <p className="text-[10px] font-medium tracking-[0.1em] uppercase">
      Formation prothésiste ongulaire
    </p>

    <p className="text-[12px] tracking-[0.1em] uppercase  mt-[2px] mb-[6px]">
      2 jours intensifs
    </p>

    <p className="text-[32px] font-semibold leading-none text-[#2e1c14]">
      300€
    </p>
  </div>

  {/* ARROW */}
  <button
    aria-label="Voir la formation"
    className="
      w-8 h-8 flex items-center justify-center
      rounded-full
      bg-[rgba(192,122,106,0.1)]
      border border-[rgba(192,122,106,0.3)]
      text-[#c07a6a]
      cursor-pointer
      transition-colors duration-200
      hover:bg-[rgba(192,122,106,0.2)]
      flex-shrink-0
    "
  >
    →
  </button>
</div>
          </div>
        </div>
      </div>
    </section>
  )
}