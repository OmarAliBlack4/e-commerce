    import React from 'react'
import { Dropdown, DropdownButton, DropdownItemText } from 'react-bootstrap';
const ProductSubTitle = ({title , onClicke}) => {

    const clickMe = (key)=>{
        localStorage.setItem("sortType" , key)
        console.log(key);
        onClicke();
    }

    return (
        <div className="d-flex justify-content-between pt-3 px-2">
            <div className="sub-tile">{title}</div>
            <div className="search-count-text d-flex ">
            <DropdownButton id="dropdown-basic-button" title="Sort by">
            <DropdownItemText style={{cursor:"pointer"}} onClick={()=> clickMe("")}> Delete sort</DropdownItemText>
            <DropdownItemText style={{cursor:"pointer"}} onClick={()=> clickMe("Best Sales")}>Best Sales</DropdownItemText>
            <DropdownItemText style={{cursor:"pointer"}} onClick={()=> clickMe("Best Rate")}>Best Rate</DropdownItemText>
            <DropdownItemText style={{cursor:"pointer"}} onClick={()=> clickMe("Price from lowest to highest")}> Price from lowest to highest</DropdownItemText>
            <DropdownItemText style={{cursor:"pointer"}} onClick={()=> clickMe("Price from highest to lowest")}> Price from highest to lowest</DropdownItemText>
          </DropdownButton>
            </div>
        </div>
    )
}

export default ProductSubTitle

