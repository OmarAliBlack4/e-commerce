import React from 'react'
import { Row } from 'react-bootstrap'
import SideBarSearchHook from '../../hook/search/side-bar-search-hook';


const SideBarSearch = () => {

    const [category , brand , checkCategory , brandCategory ,numFrom ,numTo] = SideBarSearchHook();
    let from = localStorage.getItem("numFrom")
    let to = localStorage.getItem("numTo")

    return (
        <div className="mt-3">
        <Row>
          <div className="d-flex flex-column mt-2">
            <div className="filter-title">category</div>
            <div className="d-flex mt-3">
              <input onChange={checkCategory} className='me-2' type="checkbox" value="" />
              <div  className="filter-sub me-2  ">All</div>
            </div>
            {
              category.data ? category.data.map((item , index)=>{
                return(
                  <div key={index} className="d-flex mt-2">
                    <input onChange={checkCategory} className='me-2'  type="checkbox" value={item._id} />
                    <div className="filter-sub me-2 "> {item.name}</div>
                </div>
                )
              }) : <h6>No Category</h6>
            }
          </div>
  
          <div className="d-flex flex-column mt-2">
            <div className="filter-title mt-3">Brand</div>
            <div className="d-flex mt-3">
              <input  onChange={brandCategory} className='me-2' type="checkbox" value="" />
              <div className="filter-sub me-2 ">All</div>
            </div>
            {
              brand.data ? brand.data.map((item , index)=>{
                return(
                  <div key={index} className="d-flex mt-2">
                    <input  onChange={brandCategory} className='me-2'  type="checkbox" value={item._id} />
                    <div className="filter-sub me-2 "> {item.name}</div>
                </div>
                )
              }) : <h6>No Brand</h6>
            }
          </div>
  
          <div className="filter-title my-3">Price</div>
          <div className="d-flex">
            <p className="filter-sub my-2">From:</p>
            <input
            value={from}
            onChange={numFrom}
              className="m-2 text-center"
              type="number"
              style={{ width: "50px", height: "25px" }}
            />
          </div>
          <div className="d-flex">
            <p className="filter-sub my-2">To:</p>
            <input
            value={to}
            onChange={numTo}
              className="m-2 text-center"
              type="number"
              style={{ width: "50px", height: "25px" }}
            />
          </div>
        </Row>
      </div>
    )
}

export default SideBarSearch