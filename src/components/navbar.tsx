import React from 'react'
import Input from './input'
const Navbar = () => {
  return (
    <div className='md:flex items-center  justify-between'>
      <h2 className='text-2xl font-medium'>Choose category</h2>
      <Input />
    </div>
  )
}

export default Navbar