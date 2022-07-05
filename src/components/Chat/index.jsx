import React, {useEffect, useRef, useState} from 'react';
import '../../index.css';
import styles from './chat.module.css';
import {BsEmojiSmileFill, BsFillChatSquareTextFill} from 'react-icons/bs';
import {IoClose} from "react-icons/io5";
import {IoMdSend} from 'react-icons/io';
import {BsLightningChargeFill} from 'react-icons/bs';
import {io} from 'socket.io-client';
import {useDispatch, useSelector} from "react-redux/es/exports";
import {getMessages, postMessage, postWebMessage} from "../../features/chatSlice";
import Message from "./Message";
import Picker from 'emoji-picker-react';

const Chat = () => {
    const userId = localStorage.getItem('id');
    const [message, setMessage] = useState('');
    const [openChat, setOpenChat] = useState(false);
    const socket = useRef();
    const messages = useSelector((state) => state.chat.messages);
    const messagesLoader = useSelector((state) => state.chat.messagesLoader);
    const dispatch = useDispatch();
    const scrollRef = useRef();
    const [emoji, setEmoji] = useState(false);

    useEffect(() => {
        if(openChat) {
            dispatch(getMessages());
        }
    }, [openChat]);

    useEffect(() => {
        if (openChat) {
            scrollRef.current?.scrollIntoView({behavior: "smooth"});
        }
    }, [messages]);

    useEffect(() => {
        socket.current = io('ws://localhost:5000');
        socket.current.on('getMessage', ({message, userId, _id, createdAt}) => {
            dispatch(postWebMessage({text: message, sender: userId, _id: _id, createdAt}));
        });
    }, [socket]);

    useEffect(() => {
        socket.current.on('getUsers', (onlineUsers) => {
            console.log(onlineUsers);
        })
    }, []);

    const handleEmojiClick = (event, emoji) => {
        let memoji = message;
        memoji += emoji.emoji;
        setMessage(memoji)
    }

    const handlePostMessage = (e) => {
        e.preventDefault();
        dispatch(postMessage({
            sender: userId,
            text: message
        }));
        setMessage('');
        socket.current.emit('sendMessage', {message, userId, _id: Math.random(), createdAt: Date.now()});
    }

    return (
        <>
            <div className={styles.chat_container}>
                <BsFillChatSquareTextFill className={styles.chat_icon} onClick={() => setOpenChat(true)}/>
            </div>
            {openChat &&
                <div className={styles.chat_input}>
                    <div className={styles.chat_header}>
                        <h4>Свяжитесь с тех поддержкой</h4>
                        <IoClose className={styles.close_chat} onClick={() => setOpenChat(false)}/>
                    </div>
                    <div className={styles.chat_main}>
                        {!messagesLoader && messages.map((item) => {
                            return (
                                <div ref={scrollRef} key={item._id}>
                                <Message item={item} own={userId === item.sender}/>
                                </div>
                            )
                        })}
                    </div>
                    <div className={styles.chat_input_container}>
                        <form onSubmit={handlePostMessage}>
                            <span>
                                <BsEmojiSmileFill className={styles.emoji_icon} onClick={() => setEmoji(!emoji)}/>
                                {emoji && <Picker onEmojiClick={handleEmojiClick}/>}
                            </span>
                            <input type='text' placeholder='Введите текст...' value={message} onChange={(e) => setMessage(e.target.value)} />
                            {!!message.length && <button type='submit'>
                                <IoMdSend/>
                            </button>}
                        </form>
                    </div>
                    <div className={styles.chat_footer}>
                        <span>
                            Powered by <BsLightningChargeFill/> adaptive
                        </span>
                    </div>
                </div>
            }
        </>
    );
};

export default Chat;