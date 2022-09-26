import React, { useState } from "react";
import Lines from "./Lines/Lines";
import NavBar from "./NavBar/NavBar";

const Hamburger = () => {
  const [visibleNavBar, setVisibleNavBar] = useState(false);

  return (
    <div>
      <Lines callback={() => setVisibleNavBar(!visibleNavBar)} />
      <NavBar visible={visibleNavBar} callback={setVisibleNavBar} />
    </div>
  );
};

export default Hamburger;
