import React from "react";
import styles from "./profile-edit.module.css";
import { useSelector } from "react-redux/es/exports";
import { useDispatch } from "react-redux/es/exports";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { useEffect } from "react";
import { getUserById, patchUserById, patchUserAvatar } from "../../../features/profileSlice";

const ProfileEdit = () => {
  const [image, setImage] = useState(null);
  const userId = localStorage.getItem("id");
  const user = useSelector((state) => state.profile.user);
  const profileLoader = useSelector((state) => state.profile.profileLoader);
  const dispatch = useDispatch();
  const [name, setName] = useState(
    !localStorage.getItem("firstName")
      ? user?.firstName
      : localStorage.getItem("firstName")
  );
  const [lastName, setLastName] = useState(
    !localStorage.getItem("lastName")
      ? user?.lastName
      : localStorage.getItem("lastName")
  );
  const [login, setLogin] = useState(
    !localStorage.getItem("login") ? user?.login : localStorage.getItem("login")
  );
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getUserById(userId));
  }, [dispatch, userId]);

  useEffect(() => {
    user && localStorage.setItem("firstName", user.firstName);
    user && localStorage.setItem("lastName", user.lastName);
    user && localStorage.setItem("login", user.login);
  }, []);

  const handleEdit = () => {
    navigate("/profile");
    dispatch(
      patchUserById({
        userId,
        firstName: name,
        lastName,
      })
    );
    localStorage.removeItem("firstName");
    localStorage.removeItem("lastName");
    localStorage.removeItem("login");
    if (image) {
    dispatch(patchUserAvatar({
      userId,
      data: image
    }))
  }
  };

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

  return (
    <div className={styles.profile_container}>
      <label>
        <div
          className={`${styles.avatar} ${
            user?.avatar ? styles.avatar_border : ""
          }`}
          title="сменить аватар"
        >
          {!user?.avatar ? (
            <FaUserAlt className={styles.profile_icon} />
          ) : (
            <img src={`/images/${user.avatar}`} alt={user?.avatar} />
          )}
        </div>
        <input type="file" style={{display: 'none'}} onChange={(e) => setImage(e.target.files[0])}/>
      </label>
      <div className={styles.profile_info}>
        <span>Имя</span>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <hr />
        <span>Фамилия</span>
        <input value={lastName} onChange={(e) => setLastName(e.target.value)} />
        <hr />
        <span>Почтовый адрес</span>
        <input value={login} onChange={(e) => setLogin(e.target.value)} />
        <hr />
      </div>
      <button className={styles.edit_button} onClick={handleEdit}>
        Изменить
      </button>
    </div>
  );
};

export default ProfileEdit;
