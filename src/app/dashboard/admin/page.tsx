import UserCard from "@/components/UserCard"
import CountChart from "@/components/CountChart"
import Attendance from "@/components/AttendanceChart"
import FinanceChart from "@/components/FinanceChart"
const AdminPage = ()=>{
    return (
        <div className="p-4 flex gap-4 flex-col md:flex-row">
            {/* Left */}
            <div className="w-full lg:w-2/3 flex flex-col gap-8">
                {/* UserCard */}
                <div className="flex gap-4 justify-between flex-wrap">
                    <UserCard type="student"/>
                    <UserCard type="teacher"/>
                    <UserCard type="parent"/>
                    <UserCard type="staff"/>
                </div>
                {/* Middle charts */}
                <div className="flex gap-4 flex-col lg:flex-row">
                      {/* Count chart */}
                    <div className="w-full lg:w-1/3 h-[450px]">
                        <CountChart />
                    </div>
                    {/* Attendance chart */}
                    <div className="w-full lg:w-2/3 h-[450px]">
                        <Attendance />
                    </div>
                </div>

                {/* Bottom charts */}
                <div className="w-full h-[500px]">
                    <FinanceChart />
                </div>

            </div>
            {/* Right */}
            <div className="w-full lg:w-1/3">r</div>
        </div>
    )
}

export default AdminPage
