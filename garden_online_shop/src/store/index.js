import { createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { cartReducer } from './reducers/cart';
import { categoriesReducer } from './reducers/categories';
import { productsReducer } from './reducers/products';
import { productsCategoryReducer } from './reducers/products_category'
import { productReducer } from './reducers/product_item';
import { allProductsReducer } from './reducers/all_products';

const rootReducer = combineReducers({
 categories: categoriesReducer,
 products: productsReducer,
 cart: cartReducer,
 products_category: productsCategoryReducer,
 product_item: productReducer,
 all_products: allProductsReducer
});

export const store = createStore(rootReducer,applyMiddleware(thunk));