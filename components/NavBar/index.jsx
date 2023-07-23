"use client";

import { Nav, Navbar, NavbarBrand } from "react-bootstrap";
import React, { useState } from "react";

import Hamburger from "hamburger-react";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./style.module.css";

const inter = Inter({ subsets: ["latin"] });

function NavBar() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <Navbar className={`${styles.navBar__container}`} expand="md">
        <Navbar.Brand className={`${styles.navBar__brandLogo}`} href="#home">
          <Image src="/logo.png" alt="crypto-img" width={50} height={50} />
        </Navbar.Brand>
        <NavbarBrand>
          <svg
            width="101"
            height="16"
            viewBox="0 0 101 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="name"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6.91837 15.3958L2.59196 9.17898H1.83191V15.3958H0V0.701545H2.22168C3.5274 0.701545 4.93056 0.721039 6.09986 1.38364C7.32763 2.10471 8.02921 3.48839 8.02921 4.89155C8.02921 6.9963 6.62605 8.75024 4.50182 9.00359L9.14004 15.3958H6.91837ZM1.83191 7.6589H2.41656C4.28744 7.6589 6.31423 7.3081 6.31423 4.9695C6.31423 2.66987 4.13154 2.33858 2.31912 2.33858H1.83191V7.6589ZM14.8545 15.3958V0.701545H16.6864V15.3958H14.8545ZM24.1742 15.3958H22.2059L29.2217 0.0779297L36.2375 15.3958H34.2692L32.5932 11.7125H25.8502L24.1742 15.3958ZM26.6103 10.0365H31.8332L29.2217 4.09252L26.6103 10.0365ZM52.6511 11.5566V0.701545H54.483V15.9999L43.4526 4.44332V15.3958H41.6206V-3.05176e-05L52.6511 11.5566ZM74.8137 7.9902V8.57485C74.8137 12.6089 71.9684 15.7076 67.8563 15.7076C63.7443 15.7076 60.4312 12.1607 60.4312 8.08764C60.4312 3.85867 63.8222 0.389737 68.0512 0.389737C70.3313 0.389737 72.592 1.42263 74.0341 3.23504L72.7479 4.4628C71.6955 3.02066 69.9221 2.06574 68.1292 2.06574C64.8356 2.06574 62.2632 4.73564 62.2632 8.02917C62.2632 11.1083 64.7966 14.0316 67.9732 14.0316C70.2534 14.0316 72.7089 12.0633 72.7869 9.66619H68.9866V7.9902H74.8137ZM87.2516 13.7198V15.3958H80.9568V0.701545H82.7887V13.7198H87.2516ZM100.683 0.701545V2.37755H94.6225V6.4896H100.508V8.1656H94.6225V13.7198H100.683V15.3958H92.7906V0.701545H100.683Z"
              fill="#000"
            ></path>
          </svg>
        </NavbarBrand>

        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className={`${styles.navBar__toggle}`}
        >
          <Hamburger onToggle={(toggled) => setOpen(toggled)} />
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className={`${styles.navBar__links}`}>
            <Nav.Link href="#home" style={inter.style}>
              Work
            </Nav.Link>
            <Nav.Link href="#link" style={inter.style}>
              About
            </Nav.Link>
            <Nav.Link href="#link" style={inter.style}>
              Stories
            </Nav.Link>
            <Nav.Link href="#link" style={inter.style}>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default NavBar;
