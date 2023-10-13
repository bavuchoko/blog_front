import React from 'react';
import {Outlet} from "react-router-dom";
import Navigator from "./nav/Navigator";
import Footer from "./Footer";


function Root() {

    return (
        <>
            <Navigator />
                <div className="containers">
                    <Outlet/>
                </div>
            <Footer />
        </>
    );
}

export default Root;