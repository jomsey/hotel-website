"use client"
import React from 'react'
import { format } from 'date-fns'
import { cn } from '@/lib/utils'
import { Button } from './ui/button'
import { Calendar } from './ui/calendar'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'
import { GiCalendar } from "react-icons/gi"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "./ui/select"


export default function Booking() {
    const [departureDate, setDepartureDate] = React.useState()
    const [arrivalDate, setArrivalDate] = React.useState()


    return (
        <section className=' w-4/5 bg-white shadow-md   rounded relative left-1/2 -translate-x-1/2 z-30 -top-10 gap-6 grid md:grid-cols-2 lg:grid-cols-4  p-10 justify-center'>
            <div>
                <span className='block text-gray-600 mb-6 text-sm'>Arrival Date</span>
                <DateInput date={arrivalDate} setDate={setArrivalDate} />
            </div>
            <div>
                <span className='block text-gray-600 mb-6 text-sm'>Departing Date</span>
                <DateInput date={departureDate} setDate={setDepartureDate} />
            </div>
            <div>
                <span className='block text-gray-600 mb-6 text-sm'>Number of Rooms</span>
                <Select>
                    <SelectTrigger className="w-full border-gray-300 text-primary-site">
                        <SelectValue placeholder="Rooms" />
                    </SelectTrigger>
                    <SelectContent className="bg-white rounded">
                        <SelectGroup>
                            <SelectItem value="1">One Room</SelectItem>
                            <SelectItem value="2">Two Rooms</SelectItem>
                            <SelectItem value="3">Three Rooms</SelectItem>
                            <SelectItem value="4">Four Rooms</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>
            <button className='text-white h-max w-max bg-primary-site px-12 py-3 text-sm font-semibold self-end  rounded-full'>Make Reservation</button>
        </section>
    )
}


function DateInput({ date, setDate }) {
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button
                    variant="outlined"
                    className="w-full justify-start text-left font-normal border text-primary-site"
                >
                    <GiCalendar className='mr-2 h-4 w-4' />
                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="bg-white rounded">
                <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus

                />
            </PopoverContent>
        </Popover>)
}