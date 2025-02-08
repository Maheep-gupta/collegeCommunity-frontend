import React, { useEffect, useState } from 'react'
import courseCategory from '../../utils/courseCategory'
import { FaSortUp } from 'react-icons/fa'
import { motion } from 'motion/react'
import RestartCourseCard from './RestartCourseCard'
import CoursesCard from './CoursesCard'
function Courses() {

  const [CategoryChoosen, setCategoryChoosen] = useState(null)

  const [salutationTitle, setSalutationTitle] = useState('')
  const username = 'Maheep'

  const date = new Date();
  const currTime = date.getHours();
  let salutation = currTime < 12 ? "good morning 👋" : currTime == 12 ? "good noon 👋" : "good Evening 👋"
  const [filteredOptionsState, setFilteredOptionsState] = useState("all")

  const recommendedCategory = [
    {
      name: "Development",
      subCategories: ["Web Development", "Mobile Development", "Game Development", "Database Development", "Software Development"]
    }, {
      name: "Design",
      subCategories: ["Graphic Design", "Web Design", "UX/UI Design", "Interior Design", "Fashion Design"]
    }, {
      name: "IT & Software",
      subCategories: ["IT Certification", "Network & Security", "Hardware", "Operating Systems", "Other IT & Software"]
    }, {
      name: "Personal Development",
      subCategories: ["Personal Transformation", "Productivity", "Leadership", "Personal Finance", "Career Development"]
    }, {
      name: "Academics",
      subCategories: ["Engineering", "Humanities", "Math", "Science", "Online Education"]
    }
  ]


  return (
    <div className='pl-5 w-full'>
      {/* Category section */}
      <div>
        <div className='flex justify-between items-center shadow-lg bg-white border rounded-lg  '>
          {
            courseCategory.map((category, index) =>
              <motion.button key={index} className='text-sm flex h-16 px-3 flex-col justify-center items-center hover:text-bgBlue font-pop hover:bg-[#a4c9f5] rounded p-0' onMouseEnter={() => setCategoryChoosen(category.name)} onMouseLeave={() => setCategoryChoosen(null)} >{category.name}
                {
                  category.name === CategoryChoosen ? <FaSortUp className='h-5 w-10 text-black -mb-[20px]' /> : null
                }
              </motion.button>)
          }
        </div>
        {
          CategoryChoosen !== null ?
            <motion.div initial={{ opacity: 0 }}
              animate={{
                opacity: 1, transition: {
                  duration: 0.8,
                  delay: 0.5,
                  ease: [0, 0.71, 0.2, 1.01],
                  opacity: { ease: "linear" }
                }
              }}
              className='flex justify-evenly shadow-lg shadow-white items-center bg-black p-2 rounded-lg' onMouseEnter={() => setCategoryChoosen(CategoryChoosen)} onMouseLeave={() => setCategoryChoosen(null)}>
              {

                CategoryChoosen && courseCategory.find(category => category.name === CategoryChoosen).subCategories.map((subCategory, index) =>
                  <button key={index} className='text-sm text-white hover:text-black font-pop hover:bg-slate-200 rounded p-3'>{subCategory}</button>)
              }
            </motion.div> : null
        }
      </div>
      {/* Salutation */}
      <div className='flex items-center mt-5'>
        <div className='border rounded-full border-gray-500 p-[2px] h-16 w-16'>
          <img src={"https://ui-avatars.com/api/?name=Midoriya+DeKu&bold=true&background=random&uppercase=false"} className='rounded-full h-full w-full' />
        </div>
        <div className='flex flex-col items-start pl-2'>
          <span className='text-lg  text-black font-light capitalize'>{salutation}</span>
          <span className='text-xl font-normal text-black capitalize'>{username}</span>
        </div>
      </div>

      {/* Current Progress */}
      <div className='w-full mt-5'>
        <h1 className='text-2xl font-semibold font-mont my-2'>Where you left</h1>
        <div className='flex w-full overflow-scroll hide-scrollbar gap-4 py-4 px-3'>
          <RestartCourseCard />
          <RestartCourseCard />
          <RestartCourseCard />
        </div>
        {/* Recommended for you
        <div className='mt-5'>
          <h1 className='text-2xl font-semibold font-mont mt-2'>Recommended for you</h1>
          <div className='grid grid-cols-4 w-full justify-evenly gap-5 mt-5'>
            <CoursesCard />
            <CoursesCard />
            <CoursesCard />
            <CoursesCard />
          </div>
        </div>
        <div className='mt-5'>
          <h1 className='text-2xl font-semibold font-mont mt-2'>Academics</h1>
          <div className='grid grid-cols-4 w-full justify-evenly gap-5 mt-5'>
            <CoursesCard />
            <CoursesCard />
            <CoursesCard />
            <CoursesCard />
          </div>
        </div> */}
        <div className='mb-2 mt-10'>
          <span className='text-3xl font-mont font-semibold '>Recommended for you</span>
          <div className='flex justify-between mt-5 items-center'>

            <div className='flex flex-wrap gap-x-2 items-center  '>
              <span className={`border border-bgBlue capitalize  rounded-full px-3 py-1 text-center ${filteredOptionsState === 'all' ? 'bg-bgBlue text-white' : ''}`} onClick={() => setFilteredOptionsState('all')}>
                All
              </span>
              {
                recommendedCategory.map((option, index) => {

                  return (
                    <span key={index} className={`border border-bgBlue capitalize  rounded-full px-2 py-1 text-center ${filteredOptionsState === option.name ? 'bg-bgBlue text-white' : ''}`} onClick={() => setFilteredOptionsState(option.name)}>
                      {option.name}
                    </span>
                  )
                })
              }

            </div>

            <div>
              <span className='text-xs font-mont font-semibold text-gray-500'>Sort by:</span>
              <select name="sorting" id="" className='capitalize outline-none t text-gray-500 font-semibold text-sm font-mont '>
                <option value="most-recent" className='capitalize'>most recent</option>
                <option value="most-recent" className='capitalize'>highest rating</option>
                <option value="most-recent" className='capitalize'>A-Z</option>
                <option value="most-recent" className='capitalize'>Z-A</option>
              </select>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-5 w-full justify-evenly gap-5 mt-5">
          <CoursesCard />
          <CoursesCard />
          <CoursesCard />
          <CoursesCard />
          <CoursesCard />
          <CoursesCard />
          <CoursesCard />
          <CoursesCard />
          <CoursesCard />
          <CoursesCard />
        </div>



      </div>
    </div>
  )
}

export default Courses