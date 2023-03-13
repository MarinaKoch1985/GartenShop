import React from 'react'
import ProductSaleContainer from '../ProductSaleContainer'
import s from './index.module.css'

export default function ProductsSection() {
  return (
    <section>
      <div>
        <p className={s.prod_text}>Акции</p>
        <ProductSaleContainer />
      </div>
    </section>
  )
}