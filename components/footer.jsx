import React from 'react'
import config from '../jsconfig.json'
import { IoLogoFacebook, IoLogoLinkedin, IoLogoTwitter } from 'react-icons/io5'

export default function Footer() {
    return (
        <footer className=' bg-slate-900 px-32 py-8'>
            <div className='grid md:grid-cols-5'>
                <div className=' col-span-2'>
                    <h3 className='text-primary-site font-bold text-2xl mb-6'>{config.siteName}</h3>
                    <small className='text-slate-400'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero possimus rerum assumenda id, veniam inventore?</small>
                </div>
            </div>
            <div className='border-t pt-4 mt-8 flex justify-between'>
                <small className='text-slate-300 mb-6'>&copy; developed by <span className="text-primary-site">Muwanguzi Joseph 2024</span></small>
                <div className='text-slate-100 w-max flex flex-col sm:flex-row gap-3 text-2xl'>
                    <IoLogoFacebook role='button' className='hover:text-primary-site ease-in duration-300' />
                    <IoLogoTwitter role='button' className='hover:text-primary-site ease-in duration-300' />
                    <IoLogoLinkedin role='button' className='hover:text-primary-site ease-in duration-300' />
                </div>
            </div>
        </footer>
    )
}
