import CategoryContiner from '../../components/category/CategoryContiner'
import Pagination from '../../components/utility/Pagination'
import HomeCategoryHook from '../../hook/category/home-category-hook'

const CategoryPage = () => {

    const [response,loading,numberOfPages,onPress] = HomeCategoryHook();


    return (
        <div style={{minHeight:'670px'}}>
            <CategoryContiner title='Category' response={response} loading={loading} />
            
            {
                numberOfPages > 1 ? <Pagination numberOfPages={numberOfPages} onPress={onPress}/> : null
            }
        </div>
    )
}

export default CategoryPage
