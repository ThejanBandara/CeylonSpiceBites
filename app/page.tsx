import NavBar from '@/components/interface/NavBar'
import React from 'react'
import Image from 'next/image'

const food = [
  { id: 1, name: "food name", desc: "food desc with some details", imgURL: '/food.jpg', price: 999 },
  { id: 2, name: "food name", desc: "food desc with some details", imgURL: '/food.jpg', price: 999 },
  { id: 3, name: "food name", desc: "food desc with some details", imgURL: '/food.jpg', price: 999 },
  { id: 4, name: "food name", desc: "food desc with some details", imgURL: '/food.jpg', price: 999 },
  { id: 5, name: "food name", desc: "food desc with some details", imgURL: '/food.jpg', price: 999 },
]
const Home = () => {
  return (
    <main className='w-full min-h-screen'>
      <section className='w-full h-screen flex flex-col items-center justify-center relative' id='#home'>
        <NavBar />
        <div className='flex flex-col gap-4 items-center'>
          <h1 className='text-neutral-content text-4xl font-semibold text-center'>Savor the Authentic Flavors <br /> of Sri Lanka</h1>
          <div className='flex flex-row gap-2 items-center justify-evenly'>
            <button className='btn btn-neutral text-nowrap w-1/2'>Order Now</button>
            <button className='btn btn-outline bg-base-100 text-nowrap w-1/2'>Book a Table</button>
          </div>
        </div>
        <video autoPlay loop muted playsInline className='absolute -z-10 opacity-20 top-0 left-0 overflow-hidden'>
          <source src="/video bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>

      <section className='w-full h-[70vh] flex flex-col items-center justify-center relative' id='#'>
        <div className='bg-base-100 absolute top-0 w-full h-full -z-10'></div>
        <h1 className='text-2xl font-medium my-4'>A fine selection of our signature dishes</h1>
        <div className='flex flex-row gap-3 items-center justify-evenly w-10/12'>
          {
            food.map((f) => {
              return (
                <div className='rounded-lg bg-base-200 shadow-lg hover:shadow-neutral hover:mx-2 duration-500 p-1' key={f.id}>
                  <Image src={f.imgURL} width={150} height={150} alt='food image' className='aspect-square w-full rounded-t-lg object-contain' />
                  <div className='m-1 mt-2'>
                    <h2 className='font-medium text-lg'>{f.name}</h2>
                    <p className='text-sm font-light text-neutral-content/50'>{f.desc}</p>
                    <div className='flex flex-row items-center justify-between mt-2'>
                      <h2>LKR {f.price}</h2>
                      <button className='btn btn-sm btn-outline'>Add to cart</button>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
        <button className='btn btn-neutral my-4'>See full menu</button>
      </section>
      <section className='w-full h-[70vh] flex flex-row items-stretch justify-around px-12 bg-base-200' id='#'>
        <Image src={'/table.png'} width={500} height={100} alt='table' className=' object-contain' />
        <div className='flex flex-col items-end justify-center gap-4'>
          <h1 className='font-medium text-2xl text-right'>Reserve your Seat <br /> at the Heart of Sri Lankan Flavor</h1>
          <button className='btn btn-neutral btn-wide'>Book a Table</button>
        </div>
      </section>

      <section className='w-full h-[70vh] flex felx-row items-stretch' id='#'>
        <div className='w-1/4 flex flex-col items-start justify-center'>
          <h1 className='text-2xl font-medium my-4 pl-4'>
            "Rooted in Tradition, <br />
            Served with Passion"
          </h1>
          <button className='btn btn-neutral ml-4'>Learn more about us</button>
        </div>
          <Image src={'/about1.jpg'} width={500} height={300} alt='about image 1' className='w-1/4 object-fill'/>
          <Image src={'/about2.jpg'} width={500} height={300} alt='about image 2' className='w-1/4 object-cover'/>
          <Image src={'/about3.jpg'} width={500} height={300} alt='about image 3' className='w-1/4 object-fill'/>
      </section>

      <section className='w-full h-[50vh] bg-base-200 flex flex-row items-stretch justify-around'>
        <div className='flex flex-col items-start justify-center gap-4'>
          <h1 className='font-medium text-2xl'>We&apos;d love to hear from you</h1>
          <p>any questions or reamrks? just write us a message!</p>
          <button className='btn btn-neutral'>Get in touch</button>
        </div>
        <Image src={'/chef.png'} width={150} height={150} alt='chef' className='aspect-square w-auto my-8' />
      </section>

      <footer className="footer sm:footer-horizontal bg-base-100 text-base-content p-10">
        <aside className='flex flex-col items-center'>
          <Image src={'/logo.gif'} width={200} height={20} alt='logo' />
          <p className='text-center'>
            &copy; Ceylon Spice Bites
            <br />
            People's Favorite since 2000
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>

    </main>
  )
}

export default Home