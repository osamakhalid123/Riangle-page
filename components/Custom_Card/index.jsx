import { Power1, gsap } from "gsap";
import React, { useEffect, useRef } from "react";

import Image from "next/image";
import ScrollTrigger from "gsap/ScrollTrigger";
import localFont from "next/font/local";
import styles from "./style.module.css";

const MagnitaFont = localFont({ src: "../../fonts/Magnita.ttf" });
function Custom_CARD({ ImgSrc, Title, Date }) {
  const imageRef = useRef(null);
  const svg1Ref = useRef(null);
  const svg2Ref = useRef(null);
  const svg3Ref = useRef(null);

  //  image animation
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(imageRef.current, {
      opacity: 0,
      y: 50,
      duration: 0.8,
      scrollTrigger: {
        trigger: imageRef.current,
        start: "top 80%",
      },
    });
    // arrows Animation

    const tl = gsap.timeline({ repeat: -1 });

    tl.to(svg1Ref.current, { x: "+=3", duration: 0.25 })
      .to(svg1Ref.current, { x: 0, duration: 0.25 })
      .to(svg2Ref.current, { x: "+=3", duration: 0.25, delay: 0.25 })
      .to(svg2Ref.current, { x: 0, duration: 0.25 })
      .to(svg3Ref.current, { x: "+=3", duration: 0.25, delay: 0.25 })
      .to(svg3Ref.current, { x: 0, duration: 0.25 });
  }, []);

  return (
    <div>
      <div className={`${styles.Card__storyContainer}`}>
        <div className={styles.Card__imageContainer} ref={imageRef}>
          <Image src={ImgSrc} alt="crypto-img" width={1170} height={620} />
        </div>
        <h3 className={`${styles.Card__title} `} style={MagnitaFont.style}>
          {Title}
        </h3>
        <p className={`${styles.Card__date} `}>{Date}</p>
        <div className={`${styles.Card__readBtnContainer} `}>
          <p className={styles.Card__readBtn}>Read Article</p>
          <em>
            <svg
              ref={svg1Ref}
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.0859 5.46875L20.1172 12.5L13.0859 19.5312M19.1406 12.5H4.88281"
                stroke="#F43333"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>

            <svg
              ref={svg2Ref}
              width="10"
              height="17"
              viewBox="0 0 10 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="1"
                d="M1.08594 1.46875L8.11719 8.5L1.08594 15.5312"
                stroke="#F43333"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <svg
              ref={svg3Ref}
              width="10"
              height="17"
              viewBox="0 0 10 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="1"
                d="M1.08594 1.46875L8.11719 8.5L1.08594 15.5312"
                stroke="#F43333"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </em>
        </div>
      </div>
    </div>
  );
}

export default Custom_CARD;
