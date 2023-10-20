import React, {useEffect, useState} from 'react';
import {getLinks, getNotice, getTags} from "../../api/common/CommonService";

function Notice(props) {
    const [data, setData] =useState([])

    async function getList() {
        try {
            const response = await getNotice();
            if(response.status===200){
                setData(response.data._embedded?.tagNoticeList);
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

export default Notice;
