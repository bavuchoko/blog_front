import React, {useEffect, useRef, useState} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faChevronDown} from "@fortawesome/free-solid-svg-icons/faChevronDown";
import {faChevronUp} from "@fortawesome/free-solid-svg-icons/faChevronUp";
import {faBars} from "@fortawesome/free-solid-svg-icons/faBars";
import {faX} from "@fortawesome/free-solid-svg-icons/faX";
import Magnifier from "../../assets/icons/magnifier.png"
import Git from "../../assets/icons/git.png"
import Pjs from "../../assets/icons/pjs.png"
import {Link} from "react-router-dom";
import '../../assets/css/nav/mobile.css';
import '../../assets/css/nav/tablet.css';
import '../../assets/css/nav/computer.css';
import {faAngleDown, faAngleUp} from "@fortawesome/free-solid-svg-icons";
import Menu from "./Menu";
import Category from "./Category";
import {useDispatch, useSelector} from "react-redux";
import {setCategory} from "../../store/slice/categorySlice";
import {getCategoryList} from "../../api/category/CateogryService";

function Navigator(props) {
    const [menuOpen, setMenuOpen]=useState(false)
    const [categoryOpen, setCategoryOpen]=useState(false)
    const menus = useSelector((state) => state.menu);
    const dispatch = useDispatch();
    const menuRef = useRef();
    const categoryRef = useRef();


    const menuOpenHandler = () =>{
        setMenuOpen(!menuOpen)
    }
    const categoryOpenHandler = () =>{
        setCategoryOpen(!categoryOpen)
    }
    useEffect(() => {
        if (!menus || menus.length === 0) {
            // menu 값이 없으면 쿼리를 보냅니다.
            async function fetchMenus() {
                try {
                    const response = await getCategoryList();
                    dispatch(setCategory(response.data));
                } catch (error) {
                    console.log(error)
                }
            }
            fetchMenus();
        }
        document.addEventListener("click", handleOutsideClick);

        return () => {
            document.removeEventListener("click", handleOutsideClick);
        }
    }, [dispatch, menus]);

    const handleOutsideClick = (e) => {
        if (menuRef.current && !menuRef.current.contains(e.target)) {
            // Click is outside the menu, close the menu
            setMenuOpen(false);
        }
        if (categoryRef.current && !categoryRef.current.contains(e.target)) {
            // Click is outside the menu, close the menu
            setCategoryOpen(false);
        }
    }

    return (
        <div className="navbar">
            {/*<Balloon open={open}/>*/}
            <Menu open={menuOpen}  menuRef={menuRef} />
            <Category open={categoryOpen} setCategoryOpen={setCategoryOpen} menus={menus} categoryRef={categoryRef}/>
            <div className="nav-row flex">
                <div className="nav-profile flex">
                    <Link to= '/'><img src={Pjs} className="profile-img" alt="portrait"/></Link>
                    <div className="nav-profile-info">
                        <button className="nav-profile-name" onClick={menuOpenHandler} ref={menuRef}>JONGSU PARK</button>
                        {menuOpen ?
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
                    <button className="nav-menu-btn" onClick={categoryOpenHandler}  ref={categoryRef}>
                        <span className="nav-menu-name">CATEGORY</span>
                        {categoryOpen ?
                            (<>
                                <FontAwesomeIcon className="nav-faBars" icon={faX}/>
                                <FontAwesomeIcon className="nav-faChevronDown" icon={faChevronUp} />
                            </>)
                            :
                            (<>
                                <FontAwesomeIcon className="nav-faBars" icon={faBars}/>
                                <FontAwesomeIcon className="nav-faChevronDown" icon={faChevronDown} />
                            </>)
                        }
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Navigator;
