import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { load_products } from '../../requests/products_req';
import ProductDescrCard from '../ProductDescrCard';
import s from './index.module.css'

export default function ProductsContainer() {
  
  const dispatch = useDispatch();
  const products = useSelector(state => state.products )

  useEffect(()=> {
    dispatch(load_products)
  }, [])
    return (
    <div className={s.products_container}>
        {
          products
          .filter(el => !el.hide)
          .map(el => <ProductDescrCard key={el.id} {...el} />)  
        }
        
        
    </div>
  )
}