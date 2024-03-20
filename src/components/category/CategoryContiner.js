import { Container, Row, Spinner } from 'react-bootstrap'
import SubTiltle from '../utility/SubTitle'
import CatCard from './CatCard'

const CategoryContiner = ({title , btntitle , response ,loading }) => {


    const categoryColor =  ["#F4DBA4" , "#F4DBA4" , "#0034FF" , "#F4DBA4" ,"#FF6262" ,"#F4DBA4" , "#F4DBA4" , "#F4DBA4" , "#0034FF" , "#F4DBA4" ,"#FF6262" ,"#F4DBA4"]


    return (
        <Container>
        <SubTiltle title={title} btntitle={btntitle}/>
        <Row className='my-2 d-flex justify-content-between'>
            {
                loading === false ? (
                    response.data ? (
                    response.data.map((item,index)=>{
                        return(
                            <CatCard key={index} title={item.name} img={item.image} background={categoryColor[index]} />
                        )
                    })
                    ) : <h4>No category.</h4>) :  <Spinner style={{margin:"0 auto"}} animation="border" variant="primary" />
            }
        </Row>
        </Container>
    )
}

export default CategoryContiner
