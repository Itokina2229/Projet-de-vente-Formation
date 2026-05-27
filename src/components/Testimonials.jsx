import React from 'react'
import { Star } from 'lucide-react'
import { BookOpenText , CheckCircle2 , BadgeCheck , Users } from 'lucide-react';
import formation from "../img/Business.png"
import Ongle from "../img/Onglerie.jfif"
import deco from "../img/Decoration.jfif"


const testimonials = [
  {
    id: 1,
    author: 'Marie L.',
    text: 'Formation exceptionnelle ! J\'ai pu lancer mon activité très rapidement.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop'
  },
  {
    id: 2,
    author: 'Sarah M.',
    text: 'Les formatrices sont très professionnelles et à l\'écoute de nos besoins.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop'
  },
  {
    id: 3,
    author: 'Éva P.',
    text: 'Meilleur investissement pour mon futur ! Fortement recommandé.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=100&h=100&fit=crop'
  },
  {
    id: 4,
    author: 'Jessica D.',
    text: 'Les techniques enseignées sont actualisées et vraiment pratiques.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop'
  }
]

export default function Testimonials() {
  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8 bg-red-100">
      <div className="max-w-7xl mx-auto">
      <div className='flex gap-5'>
          <div className='px-5'>
             <p className='mb-2 font-medium tex-[14px]'>2 JOURS POUR CHANGER TON AVENIR</p>
       <h1 className='section-title font-medium mb-4 font-serif' >Formation Prothésiste Ongulaire </h1>
      <div className='items-center flex gap-6 mb-4'>
         <p className='text-[35px] font-bold font-sans'>300€</p>
          <p className='text-[15px]'> au lieu de 350€</p>
      </div>
       <div className='flex gap-12 items-center'>
        <button className=' bg-dark px-6 py-3 border-2  text-white rounded-xl font-medium hover:bg-white hover:text-dark transition-colors'>Acceder a la formation</button>
        <div className='flex gap-2'>
           <CheckCircle2 size={20 } className='text-primary'/>
          <p className='text-[14px] font-serif'>Support inclus</p>
          
        </div>
         <div className='flex gap-2'>
          <BadgeCheck size={20 } className='text-primary'/>
        <p className='text-[14px] font-serif'>certification</p>
        </div>
        
       </div>
          </div>
          
          <div className="hidden md:flex gap-1 items-center">
            <div className='flex gap-2 p-3 items-center '>
                      <div className=' relative   w-[200px] rounded-medium'>
                        <img src={formation}  className="w-full h-40 object-cover rounded-[12px]" />
                      </div>
                      <div className=' relative   w-[160px] rounded-medium'>
                        <img src={Ongle}  className="w-full h-40 object-cover rounded-[12px]" />
                      </div>
                      <div className=' relative   w-[160px] rounded-medium'>
                        <img src={deco}  className="w-full h-40 object-cover rounded-[12px]" />
                      </div>
                      
                  </div>
              <div>
              <div className='w-20 h-20 flex items-center justify-center rounded-full bg-white'>
                <p className='text-[25px] font-bold font-serif'>-50€</p>
              </div>
              </div>

          </div>
      </div>


      </div>
    </section>
  )
}
