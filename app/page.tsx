import NavBar from '@/components/interface/NavBar'
import React from 'react'
import Image from 'next/image'
import EmblaCarousel from '@/components/interface/carousel'
import { EmblaOptionsType } from 'embla-carousel'
import { Flame, Heart } from 'lucide-react'

const food = [
  {
    id: 1,
    name: "Kottu Roti",
    desc: "A popular Sri Lankan street food made with chopped roti, vegetables, eggs or meat, and spices.",
    imgURL:
      "https://www.theflavorbender.com/wp-content/uploads/2018/03/Chicken-Kottu-Roti-The-Flavor-Bender-2-5-700x1049.jpg",
    price: 650,
    category: "Main Course",
  },
  {
    id: 2,
    name: "String Hoppers (Idiyappam)",
    desc: "Steamed rice flour noodles, often served with curries and coconut milk.",
    imgURL:
      "https://www.hungrylankan.com/wp-content/uploads/2024/12/string-hoppers-blogg-6-768x1024.jpg.webp",
    price: 400,
    category: "Breakfast",
  },
  {
    id: 3,
    name: "Hoppers (Appa)",
    desc: "Bowl-shaped pancakes made from fermented rice flour batter, often with an egg in the center.",
    imgURL:
      "https://www.hungrylankan.com/wp-content/uploads/2024/06/PXL_20230907_022830223.PORTRAIT-2-768x1024.jpg.webp",
    price: 350,
    category: "Breakfast",
  },
  {
    id: 4,
    name: "Rice and Curry",
    desc: "A staple Sri Lankan dish consisting of rice served with various vegetable, meat, or fish curries.",
    imgURL:
      "https://www.theflavorbender.com/wp-content/uploads/2016/11/Sri-Lankan-Cashew-Curry-5669-Copy-700x1057.jpg",
    price: 750,
    category: "Main Course",
  }
]

const recommended = [
  {
    id: 7,
    name: "Lamprais",
    desc: "Rice cooked in stock with meat (usually chicken, beef, or lamb), vegetables, and sambol, wrapped in a banana leaf and baked.",
    imgURL:
      "https://www.hungrylankan.com/wp-content/uploads/2020/06/20200624_145019_compress22-768x1024.jpg.webp",
    price: 900,
    category: "Main Course",
  },
  {
    id: 8,
    name: "Fish Ambul Thiyal",
    desc: "A sour fish curry, typically made with tuna or other firm fish, cooked with goraka (Garcinia cambogia).",
    imgURL:
      "https://www.hungrylankan.com/wp-content/uploads/2020/08/20200727_102021-1_compress52-768x1024.jpg.webp",
    price: 850,
    category: "Seafood",
  },
  {
    id: 9,
    name: "Kiribath",
    desc: "Milk rice, cooked with coconut milk, often served with lunu miris.",
    imgURL:
      "https://www.hungrylankan.com/wp-content/uploads/2021/01/20210101_120451_compress69-768x1024.jpg.webp",
    price: 300,
    category: "Breakfast",
  },
  {
    id: 10,
    name: "Parippu (Dhal Curry)",
    desc: "A creamy lentil curry, a staple in Sri Lankan cuisine.",
    imgURL:
      "https://www.hungrylankan.com/wp-content/uploads/2021/02/20210206_145545-2_compress33.jpg.webp",
    price: 450,
    category: "Vegetarian",
  },
]
const Home = () => {
  const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true }
  const SLIDE_COUNT = 5
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

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

      <section className='w-full h-fit flex flex-col items-center justify-center relative bg-base-200' id='#'>
        <div className='bg-base-100 absolute top-0 w-full h-full -z-10'></div>
        <h1 className='text-2xl font-medium my-4'>Recommended For you</h1>
        <div className='w-10/12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
          {
            recommended.map((f) => {
              return (
                <div className='rounded-lg bg-base-100 shadow-lg duration-500 p-1 relative flex flex-col items-streach justify-between' key={f.id}>
                  <button className='bg-neutral p-1 rounded-full border-2 absolute top-0 right-0 mt-3 mr-3'><Heart className='scale-90' /></button>
                  <Image src={f.imgURL} width={150} height={150} alt='food image' className='aspect-square w-full rounded-t-lg object-cover' />
                  <div className='m-1 mt-2 flex flex-col items-start justify-between grow '>
                    <h2 className='font-medium text-lg'>{f.name}</h2>
                    <p className='text-xs font-light text-neutral-content/50'>{f.desc}</p>
                    <div className='w-full flex flex-row items-center justify-between mt-2'>
                      <h2 className='font-semibold text-xl'>LKR {f.price}</h2>
                      <button className='btn btn-sm btn-outline'><Flame className='scale-75' /> Fast order</button>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>

        <h1 className='text-2xl font-medium my-4'>A fine selection of our signature dishes</h1>
        <div className='w-10/12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
          {
            food.map((f) => {
              return (
                <div className='rounded-lg bg-base-100 shadow-lg duration-500 p-1 relative flex flex-col items-streach justify-between' key={f.id}>
                  <button className='bg-neutral p-1 rounded-full border-2 absolute top-0 right-0 mt-3 mr-3'><Heart className='scale-90' /></button>
                  <Image src={f.imgURL} width={150} height={150} alt='food image' className='aspect-square w-full rounded-t-lg object-cover' />
                  <div className='m-1 mt-2 flex flex-col items-start justify-between grow '>
                    <h2 className='font-medium text-lg'>{f.name}</h2>
                    <p className='text-xs font-light text-neutral-content/50'>{f.desc}</p>
                    <div className='w-full flex flex-row items-center justify-between mt-2'>
                      <h2 className='font-semibold text-xl'>LKR {f.price}</h2>
                      <div className='flex gap-2'>
                        <button className='btn btn-sm btn-outline'>Add to cart</button>
                        <div className="tooltip" data-tip="Fast Order">
                        <button className='btn btn-sm btn-outline btn-square'><Flame /></button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>

        <button className='btn btn-neutral my-4'>See full menu</button>
      </section>

      <section className='w-full h-[70vh] flex flex-col items-center justify-evenly relative'>

        <div className='absolute top-0 left-0 w-full h-full z-20 flex flex-row items-strech justify-between px-8'>
          <div className='w-1/4 bg-gradient-to-r from-base-100 via-base-100/60 to-black/0'></div>
          <div className='w-1/4 bg-gradient-to-l from-base-100 via-base-100/60 to-black/0'></div>
        </div>
        <h1 className='my-8 font-medium text-2xl'>Hear what our customers say</h1>
        <div className='w-full flex flex-row'>
          <EmblaCarousel slides={SLIDES} options={OPTIONS} />
        </div>
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
        <Image src={'/about1.jpg'} width={500} height={300} alt='about image 1' className='w-1/4 object-fill' />
        <Image src={'/about2.jpg'} width={500} height={300} alt='about image 2' className='w-1/4 object-cover' />
        <Image src={'/about3.jpg'} width={500} height={300} alt='about image 3' className='w-1/4 object-fill' />
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