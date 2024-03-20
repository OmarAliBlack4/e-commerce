import React from 'react'
import "react-image-gallery/styles/css/image-gallery.css"
import ImageGallery from "react-image-gallery";
import mobile from "../../images/mobile.png"
import mobile1 from "../../images/mobile1.png"
import mobile2 from "../../images/mobile2.png"
import RightArrow from './RightArrow';
import LeftArrow from './LeftArrow';
import { useParams } from 'react-router';
import GetSpecificProductHook from '../../hook/product/get-specific-product-hook';


const ProductGallry = () => {
    const {id} = useParams()
    const [ ,images,,,] = GetSpecificProductHook(id);





    return (
        <div className="product-gallary-card d-flex justfiy-content-center  align-items-center
        pt-2">
            <ImageGallery items={images}
            original={mobile}
            showThumbnails={false}
            showFullscreenButton={false}
            renderRightNav={RightArrow}
            renderLeftNav={LeftArrow}
            /> 
        </div>
    )
}

export default ProductGallry
