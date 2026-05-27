import React from 'react'
import cilRusse from "../img/Cils_Russe.png"
import Ongle from "../img/Onglerie.png"
import deco from "../img/Decoration.png"
import avant from "../img/Avant.png"
import photo from "../img/Pink_Chrome_on_Coffin_Nails-removebg-preview.png"
import image from "../img/image.png"


const images = [
  'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=250&h=250&fit=crop',
  'https://images.unsplash.com/photo-1560066169-b591a60b0ba0?w=250&h=250&fit=crop',
  'https://images.unsplash.com/photo-1596729920735-0bae08ffe246?w=250&h=250&fit=crop',
  'https://images.unsplash.com/photo-1552864294-e35a6d4b2765?w=250&h=250&fit=crop',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=250&h=250&fit=crop',
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=250&h=250&fit=crop',
  'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=250&h=250&fit=crop',
  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=250&h=250&fit=crop'
]

export default function Gallery() {
  return (
    <section className="py-9 px-4 sm:px-6 lg:px-8 bg-light">
      <div className="max-w-7xl mx-10">
        <div className="flex flex-col sm:flex-row items-center gap-6">
                <p className="text-[25px] font-semibold mb-12 font-serif">@KBEAUTY.ACADEMY</p>
               <div className="flex gap-2 p-3 items-center overflow-hidden">

  <div className="w-[140px]">
    <img src={cilRusse} className="h-40 w-full object-cover rounded-[12px]" />
  </div>

  <div className="w-[140px]">
    <img src={Ongle} className="h-40 w-full object-cover rounded-[12px]" />
  </div>

  <div className="w-[140px]">
    <img src={deco} className="h-40 w-full object-cover rounded-[12px]" />
  </div>

  <div className="w-[140px]">
    <img src={avant} className="h-40 w-full object-cover rounded-[12px]" />
  </div>

  {/* cachées en mobile */}
  <div className="hidden sm:block w-[140px]">
    <img src={photo} className="h-40 w-full object-cover rounded-[12px]" />
  </div>

  <div className="hidden sm:block w-[140px]">
    <img src={image} className="h-40 w-full object-cover rounded-[12px]" />
  </div>

</div>
        </div>
  
      </div>
    </section>
  )
}
