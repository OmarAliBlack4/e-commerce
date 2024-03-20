import React from 'react'
import BrandContiner from '../../components/brand/BrandContiner'
import Pagination from '../../components/utility/Pagination';
import HomeBrandHook from '../../hook/brand/home-brand-hook';

const BrandPage = () => {

    const [res , loading , numberOfPages , onPress] = HomeBrandHook();

    return (
        <div>
        <BrandContiner res={res}  loading={loading} />
        {
            numberOfPages > 1 ? (<Pagination numberOfPages={numberOfPages} onPress={onPress} />) : null
        }
        </div>
    )
}

export default BrandPage
