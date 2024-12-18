'use client'
import { Calendar,Views,momentLocalizer } from "react-big-calendar"
import moment from 'moment'
import { calendarEvents } from "@/lib/data"
import { useState } from "react"

import 'react-big-calendar/lib/css/react-big-calendar.css'
const localizer = momentLocalizer(moment)
const BigCalendar = () =>{
    const [view, setView] = useState(Views.WORK_WEEK)
    return (
        <div>
            <Calendar 
            localizer={localizer}
            events={calendarEvents}
            startAccessor='start'
            endAccessor='end'
            views={['work_week','day']}
            view={view}
            style={{height:500}}
            />    
        </div>
    )
}
export default BigCalendar