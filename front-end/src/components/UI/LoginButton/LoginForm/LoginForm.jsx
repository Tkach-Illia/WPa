import React, { useState } from "react";
import styles from "./LoginForm.module.css";
import LogInPage from "../Variants/LogInPage";
import SignInPage from "../Variants/SignInPage";

const LoginForm = ({
  visibleLogIn,
  setVisibleLogIn,
  visibleSignIn,
  setVisibleSignIn,
}) => {
  const [data, setData] = useState({ login: "", email: "", password: "" });
  const style = [styles.myForm];

  if (visibleLogIn || visibleSignIn) {
    style.push(styles.active);
  }

  const setVisible = (status) => {
    setVisibleLogIn(status);
    setVisibleSignIn(status);
  };

  const sendData = (data) => {
    console.log(data);
    setVisible(false);
    setData({ login: "", email: "", password: "" });
  };

  return (
    <div className={style.join(" ")} onClick={() => setVisible(false)}>
      <div onClick={(e) => e.stopPropagation()}>
        {visibleLogIn ? (
          <LogInPage
            userData={data}
            setUserData={setData}
            callback={sendData}
          />
        ) : (
          <SignInPage
            userData={data}
            setUserData={setData}
            callback={sendData}
          />
        )}
      </div>
    </div>
  );
};

export default LoginForm;
