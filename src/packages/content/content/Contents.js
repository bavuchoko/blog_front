import React, {useEffect, useState} from 'react';
import {Pagination} from "@mui/material";
import {getContentList} from "../../../api/content/ContentService";
import {useSelector} from "react-redux";

function Contents(props) {
    const loginUser = useSelector(state => state.auth.isLoggedIn);
    const [data, setData] = useState();
    const [page, setPage] =useState(0);
    const [isLoading, setIsLoding] =useState(true);
    const [error, setError] =useState(false);
    const pageSearch = (e, value) => {
        console.log(value)
    }
    async function getList() {
        try {
            const response = await getContentList(loginUser);
            if(response.status===200){
                setIsLoding(false)
                setData(response.data);
            }
            setPage(response.data.page)
        } catch (error) {
            setError(true)
        }
    }

    useEffect(() => {
        getList()
    }, [loginUser]);

    return (
        <div className="container-container">




            {page.totalElements > 0 &&
            <Pagination
                count={page.totalElements}
                shape="rounded"
                color="primary"
                showFirstButton
                showLastButton
                onChange={pageSearch}
            />}
        </div>
    );
}

export default Contents;
