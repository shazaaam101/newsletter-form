import React from "react";
import svgIconSuccess from "../assets/images/icon-success.svg";
const LastPage = ({ setIsSuccess, email }) => {
  const handleDismiss = () => {
    setIsSuccess(false);
  };
  return (
    <div className="LastPage">
      <img src={svgIconSuccess} alt="success-icon" />
      <h1 className="title">Thanks for subscribing!</h1>
      <p>
        A confirmation email has been sent to <strong>{email}</strong> Please
        open it and check the button inside to confirm your subscription.
      </p>
      <button className="btn" onClick={handleDismiss}>
        Dismiss message
      </button>
    </div>
  );
};

export default LastPage;
