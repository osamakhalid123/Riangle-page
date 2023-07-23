"use client";

import { Container } from "react-bootstrap";
import Custom_CARD from "../Custom_Card";
import Image from "next/image";
import React from "react";
import localFont from "next/font/local";
import styles from "./style.module.css";

const SignetonFont = localFont({ src: "../../fonts/Signeton.otf" });
const MagnitaFont = localFont({ src: "../../fonts/Magnita.ttf" });

function Hero() {
  return (
    <Container>
      <div className={`${styles.Hero__TextContainer}`}>
        <h1 className={`${styles.Hero__Text}`} style={MagnitaFont.style}>
          Stories
        </h1>
        <span style={SignetonFont.style} className={`${styles.Hero__subText}`}>
          From Riangle Team
        </span>
      </div>

      <Custom_CARD
        ImgSrc="/crypto-img.png"
        Title="How to open a crypto wallet and buy your first NFT"
        Date="02-03-2022"
      />
    </Container>
  );
}

export default Hero;
