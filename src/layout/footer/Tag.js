import React,{useEffect} from 'react';
import {getRecentReply, getTags} from "../../api/common/CommonService";


function Tag(props) {

    async function getList() {
        try {
            const response = await getTags();
            console.log(response)
            if(response.status===200){
                // setData(response.data);
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