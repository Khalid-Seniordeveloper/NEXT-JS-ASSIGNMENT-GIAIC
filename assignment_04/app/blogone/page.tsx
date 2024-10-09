import React from 'react'
import tshirt from './assets/tshirt.jpeg'
import Image from 'next/image'
const page = () => {
  return (
    <div>

<div className='nested-container flex justify-center gap-24 items-center mt-36'>

<div className=''>

<Image src={tshirt} alt ='no image' className='nested-image'/>

</div>

<div>

<h1 className='title'>T Shirt</h1>

</div>

</div>

    </div>
  )
}

export default page