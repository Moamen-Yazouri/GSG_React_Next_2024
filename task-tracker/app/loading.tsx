import React from 'react'
const Loading = () => {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
            <div className="w-16 h-16 border-4 border-teal-500 border-t-transparent rounded-full animate-spin"></div>
            <p className="mt-4 text-teal-600 text-lg font-semibold">Loading Tasks...</p>
        </div>
    )
}
export default Loading;