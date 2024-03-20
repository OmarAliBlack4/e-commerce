import { combineReducers } from "redux";
import categoryReducer from "./categoryReducer";
import brandReducer from "./brandReducer"
import subCategoryReducer from "./subCategoryReducer";
import productReducer from "./productReducer";
import authReducer from "./authReducer";
import reviewReducer from "./reviewReducer";
import favLisrReducer from "./favListReducer";
import couponReducer from "./couponReducer"

export default combineReducers({
    allCategory:categoryReducer,
    allBrand:brandReducer,
    allSubCategory:subCategoryReducer,
    allProducts:productReducer,
    authReducer:authReducer,
    reviewReducer:reviewReducer,
    favLisrReducer:favLisrReducer,
    couponReducer:couponReducer
})