import AssignmentSubmissionChart from "./AssignmentSubmissionChart";
import AttendanceDashboard from "./AttendanceDashBoard";
import TestPerformanceChart from "./TestPerformanceChart";

const Overview = () => {
    return (
        <>
            {/* 📊 Overview Stats here */}
            <div className=" ">
                <AttendanceDashboard />
                <div className="grid grid-cols-2 gap-4">
                    <TestPerformanceChart />
                    <AssignmentSubmissionChart />
                </div>
            </div>
        </>
    )
}
export default Overview;