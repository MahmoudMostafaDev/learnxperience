import React from 'react'

export default function CourseListing({ children }) {
    return (
        <div className="flex-1 p-4 flex justify-center items-center w-full">
            {children}
        </div>
    )
}