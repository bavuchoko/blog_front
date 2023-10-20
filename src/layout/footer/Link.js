import React, {useState} from 'react';
import {getContentList} from "../../api/content/ContentService";
import {getLinks, getTags} from "../../api/common/CommonService";
import {useEffect} from "react";

function Link(props) {

    const [data, setData] =useState([])

    async function getList() {
        try {
            const response = await getLinks();
            if(response.status===200){
                setData(response.data._embedded?.linkDtoList);
            }
        } catch (error) {
            console.log(error)
        }
    }



    useEffect(() => {
        getList()
    }, []);

    return (
        <div>
            <ul className="ul-footer-txt">
                {data.map(notice=> (
                        <li key={notice.id} className="footer-txt">{ notice.body.length > 14 ? notice.body.substring(0,14)+ `...` : notice.body}</li>
                    )
                )}
            </ul>
        </div>
    );
}

export default Link;