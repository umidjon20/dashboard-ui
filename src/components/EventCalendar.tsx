'use client'
import Image from 'next/image';
import {useState} from 'react'
import Calendar from 'react-calendar';


import 'react-calendar/dist/Calendar.css';
type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];
const events =[
    {
        id:1,
        title:'Lorem ipsum dolar',
        time:'12:00 PM - 2:00 PM',
        descroption:'Lorem ipsum dolor sit amet, consectetur adipsdale elit'
    },
    {
        id:2,
        title:'Lorem ipsum dolar',
        time:'16:00 PM - 5:00 PM',
        descroption:'Lorem ipsum dolor sit amet, consectetur adipsdale elit'
    },
    {
        id:3,
        title:'Lorem ipsum dolar',
        time:'14:00 PM - 5:00 PM',
        descroption:'Lorem ipsum dolor sit amet, consectetur adipsdale elit'
    }
]
const EventCalendar = ()=>{
    const [value, onChange] = useState<Value>(new Date());
    return(
        <div className=''>
                <Calendar onChange={onChange} value={value} />
                <div className="flex items-center justify-between">
                    <h1 className='text-xl font-semibold my-4'>Events</h1>
                    <Image src='/moreDark.png' alt='' width={20} height={20}/>
                </div>
                <div className="flex flex-col gap-4">
                    {
                        events.map((event)=>(
                            
                            <div className="p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-mySky even:border-t-myPurple" key={event.id}>
                                <div className="flex items-center justify-between">
                                    <h1 className='font-semibold text-gray-600'>{event.title}</h1>
                                    <span className='text-gray-300 text-xs'>{event.time}</span>
                                </div>
                                <p className="mt-2 text-gray-400 text-sm">{event.descroption}</p>
                            </div>
                        ))
                    }
                </div>
        </div>
    )
}
export default EventCalendar