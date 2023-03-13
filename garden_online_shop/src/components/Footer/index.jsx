import React from 'react'
import {InstagramOutlined, WhatsAppOutlined } from '@ant-design/icons'
import s from './index.module.css'

export default function Footer() {
  return (
    <footer className={s.footer}>
        <div className={s.cont_info}>
            <h1>Контакты</h1>
            <p className={s.pfone}>+7 999 999 99 99</p>
            <div className={s.icons}>
            <InstagramOutlined />
            <WhatsAppOutlined />
            </div>
        </div>
        <div className={s.address} >
            <h1>Адрес</h1>
            <p>г. Космонавтов
               проезд Космонавтов, д.11</p>
             <h2>Режим работы</h2>  
             <p>Круглосуточно</p>
        </div>
    </footer>
    )
  }
  