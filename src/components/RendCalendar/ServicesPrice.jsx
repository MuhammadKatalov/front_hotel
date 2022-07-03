import React from 'react';
import styles from './RendCalendar.module.css'

const ServicesPrice = ({rend}) => {
    return (
        <div>
            {rend.service.map(servic => {
                return (
                    <div className={styles.certain_service}>
                        {servic.title} {servic.price}
                    </div> 
                )
            })}
        </div>
    );
};

export default ServicesPrice;