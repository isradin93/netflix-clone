import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import './Nav.css';

function Nav() {
    const [show, handleShow] = useState(false);
    const history = useHistory();

    function transitionNavBar() {
        if (window.scrollY > 100) {
            handleShow(true);
        } else {
            handleShow(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', transitionNavBar);

        // Cleanup
        return () => {
            window.removeEventListener('scroll', transitionNavBar);
        };
    }, []);

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <div className="nav__contents">
                <img
                    onClick={() => history.push("/")}
                    className="nav__logo"
                    src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
                    alt=""
                />

                <img
                    onClick={() => history.push("/profile")}
                    className="nav__avatar"
                    src="https://cdn.pixabay.com/photo/2016/11/08/15/21/user-1808597_960_720.png"
                    alt=""
                />
            </div>
        </div>
    );
}

export default Nav;