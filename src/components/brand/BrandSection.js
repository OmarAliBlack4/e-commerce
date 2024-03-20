import React from 'react'
import { Container, Row, Spinner } from 'react-bootstrap'
import BrandCard from './BrandCard'
import SubTiltle from '../utility/SubTitle';
import GetAllBrandHook from '../../hook/brand/get-all-brand-hook';

const BrandSection = ({ title, btntitle  }) => {

    const [res , loading] = GetAllBrandHook()

    return (
        <Container>
            <SubTiltle title={title} btntitle={btntitle} pathName='/brands' />
            <Row className='my-1 d-flex justify-content-between'>

            {
                loading === false ? (
                    res && res.data && Array.isArray(res.data) ? (
                    res.data.slice(0, 5).map((item, index) => (
                        <BrandCard key={index} img={item.image} />
                    ))
                    ) : (
                    <h4>No brands.</h4>
                    )
                ) : (
                    <Spinner style={{ margin: "0 auto" }} animation="border" variant="primary" />
                )
            }

            </Row>
        </Container>
    )
}

export default BrandSection;
