import { useState, useEffect } from 'react';
import { ResponsivePie } from '@nivo/pie';
import commonData from '../../../../utils/coomondataset';
import Modal from '../ViewDataModal';
import DropdownWithSearch from '../DropdownWithSearch';

// Function to classify student performance for each class
const classifyPerformance = (classData, selectedTest) => {
  const result = {
    passed: [],
    failed: []
  };

  // Ensure classData and tests exist before accessing
  const test = classData?.tests?.find((test) => test.name === selectedTest);

  if (test) {
    test.submissions.forEach(({ name, submitted, marks }) => {
      const studentData = { name, marks };
      if (submitted) {
        result.passed.push(studentData);
      } else {
        result.failed.push(studentData);
      }
    });
  }

  return {
    pie: [
      { id: 'Passed', label: 'Passed', value: result.passed.length },
      { id: 'Failed', label: 'Failed', value: result.failed.length },
    ],
    details: result
  };
};

const TestPerformanceChart = () => {
  const [modalData, setModalData] = useState([]);
  const [modalTitle, setModalTitle] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTest, setSelectedTest] = useState('');
  const [selectedClass, setSelectedClass] = useState('');
  const [pieData, setPieData] = useState([]);
  const [details, setDetails] = useState({ passed: [], failed: [] });

  // Extract test names and class names
  const allTests = commonData[0]?.tests?.map(test => test.name) || [];
  const allClasses = commonData.map(classData => classData.className);

  // Set the default selected test and class
  useEffect(() => {
    if (allTests.length > 0 && !selectedTest) {
      setSelectedTest(allTests[0]);
    }
    if (allClasses.length > 0 && !selectedClass) {
      setSelectedClass(allClasses[0]);
    }
  }, [allTests, allClasses, selectedTest, selectedClass]);

  // Update pieData and details whenever selectedClass or selectedTest changes
  useEffect(() => {
    if (selectedClass && selectedTest) {
      const selectedClassData = commonData.find((classData) => classData.className === selectedClass);
      if (selectedClassData) {
        const { pie, details } = classifyPerformance(selectedClassData, selectedTest);
        setPieData(pie);
        setDetails(details);
      }
    }
  }, [selectedClass, selectedTest]);

  const openModalWithData = (id) => {
    if (id === 'Passed') {
      setModalData(details.passed);
      setModalTitle(`${selectedClass} - Submitted`);
    } else if (id === 'Failed') {
      setModalData(details.failed);
      setModalTitle(`${selectedClass} - Not Submitted`);
    }

    setIsOpen(true);
  };

  if (!selectedTest || !selectedClass) return null;

  return (
    <div className=" bg-white rounded-2xl shadow-lg p-6 border-2 border-gray-200">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Student Performance</h2>

      {/* Dropdown for selecting class */}
      <div className='flex items-center justify-start gap-x-5 mb-4'>
        <div className="">
          <DropdownWithSearch

            data={allClasses}
            selectedData={selectedClass}
            setSelectedData={setSelectedClass}
          />
        </div>

        {/* Dropdown for selecting test */}
        <div className="s">
          <DropdownWithSearch
            data={allTests}
            selectedData={selectedTest}
            setSelectedData={setSelectedTest}
          />
        </div>
      </div>

      {/* Display pie chart for the selected class and test */}
      <div className='p-4 pb-0 bg-white'>

        <div key={selectedClass} className="h-[400px]">
          <ResponsivePie
            data={pieData}
            margin={{ top: 20, right: 50, bottom: 50, left: 50 }}
            innerRadius={0.5}
            padAngle={1.5}
            cornerRadius={10}
            activeOuterRadiusOffset={8}
            borderWidth={2}
            borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
            arcLinkLabelsSkipAngle={10}
            arcLinkLabelsTextColor="#333333"
            arcLinkLabelsThickness={2}
            arcLinkLabelsColor={{ from: 'color' }}
            arcLabelsSkipAngle={10}
            arcLabelsTextColor={{ from: 'color', modifiers: [['darker', 2]] }}
            colors={['#6F826A', '#90C67C']}
            animate={true}
            motionConfig="gentle"
            onClick={(data) => openModalWithData(data.id)}
          />
        </div>
      </div>

      {/* Modal */}
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        modalData={modalData}
        modalTitle={modalTitle}
      />
    </div>
  );
};

export default TestPerformanceChart;
