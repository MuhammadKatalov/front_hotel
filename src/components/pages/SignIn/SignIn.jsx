import React, { useState } from "react";
import styles from "./SignIn.module.css";
import { useDispatch, useSelector } from "react-redux";
import { doLogin } from "../../../features/AuthSlice";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { Link } from "react-router-dom";

const SigninPage = () => {
  const dispatch = useDispatch();

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [emailError, setEmailError] = useState("Заполните поле");
  const [passwordError, setPasswordError] = useState("Заполните поле");
  const [hiddenPassword, setHiddenPassword] = useState(true);

  const error = useSelector((state) => state.auth.error);

  const handleChangeLogin = (e) => {
    setLogin(e.target.value);
    const re =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError("Некорректный email");
      if (!e.target.value) {
        setEmailError("Заполните поле");
      }
    } else {
      setEmailError("");
    }
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 6) {
      setPasswordError("Пароль должен быть длинeе 6 символов");
      if (!e.target.value) {
        setPasswordError("Заполните поле");
      }
    } else if (e.target.value.length > 14) {
      setPasswordError("Пароль не должен быть длинее 14 символов");
    } else {
      setPasswordError("");
    }
  };

  const handleSubmit = () => {
    dispatch(doLogin({ login, password }));
    setLogin("");
    setPassword("");
  };

  const handlePasswordType = () => {
    setHiddenPassword(!hiddenPassword);
  };

  const blurHandle = (e) => {
    switch (e.target.name) {
      case "email":
        setEmailDirty(true);
        break;
      case "password":
        setPasswordDirty(true);
        break;
    }
  };

  return (
    <div className={styles.signin__page}>
      <div className={styles.auth__form}>
        <div className={styles.auth__form__wrap}>
          <div className={styles.personalInfo}>Вход</div>
          <div className={styles.sign__in}>
            {error ? (
              <div className={styles.signinError}>
                Неверный логин или пароль
              </div>
            ) : (
              ""
            )}
            <div className={styles.first__line__inputs}>
              <div>
                <input
                  onBlur={(e) => blurHandle(e)}
                  className={styles.email__input}
                  name="email"
                  type="text"
                  placeholder="Email"
                  value={login}
                  onChange={(e) => handleChangeLogin(e)}
                />
                {emailDirty && emailError && (
                  <div className={styles.emailError}>{emailError}</div>
                )}
              </div>
              <div className={styles.input__type__wrapper}>
                <div className={styles.password__inputWrapper}>
                  <div className={styles.eyeBtn} onClick={handlePasswordType}>
                    {hiddenPassword ? (
                      <AiOutlineEye />
                    ) : (
                      <AiOutlineEyeInvisible />
                    )}
                  </div>
                  <div>
                    <input
                      onBlur={(e) => blurHandle(e)}
                      className={styles.password__input}
                      name="password"
                      type={hiddenPassword ? "password" : "text"}
                      placeholder="Пароль"
                      value={password}
                      onChange={(e) => handleChangePassword(e)}
                    />
                  </div>
                  {passwordDirty && passwordError && (
                    <div className={styles.passwordError}>{passwordError}</div>
                  )}
                </div>
              </div>
            </div>
            <button
              className={styles.register__button}
              onClick={handleSubmit}
              disabled={(emailError || passwordError) !== ""}
            >
              <span>Подтвердить</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SigninPage;
