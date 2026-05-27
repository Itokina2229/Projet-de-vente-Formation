import React from 'react'
import { ShoppingCart , CheckIcon , PhoneIcon } from 'lucide-react'
import Avant from "../img/Avant.png"
import Apres from "../img/Decoration.png"
import lampe from "../img/L.png"
import kit from "../img/kit.png"
import oeuil from "../img/oeuil.png"

const courses = [
  {
    id: 1,
    name: 'Kit Onglerie',
    price: '300€',
    image: kit
  },
  {
    id: 2,
    name: 'Kit Cils Complet',
    price: '120€',
    image: oeuil
  },
  {
    id: 3,
    name: 'Lampes UV-LED',
    price: '149€',
    image: lampe
  }
]

const features = [
  "Formations 100% pratiques",
  "Format intensif & efficace",
  "Petits groupes",
  "Formateurs expérimentés",
  "Certification incluse",
  "Suivi personnalisé",
  "Financement en plusieurs fois",
];

export default function ProductShowcase() {
  return (
    <section id="boutique" className="py-10 px-4 sm:px-6 lg:px-8 bg-light">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-[30%_45%_20%] gap-3 mb-12">
         {/*section 1 */}

         <div className='col-span-1/2 border rounded-sm p-3'>
           <p className="text-md font-normal text-primary mb-1">Resultat reels</p>
           <p className='text-[17px] font-medium mb-5 font-serif' >Elles ont changé de vie grâce à nos formations</p>
        <div className='flex gap-3 p-2 mb-6'>
            <div className=' relative   w-[160px] rounded-medium'>
              <img src={Avant}  className="w-full h-40 object-cover rounded-[12px]" />
            </div>
            <div className=' relative   w-[160px] rounded-medium'>
              <img src={Apres}  className="w-full h-40 object-cover rounded-[12px]" />
            </div>
            
        </div>
       <div className='flex gap-8'>
         <div>
          <button className='text-[10px] bg-light p-2 border'>Voir tous les temoignages </button>
         </div>
        <div className=" flex gap-3 text-sm">
              <div class="flex -space-x-1 overflow-hidden mt-2">
              <img src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" class="inline-block size-6 rounded-full ring-2 ring-white outline -outline-offset-1 outline-black/5" />
              <img src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" class="inline-block size-6 rounded-full ring-2 ring-white outline -outline-offset-1 outline-black/5" />
              <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" alt="" class="inline-block size-6 rounded-full ring-2 ring-white outline -outline-offset-1 outline-black/5" />
              <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" class="inline-block size-6 rounded-full ring-2 ring-white outline -outline-offset-1 outline-black/5" />
            </div>
              <div>
                <p className="text-[12px] font-bold text-primary">+2500 éleves</p>
                <p className="text-gray-600 text-[12px]">4.9/5 avis clients</p>
              </div>
            </div>
       </div>


         </div>
         {/*section 2 */}
            <div className='col-span-1/2 border rounded-sm p-3'>
           <p className="text-md font-normal text-primary mb-1">Boutique professionnels</p>
           <p className='text-[17px] font-medium mb-5 font-serif' >Tout les materiels pour reussir</p>
        
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-5">
          {courses.map(course => (
            <div key={course.id} className="bg-light rounded-1xl overflow-hidden hover:shadow-lg transition-shadow duration-300 border rounded-xl">
              {/* Course Image */}
              <div className="relative h-25 bg-gradient-to-br from-secondary to-accent overflow-hidden">
                <img
                  src={course.image}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Course Info */}
              <div className="p-6">
                <h3 className="font-medium text-[14px] text-dark mb-1">{course.name}</h3>
               
              <div className='mb-2 flex items-center justify-between py-2'>
              <p className="font-medium text-xl font-arial">{course.price}</p>
              <button className='w-8 h-8 flex items-center justify-center rounded-full bg-dark'>
                <ShoppingCart size={20} className="text-white"/>
              </button>
            </div>
                 
                  
                
                   
                
              </div>
              
            </div>
          ))}
        </div>
       <div className='flex justify-center'>
         <button className='btn text-[14px] rounded-xl'>Voir toute la boutique</button>
        
       </div>
      
         </div>
          {/*section 3*/}
          <div
          className="bg-red-100 rounded-2xl border border-[#f0e0db] p-8 fade-in w-[300px]"
          style={{ animationDelay: "160ms" }}
        >
          <p className="text-[10px] tracking-[0.18em] uppercase text-[#b08a8a] mb-5 font-medium font-serif">
            Pourquoi nous choisir ?
          </p>
 
          <ul className="flex flex-col gap-2 mb-6">
            {features.map((f) => (
              <li key={f} className="flex items-center gap-2 text-[12px] text-[#5a3e3e]">
                <span className="w-7 h-7 rounded-full bg-[#f5ddd5] flex items-center justify-center text-[#c07060] flex-shrink-0">
                  <CheckIcon />
                </span>
                {f}
              </li>
            ))}
          </ul>
 
          <button className="flex items-center justify-center gap-2 w-full py-2.5 bg-[#d08070] hover:bg-[#be6a5a] text-white text-[12.5px] font-medium rounded-lg transition-colors">
            <PhoneIcon />
            Réserver un appel →
          </button>
        </div>
        </div>
      </div>
    </section>
  )
}
