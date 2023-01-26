import React from 'react'

export default function Button({title,className,width,height}) {
  return (
    <button className={className} style={{width:width,height:height}}>
        {title}
    </button>
  )
}
