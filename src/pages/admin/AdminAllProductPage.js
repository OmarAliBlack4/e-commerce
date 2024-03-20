import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AdminSideBar from '../../components/admin/AdminSideBar'

import Pagination from "../../components/utility/Pagination"
import AdminAllProduct from '../../components/admin/AdminAllProduct'
import AllProductAdminHook from '../../hook/admin/all-product-admin-hook'

const AdminAllProductPage = () => {

    const [data , paginationPage , onPress] = AllProductAdminHook();
    
    return (
        <Container>
            <Row className='py-3'>
                <Col sm="3" xs="2" md="2">
                    <AdminSideBar/>
                </Col> 
                <Col sm="9" xs="10" md="10">
                    <AdminAllProduct products={data}/>
                    {
                        paginationPage > 1 ? <Pagination numberOfPages={paginationPage} onPress={onPress}/> : null
                    }
                </Col>
            </Row>
        </Container>
    )
}

export default AdminAllProductPage;
