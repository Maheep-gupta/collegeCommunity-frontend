import React, { useEffect, useState } from 'react'
import courseCategory from '../../utils/courseCategory'
import { FaSortUp } from 'react-icons/fa'
import { motion } from 'motion/react'
import RestartCourseCard from './RestartCourseCard'
function Courses() {

  const [CategoryChoosen, setCategoryChoosen] = useState(null)

  const [salutationTitle, setSalutationTitle] = useState('')
  const username = 'Maheep'

  const date = new Date();
  const currTime = date.getHours();
  let salutation = currTime < 12 ? "good morning 👋" : currTime == 12 ? "good noon 👋" : "good Evening 👋"



  return (
    <div className='pl-5 w-full'>
      {/* Category section */}
      <div>
        <div className='flex justify-between items-center bg-white  rounded-lg  '>
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
              className='flex justify-evenly items-center bg-black p-2 rounded-lg' onMouseEnter={() => setCategoryChoosen(CategoryChoosen)} onMouseLeave={() => setCategoryChoosen(null)}>
              {

                CategoryChoosen && courseCategory.find(category => category.name === CategoryChoosen).subCategories.map((subCategory, index) =>
                  <button key={index} className='text-sm text-white hover:text-black font-pop hover:bg-slate-200 rounded p-3'>{subCategory}</button>)
              }
            </motion.div> : null
        }
      </div>
      {/* Salutation */}
      <div className='flex items-center '>
        <div className='border rounded-full border-gray-500 p-[2px] h-16 w-16'>
          <img src={"https://ui-avatars.com/api/?name=Midoriya+DeKu&bold=true&background=random&uppercase=false"} className='rounded-full h-full w-full' />
        </div>
        <div className='flex flex-col items-start pl-2 mt-5'>
          <span className='text-lg  text-black font-light capitalize'>{salutation}</span>
          <span className='text-xl font-normal text-black capitalize'>{username}</span>
        </div>
      </div>
      {/* Recommended for you */}
      <div>
        <h1 className='text-2xl font-semibold font-mont mt-2'>Recommended for you</h1>
      </div>
      {/* Current Progress */}
      <div className='w-full'>
        <h1 className='text-2xl font-semibold font-mont my-2'>Where you left</h1>
        <div className='flex w-full overflow-scroll hide-scrollbar gap-4'>
        <RestartCourseCard />
        <RestartCourseCard />
        <RestartCourseCard />
        <RestartCourseCard />
        <RestartCourseCard />
        </div>

      </div>
    </div>
  )
}

export default Courses