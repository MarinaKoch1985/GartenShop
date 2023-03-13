import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { load_products_category } from '../../requests/products_category'
import ProductSaleCard from '../../components/ProductSaleCard'
import s from './index.module.css'
import SortProducts from '../../components/SortProducts'


export default function ProductsCategoryPage() {

  const { category } = useParams();
  const { id } = useParams();

  const dispatch = useDispatch();
  const products_category = useSelector(state => state.products_category)
  const category_title = useSelector(state => state.categories)
  

  

  useEffect (() => {
    dispatch(load_products_category(category))
  }, [])

   const title = category_title.length >= 1 ? category_title[category - 1].title : "";

  
  return (
    <div className={s.categories}>
      <h1>{title.title}</h1>

      <SortProducts/>

    <div className={s.cards}>
      {
        products_category.map(el => <ProductSaleCard key={el.id} {...el} />)
      }
    </div>
    </div>
  )
}
