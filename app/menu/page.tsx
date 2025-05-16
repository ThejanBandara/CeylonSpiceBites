'use client'
import { sampleFood } from '@/components/food'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import NavBar from '@/components/interface/NavBar'
import { Heart } from 'lucide-react'


const MenuPage = () => {

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [categories, setCategories] = useState<string[]>([]);
  const [food, setFood] = useState<any[]>(sampleFood);

  useEffect(() => {
    const uniqueCategories = [...new Set(sampleFood.map((item) => item.category))];
    setCategories(['All', ...uniqueCategories]);
  }, []);

  const filterFood = () => {
    if (selectedCategory === 'All') {
      setFood(sampleFood);
    }
    else {
      const filtered = sampleFood.filter((f) => f.category === selectedCategory);
      setFood(filtered);
    }
  }

   useEffect(() => {
    filterFood();
  }, [selectedCategory]);

  return (
    <div className='w-full h-auto flex flex-col items-center'>
      <NavBar/>
      <div className='w-full h-[50vh] flex flex-col items-center justify-center relative'>
        <h1 className='text-4xl font-medium'>The Menu</h1>
        <Image src={'/shop2.jpg'} width={1000} height={500} alt='bg' className='-z-10 absolute top-0 left-0 w-full object-fill overflow-hidden opacity-40'/>
      </div>
      <div className='my-4 w-10/12 flex flex-row items-center justify-center gap-3'>
        {
        categories.map((c) => {
          return (
            <button className={`btn border-[1px] border-neutral-content ${selectedCategory === c ? 'btn-neutral' : 'btn-soft'}`} onClick={() => { setSelectedCategory(c); }}>{c}</button>
          )
        })
      }
      </div>
      <div className='w-10/12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {
          food.map((f) => {
            return (
              <div className='rounded-lg bg-base-200 shadow-lg duration-500 p-1 relative flex flex-col items-streach justify-between' key={f.id}>
                <button className='bg-neutral p-1 rounded-full border-2 absolute top-0 right-0 mt-3 mr-3'><Heart className='scale-90'/></button>
                <Image src={f.imgURL} width={150} height={150} alt='food image' className='aspect-square w-full rounded-t-lg object-cover' />
                <div className='m-1 mt-2 flex flex-col items-start justify-between grow '>
                  <h2 className='font-medium text-lg'>{f.name}</h2>
                  <p className='text-xs font-light text-neutral-content/50'>{f.desc}</p>
                  <div className='w-full flex flex-row items-center justify-between mt-2'>
                    <h2 className='font-semibold text-xl'>LKR {f.price}</h2>
                    <button className='btn btn-sm btn-outline'>Add to cart</button>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default MenuPage