import React from 'react'
import Courses from '../components/Courses'
import CourseBlocks from '../components/CourseBlocks'

export default function page() {
    return (
        <div className='min-h-screen p-5'>
            <Courses>
                <CourseBlocks />
            </Courses>
        </div>
    )
}