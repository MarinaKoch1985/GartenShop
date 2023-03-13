import { loadAllProducts } from "../store/reducers/all_products" 
 
 export const load_all_products = dispatch => {
     fetch('http://localhost:3333/products/all') 
     .then(resp => resp.json())
     .then(json => dispatch(loadAllProducts(json)))
 }