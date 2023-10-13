import React, {useState} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faChevronDown} from "@fortawesome/free-solid-svg-icons/faChevronDown";
import {faBars} from "@fortawesome/free-solid-svg-icons/faBars";
import Magnifier from "../../assets/icons/magnifier.png"
import Git from "../../assets/icons/git.png"
import Pjs from "../../assets/icons/pjs.png"
import {Link} from "react-router-dom";
import '../../assets/css/nav/mobile.css';
import '../../assets/css/nav/tablet.css';
import '../../assets/css/nav/computer.css';
import Balloon from "./Balloon";
import {faAngleDown, faAngleUp} from "@fortawesome/free-solid-svg-icons";

function Navigator(props) {
    const [open, setOpen]=useState(false)
    const openHandler = () =>{
        setOpen(!open)
    }


    return (
        <div className="navbar">
            {/*<Balloon open={open}/>*/}
            <div className="nav-row flex">
                <div className="nav-profile flex">
                    <Link to= '/'><img src={Pjs} className="profile-img"/></Link>
                    <div className="nav-profile-info">
                        <button className="nav-profile-name" onClick={openHandler}>JONGSU PARK</button>
                        {open ?
                            <FontAwesomeIcon className="reply-faAngleDown" icon={faAngleUp}/>
                            :
                            <FontAwesomeIcon className="reply-faAngleDown" icon={faAngleDown}/>
                        }
                        <div>
                            <button className="nav-profile-mood">다같이 공부합시다</button>
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
