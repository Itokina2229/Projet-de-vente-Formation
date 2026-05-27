import React from 'react'
import { Clock, Users, Award } from 'lucide-react'
import Business from "../img/Business.png"
import cils from "../img/Cils_Russe.png"
import Deco from "../img/Decoration.png"
import Ongle from "../img/Onglerie.png"
import Poses from "../img/Pose_cils.png"

const courses = [
  {
    id: 1,
    title: 'Prothésiste Ongulaire',
    price: '300€',
    duration: '2 jours intensive',
    level: 'Débutant',
    image: Ongle,
     description: [
      'Maîtrisez les techniques essentielles',
      'Apprentissage 100% pratique',
      'Kit professionnel inclus'
    ],   
  },
  {
    id: 2,
    title: 'Cils : Pose Cil à Cil',
    price: '350€',
    duration: 'Formation',
    level: 'Débutant',
    image: Poses,
     description: [
      'Maîtrisez les techniques essentielles',
      'Apprentissage 100% pratique',
      'Kit professionnel inclus'
    ],
    
  },
  {
    id: 3,
    title: 'Cils : Volume Russe',
    price: '450€',
    duration: '3 jours',
    level: 'Intermédiaire',
    image: cils,
     description: [
      'Maîtrisez les techniques essentielles',
      'Apprentissage 100% pratique',
      'Kit professionnel inclus'
    ],
    
  },
  {
    id: 4,
    title: 'Nail Art & Décoration',
    price: '350€',
    duration: '5 jours',
    level: 'Débutant',
    image: Deco,
     description: [
      'Maîtrisez les techniques essentielles',
      'Apprentissage 100% pratique',
      'Kit professionnel inclus'
    ],
  },
  {
    id: 5,
    title: 'Business & Branding',
    price: '200€',
    duration: '100% Business',
    level: 'Tous niveaux',
    image: Business,
     description: [
      'Maîtrisez les techniques essentielles',
      'Apprentissage 100% pratique',
      'Kit professionnel inclus'
    ],
    
  },

]

export default function CoursesSection() {
  return (
    <section id="formations" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <p className="text-sm font-semibold text-primary mb-2">NOS FORMATIONS PHARES</p>
          <div className='flex justify-between'>
            <h2 className="text-2xl font-medium mb-1">
            Des formations concrètes pour un métier rentable
          </h2>
             <button className="btn" >Voir toutes les formations</button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
          {courses.map(course => (
            <div key={course.id} className="bg-light rounded-1xl overflow-hidden hover:shadow-lg transition-shadow duration-300 border">
              {/* Course Image */}
              <div className="relative h-48 bg-gradient-to-br from-secondary to-accent overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Course Info */}
              <div className="p-6">
                <h3 className="font-medium text-lg text-dark mb-1">{course.title}</h3>
                <div className="flex items-center gap-2 mb-2">
                    <Clock size={12} className="text-primary" />
                    <p className='text-[13px]'>{course.duration}</p>
                  </div>
                   <p className="font-bold text-xl">{course.price}</p>
          

                {/* Meta Info */}
                <div className="space-y-2 mb-6 text-sm mt-6 text-gray-600">
                  {course.description.map((desc, index) => (
                 <div key={index} className="flex gap-2 text-sm text-gray-600">
               <span className="text-primary font-bold">+</span>
                <p>{desc}</p>
              </div>
  ))}
                </div>

                {/* Price and Button */}
              
                  <button className="btn-secondary  rounded-xl text-sm py-2 px-4 w-full">
                    Réserver
                  </button>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
