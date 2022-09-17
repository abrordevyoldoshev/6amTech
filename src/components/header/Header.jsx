import React from "react";
import { Link } from "react-router-dom";
import { header } from "../../config/headerConfig";
import style from "./header.module.scss";
import { BsArrowUpRightSquare } from "react-icons/bs";

const Header = () => {
  return (
    <div className={style.headerBg}>
      <header className={style.header}>
        <div className={style.hLeft}>
          <>
            <img
              src="https://docs.6amtech.com/img/6am_logo_dark.png"
              alt="404"
            />
          </>
          <ul>
            {header.map((rout) => {
              return (
                <li key={rout.key}>
                  <Link className={style.listLink} to={rout.path}>
                    {rout.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <Link className={style.vist} to="na">
          Visit 6amTech <BsArrowUpRightSquare />{" "}
        </Link>
      </header>
    </div>
  );
};

export default Header;
