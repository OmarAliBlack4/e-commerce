
import { Container, Row } from 'react-bootstrap'
import SubTiltle from '../utility/SubTitle'
import CatCard from '../category/CatCard'
import Spinner from 'react-bootstrap/Spinner';
import GetAllCatHook from '../../hook/category/get-all-category-hook';


const HomeCategory = () => {


    const [categoryColor,response,loading] = GetAllCatHook()
    return (
        <Container>
        <SubTiltle title='Category' btntitle="More" pathName='/allcategory'/>
        <Row className='my-2 d-flex justify-content-between'>

        {
            loading === false ? (
                response && response.data && Array.isArray(response.data) ? (
                response.data.slice(0, 5).map((item, index) => (
                    <CatCard key={index} title={item.name} img={item.image} background={categoryColor[index]} />
                ))
                ) : (
                <h4>No category.</h4>
                )
            ) : (
                <Spinner style={{ margin: "0 auto" }} animation="border" variant="primary" />
            )
            }
            
            
        </Row>
        </Container>
    )
}

export default HomeCategory
