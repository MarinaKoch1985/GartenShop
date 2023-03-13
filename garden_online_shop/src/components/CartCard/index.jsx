import React from 'react'
import { useDispatch } from 'react-redux';
import { incrementCount, decrementCount } from '../../store/reducers/cart';
import { CloseOutlined } from '@ant-design/icons'
import { clearCard } from '../../store/reducers/cart';
import s from './index.module.css'


export default function CartCard({id, title, image, price, discont_price, count}) {
    const dispatch = useDispatch();
    const increment_count = () => dispatch(incrementCount(id));
    const decrement_count = () => dispatch(decrementCount(id));
    const clear_cart = () => dispatch(clearCard());

  return (
    <div className={s.cart_card}>
        <img src={`http://localhost:3333${image}`} alt={title}/>
        <div className={s.title}>
            <p>{title}</p> 
            <div className={s.count}>
                <button onClick={decrement_count}>-</button>
                <p>{count}</p>
                <button onClick={ increment_count }>+</button>              
            </div>
        </div>
        <div className={s.price}>
            <p>{discont_price}€</p>
            <p>{price}€</p>
        </div>
        <p onClick={clear_cart} className={s.cross}><CloseOutlined /></p>
    </div>
  )
}