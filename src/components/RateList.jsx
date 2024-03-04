import Rate from './Rate.jsx';
import styles from './rateList.module.css';
import Records from '../records.json';


function RateList() {
     return (
        <div className={styles.wrapper}> 
            {Records.map((record) => <Rate title={record.title} price={record.price} speed={record.speed} text={record.text} color={record.color} size={record.size}/>)}
        </div>
    )
}

export default RateList


