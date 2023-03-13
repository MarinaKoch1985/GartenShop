import React from 'react'
import { useEffect} from 'react'
import { load_all_products } from '../../requests/allProducts_req'
import ProductSaleCard from '../../components/ProductSaleCard'
import { useSelector, useDispatch } from 'react-redux';
import s from './index.module.css'
import SortProducts from '../../components/SortProducts';

export default function ProductsSalePage() {

   

    const dispatch = useDispatch();
    const products = useSelector(state => state.products);

      useEffect(() => {
      dispatch(load_all_products)
      }, []) 

  return (

    <div>

    <SortProducts/>

      <h1>Акции</h1>

      <div  className={s.prod_page}>
      {
        products.map(el => <ProductSaleCard key={el.id} {...el} />)
      }
      </div>
    </div>
  )
}