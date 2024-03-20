import { Row, Col } from 'react-bootstrap'
import { ToastContainer } from 'react-toastify'
import AddSubCategoryHook from '../../hook/subCategory/add-sub-category'

const AdminAddSubCategory = () => {

    const [responseCat , name  ,handelName , handelId , handelSubmet ] = AddSubCategoryHook()

    return (
        <div>
            <Row className="justify-content-start ">
                <div className="admin-content-text pb-4"> Add a new subcategory</div>
                <Col sm="8">
                    <input
                        type="text"
                        value={name}
                        onChange={handelName}
                        className="input-form d-block mt-3 px-3"
                        placeholder="sub-classification name "
                    />
                    <select name="languages" id="lang" className="select mt-3 px-2 " onChange={handelId}>
                        <option value='0'>Select main category</option>
                        {
                            responseCat.data ?  (responseCat.data.map((item , index)=>{
                                return(
                                    <option  key={index} value={item._id}>{item.name}</option>
                                )
                            })) : null
                        }
                    </select>
                </Col>
            </Row>
            <Row>
                <Col sm="8" className="d-flex ">
                    <button onClick={handelSubmet} className="btn-save d-inline mt-2 ">Save Edit </button>
                </Col>
            </Row>
            <ToastContainer/>
        </div>
    )
}
export default AdminAddSubCategory
