import { ShoppingCartOutlined } from '@ant-design/icons'
import { Button, Badge } from 'antd'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const Cart = () => {
    const [cartItems, setCartItems] = useState(0)
    const router = useRouter();
    const onAddItems = () => {
        router.push('/cart')
    }

    return (
        <Button
            icon={<ShoppingCartOutlined />}
            size='large'
            onClick={()=>{onAddItems()}}
        >
            <Badge count={cartItems} overflowCount={99}/>

            
        </Button>
    )
}

export default Cart