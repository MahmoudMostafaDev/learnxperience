'use client'

import React from 'react'
import { courseData } from '../public/data/CourseData'
import Image from 'next/image';

export default function CourseBlocks() {
    return (
        <div className="flex flex-wrap gap-5 justify-center items-center w-full">
            {courseData.map((course) => {
                const { id, title, tutor, description, category, image } = course;
                const shortDescription = description.length > 100 ? description.substring(0, 80) + '...' : description;

                return (
                    <div key={id} className="bg-neutral-100 border border-gray-300 w-72 h-full rounded-md shadow-md flex flex-col overflow-hidden p-3">
                        <Image
                            src={image}
                            alt={`${title} - ${category}`}
                            className="w-full h-40 object-cover rounded-sm"
                        />
                        <div className="flex-grow p-3 flex flex-col justify-between gap-1">
                            <p className="text-xs border border-purple-500 rounded-full w-fit px-3">{category}</p>
                            <h1 className="font-bold text-lg">{title}</h1>
                            <h3 className="text-xs font-semibold text-gray-800">{tutor}</h3>
                            <p className="text-sm text-gray-600">{shortDescription}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}