import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import CategoriesPage from './pages/CategoriesPage';
import DiscountCoupon from './components/DiscountCoupon';
import ProductsSalePage from './pages/ProductsSalePage';
import ProductsCategoryPage from './pages/ProductsCategoryPage'
import ProductDescrPage from './pages/ProductDescrPage';
// import SaleProductsPage from './pages/SaleProductsPage'


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={ <Layout /> }>
          <Route path='/'element={ <HomePage /> } />
          <Route path='cart' element={<CartPage />} />
          <Route path='categories' element={<CategoriesPage /> }  /> 
          <Route path='categories/:category' element={<ProductsCategoryPage /> }  /> 
          <Route path='/coupon' element={<DiscountCoupon /> }  />
          <Route path='sales' element={<ProductsSalePage />}/>
          <Route path='products/:id' element={<ProductDescrPage />}/>
          {/* <Route path='products/:id' element={<SaleProductsPage />} /> */}

        </Route>
      </Routes>
     
    </div>
  );
}

export default App;