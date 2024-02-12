'use client'
import {
    Sheet,
    SheetTrigger,
    SheetContent,
}
    from './ui/sheet'
import config from "../jsconfig.json"
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoLogoFacebook, IoLogoLinkedin, IoLogoTwitter } from 'react-icons/io5'

import Link from 'next/link'

export default function NavBar() {
    return (
        <nav className="md:px-32 px-16 py-10 fixed  w-full top-0 left-0 z-50 bg-secondary-transparent overflow-hidden flex flex-col  sm:flx-row justify-between">
            <span className='font-bold sm:text-3xl  text-2xl text-primary-site'>{config.siteName}s</span>
            <Sheet modal>
                <SheetTrigger>
                    <GiHamburgerMenu className='text-white text-2xl' />
                </SheetTrigger>
                <SheetContent side="left" className="bg-[#121212ef]" >
                    <ul className='flex flex-col gap-8 mt-16'>
                        <li className='text-gray-50 text-2xl text-center'><Link href="\">Home</Link></li>
                        <li className='text-gray-50 text-2xl text-center'><Link href="\">Rooms</Link></li>
                        <li className='text-gray-50 text-2xl text-center'><Link href="\">Contact</Link></li>
                        <li className='text-gray-50 text-2xl text-center'><Link href="\">Services</Link></li>
                    </ul>
                    <div className='pt-4 absolute bottom-6 left-1/2 -translate-x-1/2 w-full p-6'>
                        <div className='text-slate-100 w-max flex gap-4 text-2xl m-auto mb-4 border-t pt-6 px-8'>
                            <IoLogoFacebook role='button' className='hover' />
                            <IoLogoTwitter role='button' className='hover' />
                            <IoLogoLinkedin role='button' className='hover' />
                        </div>
                        <small className='text-slate-300 text-center  block'>&copy; developed by <span className="text-primary-site text-xs">Muwanguzi Joseph 2024</span></small>
                    </div>
                </SheetContent>
            </Sheet>
        </nav>
    )
}