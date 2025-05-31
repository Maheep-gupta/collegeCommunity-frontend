import { useState, useEffect } from 'react';
import { ResponsivePie } from '@nivo/pie';
import commonData from '../../../../utils/coomondataset'; // Assuming your unified dataset is here

import DropdownWithSearch from '../DropdownWithSearch'; // Importing the dropdown component
import Modal from '../ViewDataModal';

const classifySubmissions = (submissions) => {
  const submitted = submissions.filter(s => s.submitted);
  const notSubmitted = submissions.filter(s => !s.submitted);

  return {
    pie: [
      { id: 'Submitted', label: 'Submitted', value: submitted.length },
      { id: 'Not Submitted', label: 'Not Submitted', value: notSubmitted.length },
    ],
    details: { submitted, notSubmitted }
  };
};

const AssignmentSubmissionChart = () => {
  const [modalData, setModalData] = useState([]); // Stores data to be passed to the modal
  const [modalTitle, setModalTitle] = useState(''); // Title for the modal
  const [isOpen, setIsOpen] = useState(false); // Modal open state
  const [selectedClass, setSelectedClass] = useState(''); // For storing the selected class
  const [pieData, setPieData] = useState([]); // State for storing pie chart data
  const [selectedAssignment, setSelectedAssignment] = useState(''); // State for storing selected assignment

  // Generate available classes and assignments from commonData
  const allClasses = commonData.map(classData => classData.className);
  const availableAssignments = commonData[0]?.assignments.map(assignment => assignment.name) || [];

  // Set default class and assignment if available
  useEffect(() => {
    if (allClasses.length > 0) {
      setSelectedClass(allClasses[0]); // Set the first class by default
    }
  }, [allClasses]);

  useEffect(() => {
    if (selectedClass) {
      const selectedClassData = commonData.find(classData => classData.className === selectedClass);
      if (selectedClassData?.assignments.length > 0) {
        setSelectedAssignment(selectedClassData.assignments[0].name); // Set the first assignment of the selected class by default
      }
    }
  }, [selectedClass]);

  // Update pie chart data when a new assignment or class is selected
  useEffect(() => {
    if (selectedAssignment && selectedClass) {
      const selectedClassData = commonData.find(classData => classData.className === selectedClass);

      if (selectedClassData) {
        const selectedAssignmentData = selectedClassData.assignments.find(
          (assignment) => assignment.name === selectedAssignment
        );

        if (selectedAssignmentData) {
          const { pie } = classifySubmissions(selectedAssignmentData.submissions);
          setPieData(pie); // Update the pie chart data
        }
      }
    }
  }, [selectedAssignment, selectedClass]); // Run the effect when any of the selected states change

  const openModalWithData = (id) => {
    const selectedClassData = commonData.find(classData => classData.className === selectedClass);
    const selectedAssignmentData = selectedClassData.assignments.find(
      (assignment) => assignment.name === selectedAssignment
    );
    const { details } = classifySubmissions(selectedAssignmentData.submissions);

    // Add roll numbers to modal data
    if (id === 'Submitted') {
      const submittedWithRoll = details.submitted.map(student => ({
        ...student, 
        roll: student.roll // Ensuring roll is part of modal data
      }));
      setModalData(submittedWithRoll); // Set data for submitted students including roll number
      setModalTitle('Students who Submitted');
    } else if (id === 'Not Submitted') {
      const notSubmittedWithRoll = details.notSubmitted.map(student => ({
        ...student, 
        roll: student.roll // Ensuring roll is part of modal data
      }));
      setModalData(notSubmittedWithRoll); // Set data for not submitted students including roll number
      setModalTitle('Students who did NOT Submit');
    }
    setIsOpen(true); // Open the modal
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-gray-200">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Assignment Submissions</h2>

      {/* Dropdown for selecting class */}
      <div className='flex items-center justify-start gap-x-5 mb-4'>
        <div className="">
          <DropdownWithSearch
            data={allClasses}
            selectedData={selectedClass}
            setSelectedData={setSelectedClass}
          />
        </div>

        {/* Dropdown for selecting assignments */}
        <div className="w-[200px]">
          <DropdownWithSearch
            data={availableAssignments}
            selectedData={selectedAssignment}
            setSelectedData={setSelectedAssignment}
          />
        </div>
      </div>

      {/* Pie Chart */}
      {selectedAssignment && pieData.length > 0 && (
        <div className="p-4 pb-0">
          <div className="h-[400px]">
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
              colors={['#FF9F00', '#00B5E2']}
              animate={true}
              motionConfig="gentle"
              onClick={(data) => openModalWithData(data.id)} // Open modal when a section of the pie is clicked
            />
          </div>
        </div>
      )}

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

export default AssignmentSubmissionChart;
