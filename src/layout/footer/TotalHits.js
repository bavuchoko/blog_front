import React, {useEffect} from 'react';
import {getTags} from "../../api/common/CommonService";

function TotalHits(props) {
    const total={
        total:1412341,
        today:123,
        yesterday:323
    }

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
        <div>
            <p className="total">{total.total.toLocaleString()}</p>
            <div>
                <span className="dayCount">Today</span>
                <span className="dayCount right">{total.today.toLocaleString()}</span>
            </div>
            <div>
                <span className="dayCount">Yesterday</span>
                <span className="dayCount right">{total.yesterday.toLocaleString()}</span>
            </div>
        </div>
    );
}

export default TotalHits;