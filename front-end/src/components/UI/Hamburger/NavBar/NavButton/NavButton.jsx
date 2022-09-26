import React from "react";
import cl from "./NavButton.module.css";
import { useNavigate } from "react-router-dom";

const NavButton = ({ text, path = "/", callback }) => {
  const router = useNavigate();
  return (
    <div
      className={cl.button}
      onClick={() => {
        router(".." + path);
        callback(false);
      }}
    >
      <h1 className={cl.text}>{text}</h1>
    </div>
  );
};

export default NavButton;
