import React from "react";
import styles from "./footer.module.css";
import paypal from "../../imagesIcon/paypal-logo.png";
import master from "../../imagesIcon/master.png";
import visa from "../../imagesIcon/visa.png";
import bank from "../../imagesIcon/bank.png";

const Footer = () => {
  return (
    <footer className={styles.foot}>
      <div className={styles.footer__wrapper}>
        <div className={styles.firstline}>
          <div className={styles.text}>NEWSTELLER</div>
          <div className={styles.footbar}>
            <div>TERMS AND CONDITIONS</div>
            <div>CENCELLATION POLICY</div>
            <div>PRIVACY POLICY</div>
          </div>
        </div>
        <div className={styles.secondline}>
          <div className={styles.text2}>
            Sign up to our newsletter for special things and receive 10% off
            your next order.
          </div>
          <div className={styles.icons__pay}>
            <div className={styles.paypal}>
              <img src={paypal} alt=""></img>
            </div>
            <div className={styles.master}>
              <img src={master} alt=""></img>
            </div>
            <div className={styles.visa}>
              <img src={visa} alt=""></img>
            </div>
            <div className={styles.bank}>
              <img src={bank} alt=""></img>
            </div>
          </div>
        </div>
        <div className={styles.text3}>© 2021 The Glass Huts</div>
      </div>
    </footer>
  );
};

export default Footer;
