import React from 'react';
import cl from './LogPage.module.css'

const SignPage = ({data, setData, callback}) => {
    return (
        <div className={cl.box}>
            <div className={cl.text_box}/>
            <span className={cl.text}>Sign In</span>
            <input
                className={cl.input}
                value={data.login}
                type="text"
                onChange={e => setData({...data, login: e.target.value})}
                placeholder = "login"
            />
            <input
                className={cl.input}
                style={{marginTop: '15%'}}
                value={data.email}
                type="text"
                onChange={e => setData({...data, email: e.target.value})}
                placeholder = "email"
            />
            <input
                className={cl.input}
                style={{marginTop: '30%'}}
                value={data.password}
                type="text"
                onChange={e => setData({...data, password: e.target.value})}
                placeholder = "password"
            />
            <button className={cl.button} style={{top: '80%'}} onClick={()=>callback(data)}>Confirm</button>
        </div>
    );
};

export default SignPage;