import React from 'react';
import cl from './NavBar.module.css'
import NavButton from './NavButton/NavButton';

const NavBar = ({visible, callback}) => {
    const styles = [cl.box]

    if(visible){
        styles.push(cl.active)
    }

    return (
        <div
            className={styles.join(' ')}
        >
            <NavButton text={'Main'} callback={callback}/>
            <NavButton text={'Map'} path={'/map'} callback={callback}/>
            <NavButton text={'Lost animals'} path={'/posts_lost'} callback={callback}/>
        </div>
    );
};

export default NavBar;