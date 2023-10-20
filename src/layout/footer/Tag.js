import React,{useEffect, useState} from 'react';
import {getRecentContent, getRecentReply, getTags} from "../../api/common/CommonService";


function Tag(props) {

    const [data, setData] =useState([])

    async function getList() {
        try {
            const response = await getTags();
            if(response.status===200){
                setData(response.data._embedded?.tagDtoList);
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getList()
    }, []);



    return (
        <div></div>
    );
}

export default Tag;