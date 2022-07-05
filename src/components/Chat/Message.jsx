import React from 'react';
import styles from './chat.module.css';
import { format } from "timeago.js";

const Message = ({item, own}) => {

    return (
        <div className={`${styles.message_container} ${own ? styles.your_message : ''}`}>
            <p>{item.text}</p>
            <span className={styles.send_time}>{format(item.createdAt)}</span>
        </div>
    );
};

export default Message;