import Image from 'next/image'
import React from 'react'

const NavBar = () => {
    return (
        <div className='fixed top-0 left-1/2 w-[70vw] -translate-x-1/2 mt-4 bg-base-300 px-6 py-2 rounded-full flex flex-row items-center justify-between z-20'>
            <Image src={'/logo.gif'} width={100} height={20} alt='logo'/>
            <div className='flex flex-row gap-2 items-center justify-evenly max-w-1/2 grow'>
                <a href="/" className=''>Home</a>
                <a href="/menu" className=''>Menu</a>
                <a href="/reservation" className=''>Reservations</a>
                <a href="/about" className=''>about us</a>
                <a href="/contact" className=''>contact</a>
            </div>
            <div className='flex flex-row gap-2 items-center justify-evenly'>
                <button className='btn btn-outline w-1/2'>log in</button>
                <button className='btn btn-neutral w-1/2 text-nowrap'>Sign up</button>
            </div>
        </div>
    )
}

export default NavBar