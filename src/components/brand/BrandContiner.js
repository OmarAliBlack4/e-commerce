import React from 'react'
import { Container, Row, Spinner } from 'react-bootstrap'
import BrandCard from './BrandCard'
import SubTiltle from '../utility/SubTitle'


const BrandContiner = ({res,loading}) => {
    return (
        <Container>
            <SubTiltle title='Brands'  />
            <Row className='my-1 d-flex '>
            {
                loading === false ? (
                    res.data ? res.data.map((item , index)=>{
                        return <BrandCard key={index} img={item.image} />
                    }) : <h1>No Brands</h1>) : <Spinner style={{margin:"0 auto"}} animation="border" variant="primary" />
            }
            </Row>
        </Container>
    )
}

export default BrandContiner
