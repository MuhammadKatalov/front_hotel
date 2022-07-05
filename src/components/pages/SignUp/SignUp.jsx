import React, { useState } from "react";
import styles from "./SignUp.module.css";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { createUser } from "../../../features/AuthSlice";
import { Link, useNavigate } from "react-router-dom";
import InputMask from "react-input-mask";

const SignupPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [country, setCountry] = useState("");
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
      setPasswordError("Пароль должен быть длиннeе 6 символов");
      if (!e.target.value) {
        setPasswordError("Заполните поле");
      }
    } else if (e.target.value.length > 14) {
      setPasswordError("Пароль не должен быть длиннее 14 символов");
    } else {
      setPasswordError("");
    }
  };

  const handleChangeFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const handleChangeLastName = (e) => {
    setLastName(e.target.value);
  };

  const handleChangePhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleSubmit = () => {
    dispatch(
      createUser({ login, password, firstName, lastName, phoneNumber, country })
    )
      .unwrap()
      .then(() => navigate("/signin"))
      .catch((e) => console.log(e));
    setLogin("");
    setPassword("");
    setFirstName("");
    setLastName("");
    setPhoneNumber("");
    setCountry("");
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

  const handlePasswordType = () => {
    setHiddenPassword(!hiddenPassword);
  };

  return (
    <div className={styles.signup__page}>
      <div className={styles.auth__form}>
        <div className={styles.auth__form__wrap}>
          <div className={styles.personalInfo}>Авторизация</div>
          <div className={styles.sign__up}>
            {error ? (
              <div className={styles.signupError}>
                Пользователь с таким адресом уже существует
              </div>
            ) : (
              ""
            )}
            <div className={styles.second__line__inputs}>
              <input
                className={styles.firstName__input}
                type="text"
                placeholder="Имя"
                value={firstName}
                onChange={(e) => handleChangeFirstName(e)}
              />
              <input
                className={styles.lastName__input}
                type="text"
                placeholder="Фамилия"
                value={lastName}
                onChange={(e) => handleChangeLastName(e)}
              />
            </div>
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
            <div className={styles.third__line__inputs}>
              <InputMask
                mask="+7(999)-999-99-99"
                className={styles.phoneNumber__input}
                type="text"
                placeholder="+7 (123)-456-78-90"
                value={phoneNumber}
                onChange={(e) => handleChangePhoneNumber(e)}
              ></InputMask>
              <select
                className={styles.select}
                name="format"
                id="format"
                value=""
                onChange={(e) => setCountry(e.target.value)}
              >
                <option selected disabled>
                  Страна
                </option>
                <option value="Росиия">Россия</option>
                <option value="Украина">Украина</option>
                <option value="США">США</option>
                <option value="Китай">Китай</option>
                <option value="Дания">Дания</option>
              </select>
            </div>
            <button
              className={styles.register__button}
              onClick={handleSubmit}
              disabled={(emailError || passwordError) !== ""}
            >
              <span>Регистрация</span>
            </button>
            <div className={styles.link__div}>
              Уже есть аккаунт?{" "}
              <Link className={styles.signin__link} to="/signin">
                Войти
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
