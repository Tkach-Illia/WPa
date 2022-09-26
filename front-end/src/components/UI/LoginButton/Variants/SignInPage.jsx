import React from "react";
import cl from "./Page.module.css";

const SignInPage = ({ userData, setUserData, callback }) => {
  return (
    <div className={cl.box}>
      <div className={cl.text_box} />
      <span className={cl.text}>Sign In</span>
      <input
        className={cl.input}
        value={userData.login}
        type="text"
        onChange={(e) => setUserData({ ...userData, login: e.target.value })}
        placeholder="login"
      />
      <input
        className={cl.input}
        style={{ marginTop: "15%" }}
        value={userData.email}
        type="text"
        onChange={(e) => setUserData({ ...userData, email: e.target.value })}
        placeholder="email"
      />
      <input
        className={cl.input}
        style={{ marginTop: "30%" }}
        value={userData.password}
        type="text"
        onChange={(e) => setUserData({ ...userData, password: e.target.value })}
        placeholder="password"
      />
      <button
        className={cl.button}
        style={{ top: "80%" }}
        onClick={() => callback(userData)}
      >
        Confirm
      </button>
    </div>
  );
};

export default SignInPage;
