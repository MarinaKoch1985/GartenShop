import { loadProducts } from "../store/reducers/products"


export const load_products = category => {
    return dispatch => {
    fetch(`http://localhost:3333/products/${category}`)
    .then(resp => resp.json())
    .then(json => {
        const payloud = json.map(el => ({ 
            ...el,
            hide: false
    }))
    dispatch(loadProducts(payloud))
    })
}
}
