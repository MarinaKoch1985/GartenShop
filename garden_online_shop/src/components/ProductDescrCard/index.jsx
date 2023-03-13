import React from 'react'
import s from './index.module.css'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { addToCart } from '../../store/reducers/cart'

export default function ProductDescrCard({id, title, image, price, discont_price}) {

    const dispatch = useDispatch();

     const discount = Math.round(((price - discont_price) / price) * 100);
     const add_to_cart = () => dispatch(addToCart({id, title, image, price, discont_price}))

  return (
    <div className={s.product_card}>
        <div className={s.image}>
        <Link to={`/products/${id}`}>
            <img src={`http://localhost:3333${image}`} alt={title} />
        </Link>
            <button onClick={add_to_cart}>В корзину</button>
        </div>

        <div className={s.prise}>
            <p>{discont_price}€</p>
            <p>{price}€</p>
            <p>{discount}%</p>
        </div>
        <Link to={`/products/${id}`}>
            <p className={s.title}>
                {title}
            </p>
            </Link>
    </div>
  )
}
