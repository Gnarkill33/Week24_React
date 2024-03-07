import React from 'react'
import styles from './rate.module.css'
import { useState } from'react';


function Rate(props) {
    const [active, setActive] = useState(false);
    const {title, price, speed, text, color} = props;
    return (
    <div onClick={() => setActive(!active)} 
        className={`${styles.rate_container} ${active ? styles.sizeable : ""}`}>
        <div className={`${styles.rate_title} ${styles[color]}`}>{title}</div>
        <div className={`${styles.rate_price_box} ${styles[color]}`}>
            <p className={styles.currency}>руб</p>
        <div className={styles.rate_price}>{price}</div>
        <p className={styles.per_month}>/мес</p>
        </div>
        <div className={styles.rate_speed}>{speed}</div>
        <div className={styles.rate_unlimited}>{text}</div>
    </div>
    )
}

export default Rate