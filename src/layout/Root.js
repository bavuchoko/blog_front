import React from 'react';
import {Outlet} from "react-router-dom";
import Navigator from "./Navigator";


function Root() {

    return (
        <>
            <Navigator />
            <div className="containers">
                <Outlet/>
            </div>
        </>
    );
}

export default Root;