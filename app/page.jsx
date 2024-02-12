import Booking from "@/components/booking";
import Landing from "@/components/landing";
import config from "../jsconfig.json"
import Image from "next/image";
import { GiBedLamp, GiPoolDive, GiWifiRouter, GiHotMeal, GiSecurityGate } from "react-icons/gi";
import { IoCarSportOutline, IoRestaurant, IoShieldCheckmark } from "react-icons/io5";
import { FaPeopleRoof, FaPersonCircleCheck } from "react-icons/fa6";
import Gallery from "@/components/gallery";
import HotelRoom from "@/components/hotel-room";
import { ChefHatIcon } from "lucide-react";


export default function Home() {
  return (
    <>
      <Landing />
      <Booking />

      <section className="px-16 md:px-36 py-16 grid lg:grid-cols-2 gap-14">
        <div>
          <h2 className="text-slate-900">{config.siteName}</h2>
          <p className="text-slate-700  md:w-[95%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic accusantium dicta, quo dignissimos iste soluta eius velit blanditiis officiis alias.Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic accusantium dicta, quo dignissimos iste soluta eius velit blanditiis officiis alias.</p>
          <p className="text-slate-700 mt-10 md:w-[95%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic accusantium dicta, quo dignissimos iste soluta eius velit blanditiis officiis alias.Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic accusantium dicta, quo dignissimos iste soluta eius velit blanditiis officiis alias.</p>
          <button className='text-primary-site h-max border border-primary-site px-16 py-3 text-sm font-semibold self-end  rounded-full mt-10'>About Us</button>
        </div>

        <div className="relative  flex flex-col lg:h-[70vh] h-60 items-center">
          <div className="md:w-[80%] w-full h-full rounded overflow-hidden">
            <Image alte="...." src="/images/a.jpg" width={1280} height={853} className="w-full h-full" />
          </div>

          <div className="w-40 h-56 absolute hidden md:block left-0 top-14 rounded overflow-hidden">
            <Image alte="...." src="/images/d.jpg" width={1280} height={853} className="w-full h-full object-cover " />
          </div>

          <div className="w-40 h-40 hidden md:block absolute right-0 bottom-6 rounded overflow-hidden">
            <Image alte="...." src="/images/c.jpg" width={1280} height={853} className="w-full h-full object-cover " />
          </div>
        </div>
      </section>
      <section className="py-16 px-16 md:px-32 text-center border-t">
        <h2>Why Choose {config.siteName}</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="border hover:border-primary-site cursor-pointer flex flex-col p-6 justify-center gap-6 rounded ease-in-out duration-300">
            <IoRestaurant className="text-5xl text-primary-site m-auto" />
            <h3 className="font-semibold text-slate-800 text-xl">Restaurant</h3>
            <p className="text-slate-700">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint ipsum corporis alias temporibus ipsam esse aperiam mol</p>
          </div>
          <div className="border hover:border-primary-site cursor-pointer flex flex-col p-6 justify-center gap-6 rounded ease-in-out duration-300">
            <IoShieldCheckmark className="text-5xl text-primary-site m-auto" />
            <h3 className="font-semibold text-slate-800 text-xl">Security</h3>
            <p className="text-slate-700">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint ipsum corporis alias temporibus ipsam esse aperiam mol</p>
          </div>
          <div className="border hover:border-primary-site cursor-pointer flex flex-col p-6 justify-center gap-6 rounded ease-in-out duration-300">
            <FaPersonCircleCheck className="text-5xl text-primary-site m-auto" />
            <h3 className="font-semibold text-slate-800 text-xl">Customer care</h3>
            <p className="text-slate-700">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint ipsum corporis alias temporibus ipsam esse aperiam mol</p>
          </div>
          <div className="border hover:border-primary-site cursor-pointer flex flex-col p-6 justify-center gap-6 rounded ease-in-out duration-300">
            <IoRestaurant className="text-5xl text-primary-site m-auto" />
            <h3 className="font-semibold text-slate-800 text-xl">Restaurant</h3>
            <p className="text-slate-700">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint ipsum corporis alias temporibus ipsam esse aperiam mol</p>
          </div>
        </div>
      </section>
      <section className="h-[75vh] md:bg-primary-site flex flext-col items-center relative bg-center">
        <div className="md:bg-[url('/images/c.jpg')] h-5/6 w-full "></div>
        <div className="lg:w-1/2   lg:mx-0 md:h-full h-max absolute z-10 top-0 md:right-32  bg-secondary-transparent py-12 px-16 md:px-20 ">
          <h2 className="text-slate-50">Our Amenities</h2>
          <p className="text-slate-100 font-light my-10 ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea inventore omnis aliquam maiores deserunt fugit eveniet, officia et dolores natus sed distinctio quidem sapiente ratione illo, pariatur quos eligendi accusamus.</p>
          <div className="grid grid-cols-2 gap-6">
            <Amenity name="Restaurant" icon={GiHotMeal} />
            <Amenity icon={GiPoolDive} name="Swimming Pool" />
            <Amenity icon={IoCarSportOutline} name="Parking" />
            <Amenity icon={GiBedLamp} name=" Room Service" />
            <Amenity icon={GiWifiRouter} name="Free Wi-Fi" />
            <Amenity icon={FaPeopleRoof} name="Conference Rooms" />
          </div>
        </div>
      </section>

      <section className="py-16 px-16 md:px-32  bg-gray-100 relative">
        <h2 className="text-center text-slate-800 ">Our Rooms</h2>
        <p className="text-slate-700 sm:w-3/4 m-auto font-light text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea inventore omnis aliquam maiores deserunt fugit eveniet, officia et dolores natus sed distinctio quidem sapiente ratione illo, pariatur quos eligendi accusamus.</p>

        <HotelRoom name="Dilux Double Room" />
        <HotelRoom name="Dilux Single Room" />
        <HotelRoom name="Dilux Executive Room" />

      </section>

      <Gallery />
    </>
  )
}

function Amenity({ name, icon: Icon }) {
  return <span className="text-gray-300 flex items-center gap-8  rounded cursor-pointer text-sm"><Icon className="text-3xl" />{name}</span>
}
