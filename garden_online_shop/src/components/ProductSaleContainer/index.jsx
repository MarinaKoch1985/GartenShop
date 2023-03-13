import React from 'react'
import { useEffect} from 'react'
import { load_all_products } from '../../requests/allProducts_req'
import ProductSaleCard from '../ProductSaleCard'
//import { load_products_category } from '../../requests/products_category'
import { useSelector, useDispatch } from 'react-redux';
import s from './index.module.css'


export default function ProductSaleContainer() {
 
    const dispatch = useDispatch();
    const products = useSelector(state => state.products);

    useEffect(() => {
        dispatch(load_all_products)
    }, [])
 
    return (
    
        
    <section className={s.product_container}>
        
        {
            products
            .sort(() => 0.5 - Math.random())
            .slice(0, 3)
            .map(el => <ProductSaleCard key={el.id} {...el} />)
        }
        
    </section>
    
  )
}
