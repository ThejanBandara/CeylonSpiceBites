'use client'
import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import { Star } from 'lucide-react'

type PropType = {
  slides: number[]
  options?: EmblaOptionsType
}

const userFeedback = [
  { id: 1, name: "Yelling Cat", rating: 5, feedback: "Excellent food and service! The best Sri Lankan restaurant I've been to.", avatar: 'https://img.daisyui.com/images/profile/demo/yellingcat@192.webp' },
  { id: 2, name: "The Idiot Sandwitch", rating: 4, feedback: "Really good. The kottu roti was delicious, but the service was a little slow.", avatar: 'https://img.daisyui.com/images/profile/demo/idiotsandwich@192.webp' },
  { id: 3, name: "Gordon Ramsey", rating: 5, feedback: "Amazing flavors! Everything was cooked perfectly. Highly recommend.", avatar: 'https://img.daisyui.com/images/profile/demo/gordon@192.webp' },
  { id: 4, name: "Spider Person", rating: 4, feedback: "Great atmosphere and friendly staff. The food was good, but not outstanding.", avatar: 'https://img.daisyui.com/images/profile/demo/spiderperson@192.webp' },
  { id: 5, name: "Avergae Bulk", rating: 5, feedback: "The hoppers were fantastic! Such authentic Sri Lankan cuisine.", avatar: 'https://img.daisyui.com/images/profile/demo/averagebulk@192.webp' },
  { id: 6, name: "Distracted Guy", rating: 5, feedback: "Absolutely loved it! The spices were perfect, and the portions were generous.", avatar: 'https://img.daisyui.com/images/profile/demo/distracted1@192.webp' },
  { id: 7, name: "Yelling Woman", rating: 4, feedback: "Enjoyed the food, especially the seafood dishes. Good value for money.", avatar: 'https://img.daisyui.com/images/profile/demo/yellingwoman@192.webp' },
];



const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()])

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container w-10/12">
          {userFeedback.map((user) => (
            <div className="embla__slide w-[35vw] mx-3 h-[25vh] bg-base-200 p-2 rounded-lg flex flex-col items-start justify-between" key={user.id}>
              <div className='flex flex-row gap-2 items-center'>
                <div className='avatar'>
                  <div className='size-10 rounded-full'>
                    <img src={user.avatar} alt="" />
                  </div>
                </div>
                <p className='font-medium'>{user.name}</p>
              </div>
                <p className='font-light text-sm text-left'>{user.feedback}</p>
                <div className='flex flex-row gap-1 scale-90'>
                  <Star fill={`${user.rating === 1 || 2 || 3 || 4 || 5 ? '#DCA54D' : ''}`}/>
                  <Star fill={`${user.rating === 2 || 3 || 4 || 5 ? '#DCA54D' : ''}`}/>
                  <Star fill={`${user.rating === 3 || 4 || 5 ? '#DCA54D' : ''}`}/>
                  <Star fill={`${user.rating === 4 || 5 ? '#DCA54D' : ''}`}/>
                  <Star fill={`${user.rating === 5 ? '#DCA54D' : ''}`}/>
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EmblaCarousel
