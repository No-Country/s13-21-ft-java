import React from 'react'

function Loader () {
  return (
    <div className='flex items-center justify-center min-h-screen p-5 max-w-screen'>

      <div className='flex space-x-2 animate-pulse'>
        <div className='w-3 h-3 bg-gray-500 rounded-full' />
        <div className='w-3 h-3 bg-gray-500 rounded-full' />
        <div className='w-3 h-3 bg-gray-500 rounded-full' />
      </div>

    </div>
  )
}

export default Loader
