import React from 'react'
import { Row,Col, Spinner } from 'react-bootstrap'
import AddBrandHook from '../../hook/brand/add-brand-hook'
import { ToastContainer } from 'react-toastify'
const AdminAddBrand = () => {


    const [ img , name , isPress , onImageChange , onChangeName , handelSubmit ] = AddBrandHook()
    return (
        <div>
            <Row className="justify-content-start ">
                <div className="admin-content-text pb-4">Add new brand</div>
                <Col sm="8">
                    <div className="text-form pb-2">Brnd image </div>
                    <div>
                    <label htmlFor='uploud-photo'>
                        <img src={img}
                        alt='cpi'
                        width="120"
                        height="100"
                        style={{cursor:"pointer"}}/>
                    </label>
                    <input 
                        type='file'
                        name='photo'
                        onChange={onImageChange}
                        id='uploud-photo'
                    />
                </div>
                <input
                onChange={onChangeName}
                value={name}
                type="text"
                className="input-form d-block mt-3 px-3"
                placeholder="Category name"
            />
                </Col>
            </Row>
            <Row>
            <Col sm="8" className="d-flex justify-content-end ">
            <button onClick={handelSubmit} className="btn-save d-inline mt-2 ">Save Edit </button>
        </Col>
    </Row>

    {
        isPress ?  (<Spinner  animation="border" variant="primary" />)  :null
    }
    <ToastContainer/>
        </div>
    )
}

export default AdminAddBrand
