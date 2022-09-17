import React from "react";
import style from "./footer.module.scss";
import { header } from "../../config/headerConfig";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className={style.container}>
      <ul className={style.left}>
        <h2>Project List</h2>
        {header.map((route) => {
          return (
            <li key={route.key}>
              <Link className={style.link} to={route.path}>
                {route.title}
              </Link>
            </li>
          );
        })}
      </ul>
      <div className={style.footerMain}>
        <h2>For any kind of support</h2>
        <a href="https://support.6amtech.com/">Open a ticket</a>
      </div>

      <div className={style.right}>
        <img src="https://docs.6amtech.com/img/6am_logo_white.png" alt="" />
        <h3>© 2020-2022 6amTech. All rights reserved.</h3>
        <div className={style.icons}>
            <a href="https://www.facebook.com/6amtech" >< FaFacebookF /></a>
            <a href="https://www.linkedin.com/company/6amtech/"> < FaLinkedinIn /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
