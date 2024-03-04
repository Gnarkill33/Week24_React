import React from 'react'
import styles from './rate.module.css'


function Rate(props) {
    const {title, price, speed, text, color, size} = props;
    return (
    <div className={`${styles.rate_container} ${styles[size]}`}>
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