import { useState, useEffect } from 'react';
import { ResponsiveBar } from '@nivo/bar';
import Modal from '../ViewDataModal';
import DropdownWithSearch from '../DropdownWithSearch';
import commonData from '../../../../utils/coomondataset';

const AttendanceDashboard = () => {
  const [selectedClass, setSelectedClass] = useState('All the Classes');
  const [studentData, setStudentData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalStudent, setModalStudent] = useState(null);

  const allClasses = commonData.map(entry => entry.className);
  const dropdownOptions = ['All the Classes', ...allClasses];

  useEffect(() => {
    if (selectedClass === 'All the Classes') {
      const summaryData = commonData.map(classEntry => {
        const { totalLectures, students } = classEntry.attendance;
        const totalPresent = students.reduce((acc, student) => acc + student.present, 0);
        const totalStudents = students.length;
        const avgPercentage = totalStudents
          ? ((totalPresent / (totalLectures * totalStudents)) * 100).toFixed(2)
          : 0;

        return {
          name: classEntry.className,
          percentage: avgPercentage,
        };
      });

      setStudentData(summaryData);
    } else {
      const classData = commonData.find(item => item.className === selectedClass);

      if (classData) {
        const { totalLectures, students } = classData.attendance;

        const formattedData = students.map(student => ({
          name: student.name,
          roll: student.roll,
          percentage: ((student.present / totalLectures) * 100).toFixed(2),
          ...student,
        }));

        setStudentData(formattedData);
      }
    }
  }, [selectedClass]);

  const handleBarClick = (bar) => {
    if (selectedClass && selectedClass !== 'All the Classes') {
      setModalStudent(bar.data);
      setIsModalOpen(true);
    } else {
      setSelectedClass(bar.data.name); // Drill-down from summary to class
    }
  };

  return (
    <div className="bg-gray-100 p-6 rounded-xl shadow-md">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        {selectedClass && selectedClass !== 'All the Classes'
          ? 'Student Attendance %'
          : 'Class-wise Attendance Summary'}
      </h1>

      {/* Dropdown */}
      <div className="w-64 mb-6">
        <DropdownWithSearch
          data={dropdownOptions}
          selectedData={selectedClass}
          setSelectedData={setSelectedClass}
          placeholder="Select Class"
        />
      </div>

      {/* Bar Chart */}
      {studentData.length > 0 && (
        <div className="bg-white rounded-2xl shadow-lg p-4">
          <div className="h-[400px]">
            <ResponsiveBar
              data={studentData}
              keys={['percentage']}
              indexBy="name"
              margin={{ top: 20, right: 30, bottom: 70, left: 60 }}
              padding={0.3}
              layout="vertical"
              colors={["#00B5E2"]}
              borderRadius={10}
              axisBottom={{
                tickRotation: 0,
                legend: selectedClass === 'Summary' ? 'Classes' : 'Students',
                legendPosition: 'middle',
                legendOffset: 40
              }}
              axisLeft={{
                legend: 'Attendance %',
                legendPosition: 'middle',
                legendOffset: -50,
              }}
              labelTextColor={{ from: 'color', modifiers: [['darker', 2]] }}
              animate
              motionConfig="gentle"
              onClick={handleBarClick}
            />
          </div>
        </div>
      )}

      {/* Modal for student info */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        modalData={modalStudent ? [modalStudent] : []}
        modalTitle={`Attendance Details - ${modalStudent?.name || ''}`}
      />
    </div>
  );
};

export default AttendanceDashboard;
