import React from 'react'
import "./Hero.css"
import { Input } from 'antd'
import Button from '../../Re-useable/Button'

export default function Hero() {
  return (
    <div className='Hero w-full h-[550px] bg-[#bdc3c7] flex justify-center items-center'>
            <Input type='text' className='w-[60%] h-[60px] text-2xl font-semibold' placeholder='Search Your favorite Product'/>
            <Button  title={"Get Started"} className={"ml-2 text-white pl-3 pr-3 pt-3 pb-3  bg-[#3498db]"}/>
    </div>
  )
}
