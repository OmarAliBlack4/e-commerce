import React from 'react'
import CatHeader from '../../components/category/CatHeader'
import { Col, Container, Row } from 'react-bootstrap'
import ProductSubTitle from '../../components/utility/ProductSubTitle'
import SideBarSearch from '../../components/utility/SideBarSearch'
import Pagination from '../../components/utility/Pagination'
import ProductSecHome from '../../components/products/ProductSecHome'
import GetProductSearchHook from '../../hook/product/get-product-search-hook'

const ShopProductsPages = () => {

    const [data , pageNum , onPress ,getProduct ,totalProd] = GetProductSearchHook();
    return (
        <div style={{minHeight:'670px'}}>
        <CatHeader/>
            <Container>
            {
                totalProd  ? <ProductSubTitle onClicke={getProduct} title={`${totalProd} Products result`}/> : <ProductSubTitle onClicke={getProduct} title= "0 Products result"/>
            }

                <Row className='d-flex flex-row'>
                    <Col sm="3" xs="3" md="2" className='d-flex'>
                        <SideBarSearch />
                    </Col>
                    <Col sm="9" xs="9" md="10">
                    <ProductSecHome products={data} />
                    </Col>
                </Row>
                {
                    pageNum > 1 ? <Pagination numberOfPages={pageNum}  onPress={onPress} /> : null
                }
            </Container>
        </div>
    )
}

export default ShopProductsPages
