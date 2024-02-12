"use client"
import React from 'react'
import Image from 'next/image'
import LightGallery from 'lightgallery/react'
import 'lightgallery/css/lightgallery.css'
import 'lightgallery/css/lg-zoom.css'
import 'lightgallery/css/lg-thumbnail.css'
import lgZoom from 'lightgallery/plugins/zoom'


export default function Gallery() {
    return (
        <section className=" py-16 px-16 md:px-32 ">
            <h2 className='text-slate-800 text-center'>Our Photos Gallery</h2>
            {/* <p className="text-slate-700 sm:w-3/4 m-auto font-light my-10 text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea inventore omnis aliquam maiores deserunt fugit eveniet, officia et dolores natus sed distinctio quidem sapiente ratione illo, pariatur quos eligendi accusamus.</p> */}

            <LightGallery speed={500} plugins={[lgZoom]}>
                <Image alt="...." src="/images/a.jpg" width={1280} height={853} className="w-full h-full object-cover col-span-2 rounded " />
                <Image alt="...." src="/images/b.jpg" width={1280} height={853} className="w-full h-full object-cover sm:col-span-2 col-span-3 rounded row-span-2 " />
                <Image alt="...." src="/images/c.jpg" width={1280} height={853} className="w-full h-full object-cover rounded col-span-2 sm:col-auto  " />
                <Image alt="...." src="/images/d.jpg" width={1280} height={853} className="w-full h-full object-cover rounded col-span-3 sm:col-auto" />
                <Image alt="...." src="/images/kitchen.jpg" width={1280} height={853} className="w-full h-full object-cover rounded col-span-2 sm:col-auto" />
                <Image alt="...." src="/images/b.jpg" width={1280} height={853} className="w-full h-full object-cover rounded col-span-5 sm:col-auto" />
            </LightGallery>

        </section>
    )
}
