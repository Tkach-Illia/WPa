import React, {useState} from 'react';
import styles from "./MyForm.module.css";
import LogPage from "../Variants/LogPage";
import SignPage from "../Variants/SignPage";

const MyForm = ({visibleLogIn, setVisibleLogIn, visibleSignIn, setVisibleSignIn}) => {
    const [data, setData] = useState({login: '',email:'', password: ''});
    const style =[styles.myForm]

    if(visibleLogIn || visibleSignIn){
        style.push(styles.active)
    }

    function setVisible(bool){
        setVisibleLogIn(bool)
        setVisibleSignIn(bool)
    }

    function sendData(data){
        console.log(data)
        setVisible(false)
        setData({login: '',email:'', password: ''});
    }

    return (
        <div className={style.join(' ')} onClick={()=>setVisible(false)}>
            <div onClick={(e) => e.stopPropagation()}>
                {visibleLogIn
                    ?<LogPage data={data} setData={setData} callback={sendData}/>
                    :<SignPage data={data} setData={setData} callback={sendData}/>
                }

            </div>
        </div>
    );
};

export default MyForm;