'use client'
import React from 'react'
import { Card, Carousel, Image } from 'antd'
import { useRouter } from 'next/navigation'

const MainPage = () => {

  const router = useRouter();
  const handleOnClick = () => {
    router.push('/cars')
  }
  const contentStyle: React.CSSProperties = {
    height: '160px',
    color: 'black',
    lineHeight: '160px',
    textAlign: 'center',
    background: 'white',
  };
  return (
    <div className='flex flex-col'>
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
      <Carousel className='mt-4 h-max'>
        <div>
          <Card className='h-44 border-4 flex items-center'>
            <Image
              alt=''
              preview={false}
              className='w-auto h-auto'
              
              src='https://img.freepik.com/premium-photo/compact-sports-car-family-sedan-3d-illustration_101266-13425.jpg?w=1380' />
          </Card>
        </div>
        <div>
        <Card className='h-44 border-4 flex items-center'>
            <Image
              alt=''
              preview={false}
              className='w-auto h-auto'
              
              src='https://img.freepik.com/premium-photo/compact-sports-car-family-sedan-3d-illustration_101266-13425.jpg?w=1380' />
          </Card>
        </div>
        <div>
        <Card className='h-44 border-4 flex items-center'>
            <Image
              alt=''
              preview={false}
              className='w-auto h-auto'
              
              src='https://img.freepik.com/premium-photo/compact-sports-car-family-sedan-3d-illustration_101266-13425.jpg?w=1380' />
          </Card>
        </div>
        <div>
        <Card className='h-44 border-4 flex items-center'>
            <Image
              alt=''
              preview={false}
              className='w-auto h-auto'
              
              src='https://img.freepik.com/premium-photo/compact-sports-car-family-sedan-3d-illustration_101266-13425.jpg?w=1380' />
          </Card>
        </div>
      </Carousel>

    </div>
  )
}

export default MainPage