import React from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import ProductGallery from '../components/ProductGallery'

export default function Product() {
  return (
    <div className='w-full h-full flex'>
        <Sidebar/>
        <ProductGallery/>
    </div>
  )
}
