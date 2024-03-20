import React from 'react'
import Slider from '../../components/home/Slider'
import HomeCategory from '../../components/home/HomeCategory'
import ProductSecHome from '../../components/products/ProductSecHome'
import DiscountSection from '../../components/home/DescountSection'
import BrandSection from '../../components/brand/BrandSection'
import GetProductHomeHook from '../../hook/product/get-product-home-hook'

const HomePage = () => {

    const [data] = GetProductHomeHook(); 

    return (
        <div className='font' style={{ minHeight: '670px' }}>
        <Slider/>
        <HomeCategory/>
        <ProductSecHome products={data} title="Best sales" btntitle="More" pathName="/products"/>
        <DiscountSection/>
        <ProductSecHome products={data} title="Best Rate" btntitle="More" pathName="/products"/>
        <BrandSection title="Best brand"  btntitle='More' />
        </div>
    )
}

export default HomePage
