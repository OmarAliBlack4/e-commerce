import React from 'react'
import { Container } from 'react-bootstrap'
import ChoosePayMethoud from '../../components/Checkout/ChoosePayMethoud'

const PaymentPage = () => {
    return (
        <Container style={{minHeight:'670px'}}>
            <ChoosePayMethoud />
        </Container>
    )
}

export default PaymentPage
