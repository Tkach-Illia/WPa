import React from "react";
import './styles/App.css'
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/UI/AppRouter";
import MyHeader from "./components/UI/Header/MyHeader";


function App() {
    return (
        <BrowserRouter>
            <MyHeader/>
            <AppRouter/>
        </BrowserRouter>
    );
}

export default App;
