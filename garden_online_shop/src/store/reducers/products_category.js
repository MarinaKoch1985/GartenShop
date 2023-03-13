const defaultState = [];
let first_state = [];

const LOAD_PRODUCTS_CATEGORY = 'LOAD_PRODUCTS_CATEGORY';
const SORT_PRODUCTS_CATEGORY = 'SORT_PRODUCTS_CATEGORY';
const SEARCH_PRODUCTS_PRICE = 'SEARCH_PRODUCTS_PRICE';


export const loadProductsCategory = payload => ({
    type: LOAD_PRODUCTS_CATEGORY, payload});

export const sortProductsCategory = payload => ({
    type: SORT_PRODUCTS_CATEGORY, payload});  
    
export const searchProductsPrice = payload => ({
    type: SEARCH_PRODUCTS_PRICE, payload});      

export const productsCategoryReducer = (state = defaultState, action) => {
    if (action.type === LOAD_PRODUCTS_CATEGORY){
        first_state = action.payload
        return first_state
    } else if (action.payload === SORT_PRODUCTS_CATEGORY) {
        if (action.payload === 'default'){
        return first_state 
     }
     if (action.payload === 'price') {
        return [...state].sort((a, b) => a.price - b.price);
   
    } else if (action.payload === 'title') {
        return [...state].sort((a, b) => a.title.localeCompare(b.title))
    }else {
        return state
    }
} else if (action.type === SEARCH_PRODUCTS_PRICE){
        const { min_value, max_value } = action.payload;
            return state.map(el => {
                if (el.price >= min_value && el.price <= max_value) {
                    el.hide = false
                } else {
                    el.hide = true
                }
                return el
            })
        }  else {
            return state
        }
    }  
    
        

   


