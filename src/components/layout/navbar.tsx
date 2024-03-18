'use client'
import React, { useState } from 'react'
import { Layout, Menu, Input, Avatar, Typography, Button, Badge } from 'antd';

import { ShoppingCartOutlined } from '@ant-design/icons'
import '@/components/layout/layout.module.css'
import Cart from '../common/Cart';
const { Search } = Input
const { Link } = Typography
const items = [
  {
    key: 'all-product',
    label: 'All'
  }
  ,
  {
    key: 'cars',
    label: 'Cars'

  },
  {
    key: 'automobile',
    label: 'Automobiles'
  }

]

const NavBar = () => {

  const onSearch = () => {
    console.log('search! ')
  }
  return (
    <div className='grid grid-cols-3 p-5 items-center'>


      <div className=' flex w-full items-center justify-between space-x-2' >

        <Avatar shape='square' src='logo.png' size={'large'} className='bg-white' />
        <Link strong={true} style={{ color: 'black' }} className='text-2xl uppercase' href='/'>S1mple Store</Link>
        <Menu
          theme="light"
          mode="horizontal"
          defaultSelectedKeys={['cars']}
          items={items}
          style={{ flex: '1', minWidth: 100 }}
          className='border-b-0'

        />

      </div>
      <Search size='large' placeholder="Search product" allowClear onSearch={onSearch} className='w-full' />
      <div className='flex justify-end'>
        <Cart/>
      </div>


    </div>
  )
}

export default NavBar