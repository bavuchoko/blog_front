import React from 'react';
import {Outlet} from "react-router-dom";
import Navigator from "./nav/Navigator";
import Footer from "./Footer";


function Root({nav, foot}) {

    return (
        <>
            {nav &&
                <Navigator/>
            }
                <div className="containers">
                    <Outlet/>
                </div>
            {foot &&
                <Footer/>
            }
        </>
    );
}

export default Root;