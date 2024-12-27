import Header from "./header/Header.jsx";
import {Outlet} from "react-router-dom";
import Footer from "./footer/Footer.jsx";
import LoginModal from "../login-modal/LoginModal.jsx";
import {useState} from "react";
import SMSModal from "../login-modal/SMSModal.jsx";
// import SMSModal from "../login-modal/SmsModal.jsx";

const Layout = () => {
    // state
    const [ showModal, setShowModal ] =  useState ('')
    //if else, switch case ? :


    return (
        <div>
            <Header setShowModal={setShowModal}/>
            <Outlet/>
            {showModal === 'login' ? <LoginModal setShowModal={setShowModal}/> : null}
            {showModal === 'sms' ? <SMSModal setShowModal={setShowModal}/> : null}
            {/*{showModal === 'password' ? <LoginModal setShowModal={setShowModal}/> : null}*/}
            {/*<SmsModal/>*/}
            <Footer/>
        </div>
    );
};

export default Layout;