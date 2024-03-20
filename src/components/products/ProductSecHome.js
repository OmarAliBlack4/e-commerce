import React from 'react'
import { Container, Row, Spinner } from 'react-bootstrap'
import SubTiltle from '../utility/SubTitle'
import lap from "../../images/labtop.png"
import ProductCard from './ProductCard'


const ProductSecHome = ({title , btntitle , pathName , products}) => {
    return (
        <Container>
        {
            products ? (<SubTiltle title={title} btntitle={btntitle} pathName={pathName}/>) : null
        }
            
            <Row className='my-2 d-flex justify-content-between'>
            {
                products ? (
                    products.map((item, index)=>{ 
                        return(
                            <ProductCard key={index} item={item} title="Electronics" img={lap} background="#0034FF" />     
                        )
                    })
                ) : null
            }
            </Row>
        </Container>
    )
}

export default ProductSecHome;