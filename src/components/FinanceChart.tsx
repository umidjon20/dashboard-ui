'use client'
import Image from "next/image"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Jan',
    encome: 4000,
    expence: 2400,
    amt: 2400,
  },
  {
    name: 'Feb',
    encome: 3000,
    expence: 1398,
    amt: 2210,
  },
  {
    name: 'March',
    encome: 2000,
    expence: 9800,
    amt: 2290,
  },
  {
    name: 'Apr',
    encome: 2780,
    expence: 3908,
    amt: 2000,
  },
  {
    name: 'May',
    encome: 1890,
    expence: 4800,
    amt: 2181,
  },
  {
    name: 'Jun',
    encome: 2390,
    expence: 3800,
    amt: 2500,
  },
  {
    name: 'Jul',
    encome: 3490,
    expence: 4300,
    amt: 2100,
  },
  {
    name: 'Aug',
    encome: 3490,
    expence: 4300,
    amt: 2100,
  },
  {
    name: 'Sep',
    encome: 3490,
    expence: 4300,
    amt: 2100,
  },
  {
    name: 'Oct',
    encome: 3490,
    expence: 4300,
    amt: 2100,
  },
  {
    name: 'Nov',
    encome: 3490,
    expence: 4300,
    amt: 2100,
  },
  {
    name: 'Dec',
    encome: 3490,
    expence: 4300,
    amt: 2100,
  },
];
const FinanceChart = ()=>{
    return (
        <div className="bg-white rounded-xl w-full  h-full p-4">
        {/* Title */}
       <div className="flex justify-between items-center">
        <h1 className='text-lg font-semibold '>Finance</h1>
        <Image  src='/moreDark.png' alt='' width={20} height={20}/>
       </div>
        <ResponsiveContainer width="100%" height="90%">
            <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            >
            <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
            <XAxis dataKey="name" axisLine={false} tick={{fill:'#d1d5db'}} tickLine={false} tickMargin={10}/>
            <YAxis axisLine={false} tick={{fill:'#d1d5db'}} tickLine={false} tickMargin={20}/>
            <Tooltip />
            <Legend align='center' verticalAlign='top' wrapperStyle={{paddingTop:'10px', paddingBottom:'30px'}}/>
            <Line type="monotone" dataKey="encome" stroke="#8884d8" strokeWidth={5} />
            <Line type="monotone" dataKey="expence" stroke="#82ca9d" strokeWidth={5} />
            </LineChart>
        </ResponsiveContainer>
        </div>
    )
}
export default FinanceChart