"use client";

import Image from "next/image";
import React from "react";
import styles from "./style.module.css";

function Footer() {
  return (
    <div className={`${styles.Footer__container} `}>
      <div className={`${styles.Footer__leftContainer}`}>
        <p>© 2013 - 2023 Riangle - All rights reserved.</p>
        <div className={`${styles.Footer__imageContainer}`}>
          <Image
            className={`${styles.Footer__logoImage}`}
            src="/logo.png"
            alt="crypto-img"
            width={50}
            height={50}
          />
        </div>
      </div>

      <div className={`${styles.Footer__links} `}>
        <a href="">Twitter</a>
        <a href="">Instgram</a>
        <a href="">Dribbble</a>
      </div>
    </div>
  );
}

export default Footer;
