import React from "react";
import { Link } from "react-router-dom";
import style from './Doc.module.scss'
const Documentation = () => {
  return (
    <div className={style.container}>
      {/*==========  main section started ==============*/}
      <div className={style.main}>
        <h1>6amtech</h1>
        <h2>Your Early Bird IT Partner</h2>
        <button className={style.btn}>
          <Link className={style.link} to="in">
            Start with Documentation{" "}
          </Link>
        </button>
      </div>
      {/*============ Card section started ========== */}
      <div className={style.cards}>

        <div  className={style.card} >
          <img

            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRtOPytbxYDjDBH9lXrDv3e3roGh_F6LGR2gvbWbmcIi2u4Rnw4_bC3IAjR0UPsLzzGyo&usqp=CAU"
            alt=""
          />
          <h3>Check on Youtube</h3>
          <p>
            Check our YouTube videos for easy installation, setup and get your
            website, apps up and running quickly
          </p>
        </div>

        <div className={style.card}>
          <img
            src="https://raw.githubusercontent.com/PhantomScript/asset-container/b26b0ebaaa13bec7fac796ee0b8296676df6ee0b/developer-portfolio/website.svg"
            alt=""
          />
          <h3>Explore our Portfolio</h3>
          <p>
            We are exclusive seller in Codecanyon, Explore our products and
            purchase.
          </p>
        </div>

        <div className={style.card}>
          <img
            className={style.img3}
            src="data:image/jpeg;base64,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"
            alt=""
          />
          <h3>Frequently Asked Questions (FAQ)</h3>
          <p>
            If you have any questions related to our system or you are facing
            any problem before opening a ticket please check our FAQ section.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Documentation;
