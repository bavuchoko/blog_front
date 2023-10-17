import React, {useState} from 'react';
import {faBars} from "@fortawesome/free-solid-svg-icons/faBars";
import {faPlus} from "@fortawesome/free-solid-svg-icons/faPlus";
import {faChevronRight} from "@fortawesome/free-solid-svg-icons/faChevronRight";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import CategoryAdd from "./CategoryAdd";

function Setting() {
    const [categories, setCategories]=useState();



    return (
        <div className="setting-container">
            <div className="setting-container-container">
                <div className="setting-side"></div>
                <div className="setting-body">
                    <CategoryAdd />
                </div>

            </div>
        </div>
    );
}

export default Setting;
