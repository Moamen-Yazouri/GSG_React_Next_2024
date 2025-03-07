import React from 'react'

const NotFound = () => {
  return (
    <div className='h-[100vh] w-[100%] bg-gradient-to-b from-teal-300 to-teal-400 flex items-center justify-center'>
      <p className='text-white'>
        <h1 className='text-4xl text-center mb-[20px] font-bold'>404</h1>
        <strong className=''>The Page You are Looking for does not exist..!</strong>
      </p>
    </div>
  )
}

export default NotFound;