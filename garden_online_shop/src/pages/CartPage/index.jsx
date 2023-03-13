import React from 'react'
import { useSelector } from 'react-redux'
import CartCard from '../../components/CartCard';
import s from './index.module.css'


export default function CartPage() {
  const cart = useSelector(state => state.cart)
  const total = (cart.reduce((prev, {discont_price, count}) => prev + discont_price * count, 0).toFixed(2));
  

  return (
    <div className={s.cart}>
      {
        cart.length === 0 
        ? <p>Корзина пуста...</p>
        : <div className={s.title_count}>
            {
              cart.map(el => <CartCard key={el.id} {...el}/>)
            }
          </div>
      }      
      <div className={s.order_details_form}>
        <p className={s.title_form}>Order details</p>
        <div className={s.total}>
          <p>Total: </p>
          <p>{total}<span>€</span></p>
        </div>
        <div className={s.input_btn}>
          <input type='number' placeholder='Ваш номер телефона'/>
          <button>Заказать</button> 
        </div>     
      </div>
    </div>
  )
}