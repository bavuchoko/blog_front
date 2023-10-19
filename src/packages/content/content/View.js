import React from 'react';
import {useParams} from "react-router-dom";
import ReplyView from '../reply/View'
import ReplyCreate from '../reply/Create'

function View(props) {
    const params = useParams();
    console.log(":awdawd")

    return (
        <div>

            <ReplyView/>
            <ReplyCreate/>
        </div>
    );
}

export default View;
