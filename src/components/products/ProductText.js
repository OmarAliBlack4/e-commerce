import React, { useState } from 'react'
import { Row,Col } from 'react-bootstrap'
import GetSpecificProductHook from '../../hook/product/get-specific-product-hook'
import { useParams } from 'react-router'

const ProductText = () => {
  const {id} = useParams()
  const [data ,,catData,brData,] = GetSpecificProductHook(id);
  const [colorNum , setColorNum ] = useState('')
  const [color , setColor ] = useState('')


  const colorHandel =(index , color)=>{
    setColorNum(index)
    setColor(color)

  }

    return (
        <div>
      <Row className="mt-2">
        <div className="cat-text">{catData.name} :</div>
      </Row>
      <Row>
        <Col md="8">
          <div className="cat-title d-inline">{data.title}<div className="cat-rate d-inline mx-3">{data.ratingsQuantity}</div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md="8" className="mt-4">
          <div className="cat-text d-inline">Brand :</div>
          <div className="barnd-text d-inline mx-1">{brData.name} </div>
        </Col>
      </Row>
      <Row>
        <Col md="8" className="mt-1 d-flex">

        {
          data.availableColors ? (data.availableColors.map((color,index)=>{
            return(
              <div key={index} onClick={()=> colorHandel(index , color)} className="color ms-2 " style={{ backgroundColor: color , border: index === colorNum ? "1px solid black": "none" }}></div>
            )
          }) ) : null
        }
        </Col>
      </Row>

      <Row className="mt-4">
        <div className="cat-text">Detiles :</div>
      </Row>
      <Row className="mt-2">
        <Col md="10">
            <div className="product-description d-inline">{data.description}</div>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md="12">
          <div className="product-price d-inline px-3 py-3 border">{data.price} $</div>
          <div className="product-cart-add px-3 py-3 d-inline mx-3">Add to cart</div>
        </Col>
      </Row>
    </div>
    )
}

export default ProductText
