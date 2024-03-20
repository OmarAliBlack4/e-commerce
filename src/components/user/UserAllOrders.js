import React from 'react'
import { Row } from 'react-bootstrap'
import UserOrderCard from './UserOrderCard'

const UserAllOrders = () => {
    return (
        <div>
        <div className="admin-content-text pb-4">  Hi, Omar Ali</div>
        <Row className='justify-content-between'>
           <UserOrderCard />
           <UserOrderCard />
           <UserOrderCard />
        </Row>
        </div>
    )
}

export default UserAllOrders
