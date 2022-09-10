import React from 'react';
import {useNavigate} from "react-router-dom";

const Main = () => {
    const router = useNavigate()
    return (
        <div>
            <button onClick={() => router('../')}>main</button>
            <button onClick={() => router('../map')}>map</button>
            <button onClick={() => router('../posts_lost')}>lost</button>
        </div>
    );
};

export default Main;