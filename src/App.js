import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/utility/Footer";
import NavBarLog from "./components/utility/NavBarLog";
import LoginPage from "./pages/auth/LoginPage";
import HomePage from "./pages/home/HomePage";
import RegisterPage from './pages/auth/RegisterPage';
import CategoryPage from "./pages/category/CategoryPage";
import BrandPage from "./pages/brand/BrandPage";
import ShopProductsPages from "./pages/products/ShopProductsPages";
import ProductsDetilesPage from "./pages/products/ProductsDetilesPage";
import CartPage from "./pages/cart/CartPage";
import PaymentPage from "./pages/checkOut/PaymentPage";
import AdminAllProductPage from "./pages/admin/AdminAllProductPage";
import AllOrderPage from "./pages/admin/AllOrderPage";
import AdminOrderDetailsPage from "./pages/admin/AdminOrderDetailsPage";
import AddBrandPage from "./pages/admin/AddBrandPage";
import AddCategoryPage from "./pages/admin/AddCategoryPage";
import AddSubCategoryPage from "./pages/admin/AddSubCategoryPage";
import AddProductPage from "./pages/admin/AddProductPage";
import UserAllOrdersPage from "./pages/user/UserAllOrdersPage";
import UserFavoritPage from "./pages/user/UserFavoritPage";
import UserProfilePage from "./pages/user/UserProfilePage";
import UserAllAddresPage from './pages/user/UserAllAddresPage';
import UserAddAddressPage from './pages/user/UserAddAddressPage';
import UserEditAddressPage from './pages/user/UserEditAddressPage';
import AdminEditProductPage from "./pages/admin/AdminEditProductPage";
import ForgetPassword from "./pages/auth/ForgetPassword";
import VerifyCodePage from "./pages/auth/VerifyCodePage";
import ResetPasswordPage from "./pages/auth/ResetPasswordPage";
import AdminAddCoupon from "./pages/admin/AdminAddCouponPage";
import AdminAddCouponPage from "./pages/admin/AdminAddCouponPage";



function App() {
  return (
    <div className="App font">
    <BrowserRouter>
      <NavBarLog/>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/register" element={<RegisterPage/>}/>
          <Route path="/allcategory" element={<CategoryPage/>}/>
          <Route path="/brands" element={<BrandPage/>}/>
          <Route path="/products" element={<ShopProductsPages/>}/>
          <Route path="/products/:id" element={<ProductsDetilesPage/>}/>
          <Route path="/cart" element={<CartPage/>}/>
          <Route path="/order/paymethoud" element={<PaymentPage/>}/>
          <Route path="/admin/allproducts" element={<AdminAllProductPage/>}/>
          <Route path="/admin/allorders" element={<AllOrderPage/>}/>
          <Route path="/admin/orders/:id" element={<AdminOrderDetailsPage/>}/>
          <Route path="/admin/addbrand" element={<AddBrandPage/>}/>
          <Route path="/admin/addcategory" element={<AddCategoryPage/>}/>
          <Route path="/admin/addsubcategory" element={<AddSubCategoryPage/>}/>
          <Route path="/admin/addproduct" element={<AddProductPage/>}/>
          <Route path="/user/allorders" element={<UserAllOrdersPage/>}/>
          <Route path="/user/favorit" element={<UserFavoritPage/>}/>
          <Route path="/user/profile" element={<UserProfilePage/>}/>
          <Route path="/user/addresses" element={<UserAllAddresPage/>}/>
          <Route path="/user/add-address" element={<UserAddAddressPage/>}/>
          <Route path="/user/edit-address" element={<UserEditAddressPage/>}/>
          <Route path="/admin/editproduct/:id" element={<AdminEditProductPage/>}/>
          <Route path="/user/forget-password" element={<ForgetPassword/>}/>
          <Route path="/user/verify-code" element={<VerifyCodePage/>}/>
          <Route path="/user/reset-password" element={<ResetPasswordPage/>}/>
          <Route path="/admin/addcoupon" element={<AdminAddCouponPage/>}/>
        </Routes>
      <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;

