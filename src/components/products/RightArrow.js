/**
 *  1 Erorr
 */
import React from 'react'
import prev from '../../images/prev.png'
const RightArrow = ( onClick, onDisable ) => {
    return (
        <img
            src={prev}
            alt=""
            width="35px"
            onClick={onClick}
            onDisable={onDisable}
            height="35px"
            style={{ float: "right", marginTop: "220px", cursor: "pointer" }}
        />
    )
}


export default RightArrow


