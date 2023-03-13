import React from 'react'
import CategoriesContainer from '../CategoriesContainer'
import s from './index.module.css'

export default function CategoriesSection() {
  return (
    <section>
      <div>
        <p className={s.categ_text}>Категории</p>
        <CategoriesContainer />
      </div>
    </section>
        
  )
}