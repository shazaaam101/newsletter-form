import React, { useEffect } from "react";
import svgIllustrationSignUpDesktop from "../assets/images/illustration-sign-up-desktop.svg";
import EmailForm from "./EmailForm";
import svgIllustrationSignUpMobile from "../assets/images/illustration-sign-up-mobile.svg";

const FirstPage = ({ setIsSuccess, setEmail }) => {
  useEffect(() => {
    function checkWidth() {
      const image = document.querySelector(".img");
      if (window.innerWidth < 700) {
        image.src = svgIllustrationSignUpMobile;
      } else {
        image.src = svgIllustrationSignUpDesktop;
      }
    }
    window.addEventListener("resize", checkWidth);
    checkWidth();
    return () => {
      window.removeEventListener("resize", checkWidth);
    };
  }, []);

  return (
    <div className="FirstPage">
      <div className="flex">
        <div className="left-panel">
          <h1 className="title">Stay update!</h1>
          <p>Join 60,000+ product managers receiving monthly updates on:</p>
          <ul className="lists">
            <li className="item-lists">
              Product discovery and building what matters
            </li>
            <li className="item-lists">
              Messuaring to ensure updates are a success
            </li>
            <li className="item-lists">And much more!</li>
          </ul>
          <EmailForm setIsSuccess={setIsSuccess} setEmail={setEmail} />
        </div>
        <div className="right-panel">
          <img
            className="img"
            src={svgIllustrationSignUpDesktop}
            alt="sign-up-desktop"
          />
        </div>
      </div>
    </div>
  );
};

export default FirstPage;
