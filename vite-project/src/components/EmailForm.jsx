import React, { useRef, useState } from "react";

const EmailForm = ({ setIsSuccess, setEmail }) => {
  const [error, setError] = useState(false);
  const inputRef = useRef();
  const handleSubmit = () => {
    function isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
    if (inputRef.current.value && isValidEmail(inputRef.current.value)) {
      setIsSuccess(true);
      setEmail(inputRef.current.value);
      setError(false);
      return;
    }
    setError(true);
  };
  return (
    <div className="EmailForm">
      <div className="input-field">
        <label htmlFor="email">Email address</label>
        <br />
        <input type="email" placeholder="email@company.com" ref={inputRef} />
        {error && <p className="error">Valid email required</p>}
      </div>
      <button className="btn" onClick={handleSubmit}>
        Subscribe to monthly newsletter
      </button>
    </div>
  );
};

export default EmailForm;
