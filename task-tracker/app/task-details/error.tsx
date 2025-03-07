'use client'
import Link from 'next/link'
import React from 'react'
interface IProps {
    error: Error,
    reset: () => void
}
const Error = (props: IProps) => {
    return (
        <div className='flex items-center justify-center h-[100vh] w-[100%] bg-gradient-to-b from-teal-300 to-teal-400 flex-col text-white gap-[20px]'>
            <h1 className='text-4xl'>Oops..!</h1>
            <h3 className='font-bold text-[18px]'>Data Fetching does'not happend correctly <span className='text-[12px]'>{props.error.message}</span></h3>
            <div>
                Do you want to <button onClick={() => window.location.reload()} className='underline cursor-pointer hover:scale-[1.06] transition-[3] text-black'>Try again</button>
                or <Link href={"/"} className='underline cursor-pointer hover:scale-[1.06] transition-[3] text-black'>Back to the tasks list</Link></div>
        </div>
    )
}

export default Error