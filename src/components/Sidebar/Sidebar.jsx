import React from 'react'

const Sidebar = () => {
    const categories = [
        "Mobiles",
        "Electric",
        "Beauty",
        "Sports"
    ]
  return (
    <div className='w-[20%] h-screen  bg-[#a8aaac] flex flex-col justify-around items-center'>
        {categories.map((item)=>{
            return(
                <p className='text-white font-extrabold  cursor-pointer'>{item}</p>
            )
        })}
    </div>
  )
}

export default Sidebar