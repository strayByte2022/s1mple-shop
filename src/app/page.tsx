'use client'
import React from 'react'
import { Card, Image } from 'antd'
import { useRouter } from 'next/navigation'

const MainPage = () => {
  const router = useRouter();
  const handleOnClick = () => {
    router.push('/cars')
  }
  return (
    <div className='flex h-fit'>
      <div className='w-4/5 flex justify-end'>
        <Card hoverable className='flex w-full items-center ml-5' onClick={handleOnClick}>
          <Image
            alt=''
            preview={false}
            className=' h-fit'
            src='https://img.freepik.com/premium-photo/compact-sports-car-family-sedan-3d-illustration_101266-13425.jpg?w=1380' />

        </Card>
        
      </div>

      <div className='grid ml-5 space-y-5'>
        <Card hoverable className='flex w-4/5 items-center' onClick={handleOnClick}>
          <Image
            alt=''
            preview={false}
            className=' h-fit'
            src='https://img.freepik.com/premium-photo/compact-sports-car-family-sedan-3d-illustration_101266-13425.jpg?w=1380' />

        </Card>
        <Card hoverable className='flex w-4/5 items-center' onClick={handleOnClick}>
          <Image
            alt=''
            preview={false}
            className=' h-fit'
            src='https://img.freepik.com/premium-photo/compact-sports-car-family-sedan-3d-illustration_101266-13425.jpg?w=1380' />

        </Card>
      </div>

    </div>
  )
}

export default MainPage