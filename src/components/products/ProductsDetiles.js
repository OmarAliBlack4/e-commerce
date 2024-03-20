import React from 'react'
import { Col, Row } from 'react-bootstrap'
import ProductGallry from './ProductGallery'
import ProductText from './ProductText'

const ProductsDetiles = () => {
    return (
        <div>
            <Row className='py-3' >
                <Col lg="4">
                    <ProductGallry />
                </Col>
                <Col lg="8">
                    <ProductText />
                </Col>
            </Row>
        </div>
    )
}

export default ProductsDetiles
