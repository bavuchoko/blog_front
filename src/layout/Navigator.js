import React, {useState} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faChevronDown} from "@fortawesome/free-solid-svg-icons/faChevronDown";
import {faBars} from "@fortawesome/free-solid-svg-icons/faBars";
import Magnifier from "../assets/icons/magnifier.png"
import Git from "../assets/icons/git.png"
import Pjs from "../assets/icons/pjs.jpg"
import {Link} from "react-router-dom";


function Navigator(props) {
    const [open, setOpen]=useState(false)
    const openHandler = () =>{
        setOpen(!open)
    }
    const closeMenu = () =>{
        setOpen(false)
        document.body.style.removeProperty('overflow');
    }

    return (
        <div className="navbar">
            <div className="nav-row flex">
                <div className="nav-profile flex">
                    <Link to= '/'><img src={Pjs} className="profile-img"/></Link>
                    <div className="nav-profile-info">
                        <p className="nav-profile-name">Jongsu Park</p>
                        <div>
                            <span className="nav-profile-mood">공부합시다</span>
                            <span className="txt_bar"></span>
                            <Link className="nav-git-link">
                                <img src={Git} className="nav-git-icon"/>
                                <span className="nav-profile-link">GitHub</span>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="nav-menu">
                    <div className="nav-input-area">
                        <img src={Magnifier} className="nav-input-icon"/>
                        <input type={"text"}  className="nav-input"/>
                    </div>
                    <button className="nav-menu-btn" onClick={openHandler}>
                        <span className="nav-menu-name">CATEGORY</span>

                        <FontAwesomeIcon className="nav-faBars" icon={faBars} />
                        <FontAwesomeIcon className="nav-faChevronDown" icon={faChevronDown} />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Navigator;
