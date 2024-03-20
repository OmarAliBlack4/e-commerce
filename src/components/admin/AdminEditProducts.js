import React from 'react'
import { Row, Col} from 'react-bootstrap'
import Multiselect from 'multiselect-react-dropdown';
import add from '../../images/add.png'
import MultiImageInput from 'react-multiple-image-input';
import { CompactPicker } from 'react-color';
import { ToastContainer } from 'react-toastify';
import EditProductHook from '../../hook/product/edit-product-hook';
import { useParams } from 'react-router';


const AdminEditProducts = () => {
    const {id} = useParams()
    
    
    const [category,brand ,images , setImages, setName,name,description,setDescription,
        discount,setDiscount,price,setPrice,quantity,setQuantity,onSelectCategory,
        allCategory,options,onSelect,onRemove,onSelectBrand,allBrand,colors,
        handelDeleteColor,handelOpenColor,showColor,handelComplete,handelSubmt] = EditProductHook(id);

    return (
        <div>
            <Row className="justify-content-start ">
                <div className="admin-content-text pb-4"> Edit Product : {name} </div>
                <Col sm="8">
                
                    <div className="text-form pb-2"> Product Image</div>

                    <MultiImageInput
                    images={images}
                    setImages={setImages}
                    max={5}
                    allowCrop={false}
                    theme={{
                        background: '#f9f9f9',
                        outlineColor: '#979797',
                    }}

                    />
                    <label style={{color:"#979797", margin:"5px 0 0 0 "}}>Product name</label>
                    <input
                        type="text"
                        onChange={(e)=>setName(e.target.value)}
                        value={name}
                        className="input-form d-block mt-3 px-3"
                        placeholder="Product name"
                    />
                    <label style={{color:"#979797", margin:"5px 0 0 0 "}}>Product description</label>
                    <textarea
                    value={description}
                    onChange={(e)=>setDescription(e.target.value)}
                        className="input-form-area p-2 mt-3"
                        rows="4"
                        cols="50"
                        placeholder="product description"
                    />
                    <label style={{color:"#979797", margin:"5px 0 0 0 "}}>Discounte</label>
                    <input
                        type="number"
                        value={discount}
                        onChange={(e)=>setDiscount(e.target.value)}
                        className="input-form d-block mt-3 px-3"
                        placeholder="pre-discount price "
                    />
                    <label style={{color:"#979797", margin:"5px 0 0 0 "}}>Price</label>
                    <input
                        type="number"
                        value={price}
                        onChange={(e)=> setPrice(e.target.value)}
                        className="input-form d-block mt-3 px-3"
                        placeholder="product price "
                    />
                    <label style={{color:"#979797", margin:"5px 0 0 0 "}}>Product quantity</label>
                    <input
                    type="number"
                    value={quantity}
                    onChange={(e)=> setQuantity(e.target.value)}
                    className="input-form d-block mt-3 px-3"
                    placeholder="product quantity "
                />
                <label style={{color:"#979797", margin:"5px 0 0 0 "}}>category name</label>
                    <select
                        name="category"
                        value={category}
                        onChange={onSelectCategory}
                        className="select input-form-area mt-3 px-2 ">
                        <option value="0"> main Category</option>
                        {
                            allCategory.data ? (
                                allCategory.data.map((item , index)=>{
                                    return(
                                        <option key={index} value={item._id}>{item.name}</option>
                                    )
                                })
                            ) : null
                        }
                    </select>
                    <label style={{color:"#979797", margin:"5px 0 0 0 "}}>Sub Category</label>
                    <Multiselect
                        className="mt-2 text-end"
                        placeholder="Sub Category"
                        options={options}
                        onSelect={onSelect}
                        onRemove={onRemove}
                        displayValue="name"
                        style={{ color: "red" }}
                    />
                    <label style={{color:"#979797", margin:"5px 0 0 0 "}}>Brand name</label>
                    <select
                        name="brand"
                        value={brand}
                        onChange={onSelectBrand}
                        id="brand"
                        className="select input-form-area mt-3 px-2 ">
                        <option value="val">Brand</option>
                        {
                            allBrand.data ? (
                                allBrand.data.map((item , index)=>(
                                    <option key={index} value={item._id}>{item.name}</option>
                                ))
                            ) : null
                        }
                        
                    </select>
                    <div className="text-form mt-3 "> Available colors of the product</div>
                    <div className="mt-1 d-flex">
                    {
                        colors.length >= 1 ? (
                            colors.map((item , index)=>{
                            return(
                                <div key={index} onClick={()=>handelDeleteColor(item) }
                                className="color ms-2 border  mt-1"
                                style={{ backgroundColor: item }}>
                            </div>
                            )
                            })
                        ) : null
                    }
                        
                            
                        <img onClick={handelOpenColor} src={add} alt="" width="30px" height="35px" className="" style={{cursor:"pointer"}}/>
                        {
                            showColor === true ? (<CompactPicker onChangeComplete={handelComplete}/>) : null
                        }
                        
                    </div>
                </Col>
            </Row>
            <Row>
                <Col sm="8" className="d-flex justify-content-end ">
                    <button onClick={handelSubmt} className="btn-save d-inline mt-2 ">Save Edit </button>
                </Col>
            </Row>
            <ToastContainer/>
        </div>
    )
}

export default AdminEditProducts;
















