import React from 'react'
import { Container,Row ,Col} from 'react-bootstrap'

const CatHeader = () => {
    return (
        <div className="cat-header">
      <Container>
        <Row>
          <Col className="d-flex justify-content-start py-2 flex-wrap">
            <div className="cat-text-header ">All</div>
            <div className="cat-text-header">Electronics</div>
            <div className="cat-text-header">Clothes</div>
            <div className="cat-text-header"> Electronics</div>
            <div className="cat-text-header">Descount</div>
            <div className="cat-text-header">Descount</div>
            <div className="cat-text-header">Descount</div>
            <div className="cat-text-header">Descount</div>
            <div className="cat-text-header">Descount</div>
            <div className="cat-text-header">More</div>
          </Col>
        </Row>
      </Container>
    </div>
    )
}

export default CatHeader
