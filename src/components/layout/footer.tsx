'use client'
import React from 'react'
import { Avatar, Typography, Menu, Button } from 'antd'
const { Link } = Typography
const year = new Date().getFullYear() //js
const items = [
  {
    key: 'home',
    label: 'Home'
  },
  {
    key: 'about',
    label: 'About',

  },
  {
    key: 'terms',
    label: 'Terms and condition'
  },
  {
    key: 'shipping',
    label: 'Shipping & Return Policy'
  }
  ,
  {
    key: 'privacy',
    label: 'Privacy Policy'
  },
  {
    key: 'faq',
    label: 'FAQ'
  }
]
const PageFooter = () => {
  return (
    <div className=' bg-gray-50 mt-5 h-fit'>

      <div className='flex space-x-5 justify-between start  p-4 border-b-2'>

        <div className='flex space-x-4 uppercase'>
          <div className='space-x-2 items-center flex'>
            <Avatar shape='square' src='logo.png' size={'large'} className='bg-white' />
            <Link strong={true} style={{ color: 'black' }} className='text-2xl' >S1mple Store</Link>
          </div>

          <Menu
            className='bg-gray-50 border-r-white'
            mode='vertical'
            items={items}
          />
        </div>

        <div className='flex items-center'>
          <Button>
            CONTACT DEV!
          </Button>
        </div>



      </div>
      <div className='ml-4 pt-2 pb-2'>
        <div>
          © {year} Vuong Hong Linh. All rights reserved.
        </div>
        

      </div>
    </div>
  )
}

export default PageFooter;