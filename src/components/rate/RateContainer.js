import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import rate from '../../images/rate.png'
import Pagination from '../utility/Pagination';
import RateItem from './RateItem';
import RatePost from './RatePost';
import { useParams } from 'react-router';
import GetAllReviewHook from '../../hook/review/get-all-review-hook';

const RateContainer = ({ratingsQua ,ratingsAve }) => {
    console.log(ratingsAve);
    const {id} = useParams();
    const [allReview , onPress] = GetAllReviewHook(id)
    const isLog = localStorage.getItem("token") 
    let numberOfPage;
    if(allReview.paginationResult){
        numberOfPage = allReview.paginationResult.numberOfPages;
    }    
    return (
        <Container className='rate-container'>
            <Row>
                <Col className="d-flex">
                    <div className="sub-tile d-inline p-1 ">Rates</div>
                    <img className="mt-2" src={rate} alt="" height="16px" width="16px" />
                    <div className="cat-rate  d-inline  p-1 pt-2">{ratingsAve}</div>
                    <div className="rate-count d-inline p-1 pt-2">({`${ratingsQua} Rates`})</div>
                </Col>
            </Row>
            {
                isLog ? (<RatePost/>) : null
            }
            
            {
                allReview.data ? (allReview.data.map((ele , index)=>{
                    return(<RateItem key={index} ele={ele}/>)
                    
                })): <h4 style={{textAlign:"center" , padding:"10px"}}>No review</h4>
            }
            {
                numberOfPage > 1 ? <Pagination numberOfPages={allReview.paginationResult ? allReview.paginationResult.numberOfPages : 0} onPress={onPress}  /> : null
            }
            
        </Container>
    )
}

export default RateContainer;


