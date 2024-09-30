import React from 'react'
import Courses from '../components/Courses'
import CourseBlocks from '../components/CourseBlocks'
import SideBar from '../components/SideBar'

export default function page() {
    return (
        <div className='min-h-screen p-5 flex relative h-full'>
            <div>
                <SideBar />
            </div>
            <Courses>
                <CourseBlocks />
            </Courses>
        </div>
    )
}