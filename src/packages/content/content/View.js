import React from 'react';
import {useParams} from "react-router-dom";
import ReplyView from '../reply/View'
import ReplyCreate from '../reply/Create'

function View(props) {
    const params = useParams();
    return (
        <div className="content-containers">

            <ReplyView/>
            <ReplyCreate/>
        </div>
    );
}

export default View;
