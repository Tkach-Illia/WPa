import React, {useState} from 'react';
import Lines from "./Lines/Lines";
import NavBar from "./NavBar/NavBar";

const Hamburger = () =>
{
    const [visibleNavBar, setVisibleNavBar] = useState(false)

    return (
        <div>
            <Lines visible={visibleNavBar} callback={setVisibleNavBar}/>
            <NavBar visible={visibleNavBar} callback={setVisibleNavBar}/>
        </div>
    );
};

export default Hamburger;