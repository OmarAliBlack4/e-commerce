import React from 'react'
import CatHeader from '../../components/category/CatHeader'
import { Container } from 'react-bootstrap'
import ProductsDetiles from '../../components/products/ProductsDetiles'
import RateContiner from '../../components/rate/RateContainer'
import ProductSecHome from '../../components/products/ProductSecHome'
import { useParams } from 'react-router'
import GetSpecificProductHook from '../../hook/product/get-specific-product-hook'
import { ToastContainer } from 'react-toastify'

const ProductsDetilesPage = () => {
    const {id} = useParams()
    const [data, images ,catData , brData , sameCat] = GetSpecificProductHook(id);
    if (data) {
        var  ratingsQua = data.ratingsQuantity;
        var  ratingsAve = data.ratingsAverage;
    }
    return (
        <div>
            <CatHeader/>
            <Container>
                <ProductsDetiles />
                <RateContiner ratingsQua={ratingsQua} ratingsAve={ratingsAve}/>
                {
                    // lagggggggggggggggg here
                    // <ProductSecHome products={sameCat} title="You may like" />
                }
            </Container>
        </div>
    )
}

export default ProductsDetilesPage
