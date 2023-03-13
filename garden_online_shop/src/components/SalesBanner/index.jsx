import React from 'react'
import saleImg from './media/image 2.png'
import s from './index.module.css'

export default function SalesBanner() {
  return (
    <section>
      <div className={s.sales_banner}>
        <h2 className={s.title_sale}>Распродажа:</h2>
        <h3 className={s.about_sale}>в честь нового сезона</h3>
        <button className={s.button_promotions}>Все акции</button>
        <button className={s.button_more}>Подробнее</button>
        <img src={saleImg} alt="saleImg" />
      </div>

    </section>
  )
}