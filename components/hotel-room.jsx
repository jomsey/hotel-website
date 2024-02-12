import React from 'react'
import Image from 'next/image'
import { GiBathtub, GiBed } from "react-icons/gi";
import { FaTv } from "react-icons/fa6";




export default function HotelRoom({ name }) {
    return (
        <div className="grid md:grid-cols-2  mt-12 gap-8">
            <div className=" bg-slate-50 p-6 rounded relative">
                <Image alte="...." src="/images/b.jpg" width={1280} height={853} className="w-full h-auto md:h-3/4 object-cover rounded" />
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
                    <Image alte="...." src="/images/a.jpg" width={1280} height={853} className="w-full h-full object-cover rounded" />
                    <Image alte="...." src="/images/c.jpg" width={1280} height={853} className="w-full h-full object-cover rounded" />
                    <Image alte="...." src="/images/d.jpg" width={1280} height={853} className="w-full h-full object-cover rounded" />
                    <Image alte="...." src="/images/b.jpg" width={1280} height={853} className="w-full h-full object-cover rounded" />
                </div>
            </div>
            <div className="bg-slate-50 p-6 rounded">
                <h3 className="font-semibold text-slate-800 text-xl">{name}</h3>
                <div className="mt-6 flex gap-8">
                    <span className="text-slate-500 flex items-center gap-4  rounded cursor-pointer text-sm"><GiBed className="text-3xl" /> 2 beds</span>
                    <span className="text-slate-500 flex items-center gap-4  rounded cursor-pointer text-sm"><GiBathtub className="text-3xl" /> 1 bathroom</span>
                    <span className="text-slate-500 flex items-center gap-4  rounded cursor-pointer text-sm"><FaTv className="text-3xl" /> Television</span>
                </div>
                <h4 className="font-semibold text-slate-800 text-sm my-4">Description</h4>
                <p className="text-slate-700  font-light text-sm   leading-8">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea inventore omnis aliquam maiores deserunt fugit eveniet, officia et dolores natus sed distinctio quidem sapiente ratione illo, pariatur quos eligendi accusamus... <span className="text-primary-site cursor-pointer" role="button">read more</span></p>
                <h4 className="font-semibold text-slate-800 text-sm my-4">Room Amenities</h4>
                <ul className="list-disc list-inside flex flex-col gap-2">
                    <li className="text-sm  text-slate-700">Free breakfast</li>
                    <li className="text-sm  text-slate-700">Room service</li>
                    <li className="text-sm  text-slate-700">Free Breakfast</li>
                    <li className="text-sm  text-slate-700">Free Breakfast</li>
                </ul>
                <button className="bg-primary-site text-white py-3 w-full mt-6 text-sm">Book room</button>
            </div>
        </div>
    )
}
