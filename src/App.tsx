import React, {useState} from 'react'
import './App.css'
import {Route, Routes, useLocation} from "react-router-dom";
import Header from "./Layout/Components/Header/Header";
import Home from "./Layout/modules/Home/Home";

const App = () => {
    const [open, setOpen] = useState(false);
    const location = useLocation();
    return (
        <div className={`${open && 'h-screen overflow-hidden'} font-whole`}>
            <Header handleSubMenuOpen={setOpen}/>
            <div className="mt-12 md:mt-16">
                <Routes location={location} key={location.pathname}>
                    <Route path="/" element={<Home/>}/>
                </Routes>
            </div>
        </div>
    );
};

export default App;
