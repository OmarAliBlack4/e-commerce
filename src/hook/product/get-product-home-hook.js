import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProduct } from '../../redux/action/productAction';

const GetProductHomeHook = () => {

    const dispatch = useDispatch();
    const productData = useSelector(state => state.allProducts.allProducts)

    useEffect(()=>{
        dispatch(getProduct());
    },[])

    let data = []

        try {
        if (productData.data) {
            data = productData.data.slice(0,4);
        }
    } catch (error) {console.log(error);}
    
    return [data]
}

export default GetProductHomeHook;
