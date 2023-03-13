import React from 'react'
import s from './index.module.css'
import imgCoupon from './media/image 3.png'


export default function DiscountCoupon() {
  return (
    <section className={s.disc_coupon}>
      <img src={imgCoupon} alt="imgCoupon" />
      <div className={s.disc_coupon_info}>
        <div className={s.disc_coupon_text}>
          <p className={s.disc_coupon_procent_sale}>Скидка 5% </p>
          <p className={s.disc_coupon_about_sale}>на первый заказ</p>
        </div>

        <div className={s.info_number_block}>
            <input type="text" placeholder='+7' />
            <button>Получить скидку</button>
        </div>
      </div>
    </section>
    
  )
}