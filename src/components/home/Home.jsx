import React from 'react'
import Nav from './Nav'
import Branch from './Branch'

const Home = () => {
  return (
    <div className='flex flex-col '>

      <div className='grid grid-cols-3 '>
        <div className='col-span-2'>
          <Branch />
        </div>
      </div>
    </div>
  )
}

export default Home