import React, {useState} from 'react';
import {useLocation} from "react-router-dom";

function View(props) {
    const location = useLocation();
    const [id, setId] = useState(location.state.id);


    return (
        <div></div>
    );
}

export default View;
