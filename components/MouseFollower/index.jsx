"use client";

import React, { useEffect, useRef, useState } from "react";

import gsap from "gsap";

const MouseFollower = ({ offsetX = 0, offsetY = 0 }) => {
  const circleRef = useRef(null);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const circle = circleRef.current;

    const onMouseMove = (event) => {
      gsap.to(circle, {
        x: event.clientX + offsetX,
        y: event.clientY + offsetY,
        duration: 0.1,
      });
    };

    const handleMouseEnter = () => {
      setHovered(true);
    };

    const handleMouseLeave = () => {
      setHovered(false);
    };

    window.addEventListener("mousemove", onMouseMove);
    circle.addEventListener("mouseenter", handleMouseEnter);
    circle.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      circle.removeEventListener("mouseenter", handleMouseEnter);
      circle.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [offsetX, offsetY]);

  return (
    <svg
      ref={circleRef}
      width="40"
      height="40"
      viewBox="0 0 40 40"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        position: "fixed",
        top: -25,
        left: -25,
        zIndex: 9999,
        pointerEvents: "none",
      }}
    >
      <circle
        cx="20"
        cy="20"
        r={hovered ? "12" : "19"}
        stroke="#ff0000"
        strokeWidth="2"
        fill={hovered ? "rgba(255, 0, 0, 0.5)" : "transparent"}
      />
    </svg>
  );
};

export default MouseFollower;
