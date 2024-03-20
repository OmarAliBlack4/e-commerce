import React from 'react'
import AdminAllProductsCard from './AdminAllProductsCard'
import { Row } from 'react-bootstrap'

const AdminAllProduct = ({products}) => {
    return (
        <div>
            <div className='admin-content-text'> Managing all products</div>
            <Row className='justify-content-start'>
            {
                products ? ( products.map((item , index)=> <AdminAllProductsCard key={index} item={item} /> )) : <h3>No products</h3>
            }
            </Row>
            
        </div>  
    )
}

export default AdminAllProduct
