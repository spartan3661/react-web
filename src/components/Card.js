import React from 'react'

function card({title, description, imageURL, altDesc}) {
  return (
    <div className='relative w-60 rounded-2xl'>

      <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity rounded-2xl"></div>
      <div className='w-60 rounded-2xl shadow-lg bg-white overflow-hidden'>

        <img className='w-full rounded-t-2xl' alt={altDesc} src={imageURL} />
        <div className='p-4'>
          <h1 className='font-bold text-lg mb-2'>{title}</h1>
          <p className='text-gray-700'>{description}</p>
        </div>

      </div>
    </div>

  )
}

export default card