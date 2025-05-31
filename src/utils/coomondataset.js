const commonData = [
  {
    className: 'BCA 1st Year',
    semester: 'Semester 1',
    attendance: {
      totalLectures: 100,
      students: [
        { name: 'Alice', roll: 'BCA101', present: 65 },
        { name: 'Bob', roll: 'BCA102', present: 65 },
        { name: 'Sophia', roll: 'BCA104', present: 65 },
        { name: 'Emma', roll: 'BCA106', present: 65 },
        { name: 'Daniel', roll: 'BCA103', present: 0 },
        { name: 'Jacob', roll: 'BCA105', present: 0 }
      ]
    },
    tests: [
      {
        name: 'Test 1',
        submissions: [
          { name: 'Alice', roll: 'BCA101', submitted: true, marks: 88 },
          { name: 'Bob', roll: 'BCA102', submitted: true, marks: 76 },
          { name: 'Sophia', roll: 'BCA104', submitted: true, marks: 90 },
          { name: 'Emma', roll: 'BCA106', submitted: true, marks: 82 },
          { name: 'Daniel', roll: 'BCA103', submitted: false, marks: 0 },
          { name: 'Jacob', roll: 'BCA105', submitted: false, marks: 0 }
        ]
      },
      {
        name: 'Test 2',
        submissions: [
          { name: 'Alice', roll: 'BCA101', submitted: true, marks: 90 },
          { name: 'Bob', roll: 'BCA102', submitted: true, marks: 78 },
          { name: 'Sophia', roll: 'BCA104', submitted: true, marks: 92 },
          { name: 'Emma', roll: 'BCA106', submitted: true, marks: 80 },
          { name: 'Daniel', roll: 'BCA103', submitted: false, marks: 0 },
          { name: 'Jacob', roll: 'BCA105', submitted: false, marks: 0 }
        ]
      }
    ],
    assignments: [
      {
        name: 'Assignment 1',
        submissions: [
          { name: 'Alice', roll: 'BCA101', submitted: true, marks: 85 },
          { name: 'Bob', roll: 'BCA102', submitted: true, marks: 60 },
          { name: 'Sophia', roll: 'BCA104', submitted: true, marks: 75 },
          { name: 'Emma', roll: 'BCA106', submitted: true, marks: 80 },
          { name: 'Daniel', roll: 'BCA103', submitted: false, marks: 0 },
          { name: 'Jacob', roll: 'BCA105', submitted: false, marks: 0 }
        ]
      },
      {
        name: 'Assignment 2',
        submissions: [
          { name: 'Alice', roll: 'BCA101', submitted: true, marks: 90 },
          { name: 'Bob', roll: 'BCA102', submitted: true, marks: 55 },
          { name: 'Sophia', roll: 'BCA104', submitted: true, marks: 85 },
          { name: 'Emma', roll: 'BCA106', submitted: true, marks: 88 },
          { name: 'Daniel', roll: 'BCA103', submitted: false, marks: 0 },
          { name: 'Jacob', roll: 'BCA105', submitted: false, marks: 0 }
        ]
      }
    ]
  },
  {
    className: 'BCA 2nd Year',
    semester: 'Semester 3',
    attendance: {
      totalLectures: 100,
      students: [
        { name: 'Eva', roll: 'BCA201', present: 75 },
        { name: 'Jack', roll: 'BCA202', present: 75 },
        { name: 'Mason', roll: 'BCA204', present: 75 },
        { name: 'Liam', roll: 'BCA205', present: 75 },
        { name: 'Mason', roll: 'BCA203', present: 0 }
      ]
    },
    tests: [
      {
        name: 'Test 1',
        submissions: [
          { name: 'Eva', roll: 'BCA201', submitted: true, marks: 85 },
          { name: 'Jack', roll: 'BCA202', submitted: true, marks: 78 },
          { name: 'Mason', roll: 'BCA204', submitted: true, marks: 88 },
          { name: 'Liam', roll: 'BCA205', submitted: true, marks: 80 },
          { name: 'Mason', roll: 'BCA203', submitted: false, marks: 0 }
        ]
      },
      {
        name: 'Test 2',
        submissions: [
          { name: 'Eva', roll: 'BCA201', submitted: true, marks: 90 },
          { name: 'Jack', roll: 'BCA202', submitted: true, marks: 75 },
          { name: 'Mason', roll: 'BCA204', submitted: true, marks: 92 },
          { name: 'Liam', roll: 'BCA205', submitted: true, marks: 82 },
          { name: 'Mason', roll: 'BCA203', submitted: false, marks: 0 }
        ]
      }
    ],
    assignments: [
      {
        name: 'Assignment 1',
        submissions: [
          { name: 'Eva', roll: 'BCA201', submitted: true, marks: 90 },
          { name: 'Jack', roll: 'BCA202', submitted: true, marks: 60 },
          { name: 'Mason', roll: 'BCA204', submitted: true, marks: 70 },
          { name: 'Liam', roll: 'BCA205', submitted: true, marks: 80 },
          { name: 'Mason', roll: 'BCA203', submitted: false, marks: 0 }
        ]
      },
      {
        name: 'Assignment 2',
        submissions: [
          { name: 'Eva', roll: 'BCA201', submitted: true, marks: 88 },
          { name: 'Jack', roll: 'BCA202', submitted: true, marks: 55 },
          { name: 'Mason', roll: 'BCA204', submitted: true, marks: 92 },
          { name: 'Liam', roll: 'BCA205', submitted: true, marks: 90 },
          { name: 'Mason', roll: 'BCA203', submitted: false, marks: 0 }
        ]
      }
    ]
  },
  // Similar updates for 'BCA 3rd Year' and 'BCA 4th Year'...
];

export default commonData;

