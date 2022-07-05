import React, {useState} from "react";
import styles from "./profile.module.css";
import { useSelector } from "react-redux/es/exports";
import { useDispatch } from "react-redux/es/exports";
import { useEffect } from "react";
import { getUserById } from "../../../features/profileSlice";
import { FaUserAlt } from 'react-icons/fa';
import { HiMenuAlt3 } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const userId = localStorage.getItem("id");
  const user = useSelector((state) => state.profile.user);
  const profileLoader = useSelector((state) => state.profile.profileLoader);
  const dispatch = useDispatch();
  const [settings, setSettings] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getUserById(userId));
  }, [dispatch, userId]);

  console.log(user);

  if (profileLoader) {
    return (
      <div className={styles["newtons-cradle"]}>
        <div className={styles["newtons-cradle__dot"]}></div>
        <div className={styles["newtons-cradle__dot"]}></div>
        <div className={styles["newtons-cradle__dot"]}></div>
        <div className={styles["newtons-cradle__dot"]}></div>
      </div>
    );
  }

  const handleEdit = () => {
    navigate('/profile/edit');
  }

  const handleExit = () => {
    localStorage.clear();
    navigate('/signIn');
  }

  return (
  <div className={styles.profile_container}>
    <span className={styles.menu_wrapper} onClick={() => setSettings(!settings)}>
    <HiMenuAlt3 className={styles.menu_icon}/>
    {settings && <div className={styles.buttons}>
    <button onClick={handleEdit}>Редактировать профиль</button>
    <button onClick={handleExit}>Выйти</button>
    </div>}
    </span>
    <div className={`${styles.avatar} ${user?.avatar ? styles.avatar_border : ''}`} title='сменить аватар'>
        {!user?.avatar ? 
        <FaUserAlt className={styles.profile_icon}/> :
        <img src={`/images/${user.avatar}`} alt={user?.avatar}/>
        }
    </div>
    <div className={styles.profile_info}>
        <span>Имя</span>
        <h2>
            {user?.firstName}
        </h2>
        <hr />
        <span>Фамилия</span>
        <h2>
            {user?.lastName}
        </h2>
        <hr />
        <span>Почтовый адрес</span>
        <h2>
            {user?.login}
        </h2>
        <hr />
    </div>
  </div>
  );
};

export default Profile;
