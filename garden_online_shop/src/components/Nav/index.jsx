import React from 'react'
import logo from './media/image 1.png'
import s from './index.module.css'
import { Link } from 'react-router-dom'
import {ShoppingOutlined} from '@ant-design/icons'


export default function Nav() {
  return (
    <div className={s.nav_field}>

        <div className={s.header_style} >
            <header >
                <Link to='/'>
                <img src={logo} alt="logo" className={s.img_logo}/>

                </Link>

                <button>Каталог</button>
                
            </header>
        </div>

        <div>
            <nav className={s.nav_menu}>
                <Link to='categories'>Категории</Link>
                <Link to='/coupon'>Купон</Link>
                <Link to='/sales'>Акции</Link>
                <Link to='/contacts'>Контакты</Link>
                <Link to='/cart'><ShoppingOutlined /></Link>   
            </nav>
        </div>
    </div>
  )
}