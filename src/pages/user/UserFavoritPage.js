import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import UserSideBar from '../../components/user/UserSideBar'
import UserFavoriteProduct from "../../components/user/UserFavoriteProduct"
const UserFavoritPage = () => {
    return (
        <Container>
        <Row className='py-3'>
            <Col sm="3" xs="2" md="2">
                <UserSideBar/>
            </Col> 
            <Col sm="9" xs="10" md="10">
                    <h1 style={{display:"flex", alignItems:"center", justifyContent:"center", color:"#dc3545" , margin:"100px"}}> Under construction</h1>
            {
                // <UserFavoriteProduct/>
            }
            </Col>
        </Row>
    </Container>
    )
}

export default UserFavoritPage
