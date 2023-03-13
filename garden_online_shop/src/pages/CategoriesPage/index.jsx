import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { load_categories } from '../../requests/categories_req';
import CategoryCard from '../../components/CategoryCard';
import s from './index.module.css'

export default function CategoriesPage() {

  const dispatch = useDispatch();
  const categories = useSelector(state => state.categories);
  
  useEffect(() => {
    dispatch(load_categories)
  }, [])

  return (
    <div className={s.categories_cont}>
      <h1>Категории</h1>
    <div className={s.categories_page}>
      {
        categories.map(el => <CategoryCard key={el.id} {...el} />)
      }
    </div>
    </div>
  )
}