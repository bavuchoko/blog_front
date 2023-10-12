import React, {useState} from 'react';
import Menu from "./Menu";

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
                <div className="nav-col-left">

                </div>

                <div className="nav-col-center">

                </div>
                <div className="nav-col-right">
                    <button className="btn-menu-open"  onClick={openHandler}>open</button>
                </div>
            </div>
            <Menu closeMenu={closeMenu} open={open}/>
        </div>
    );
}

export default Navigator;
