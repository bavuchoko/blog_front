import React, {useEffect, useState} from 'react';
import {Pagination} from "@mui/material";
import {getContentList} from "../../../api/content/ContentService";
import {useSelector} from "react-redux";
import {useLocation, useParams} from "react-router-dom";
import Content from "./Content";

function Contents(props) {
    const params = useParams();
    const loginUser = useSelector(state => state.auth.isLoggedIn);

    const [data, setData] = useState();
    const [page, setPage] =useState({});
    const [isLoading, setIsLoding] =useState(true);
    const [error, setError] =useState(false);
    const pageSearch = (e, value) => {
    }
    const domain = process.env.REACT_APP_DOMAIN_NAME;
    const location = useLocation();
    async function getList() {
        try {
            const response = await getContentList(loginUser, location.search.split('=')[1]);
            if(response.status===200){
                setIsLoding(false)
                setData(response.data._embedded.contentDtoList);
            }
            setPage(response.data.page)
        } catch (error) {
            setError(true)
        }
    }
    useEffect(() => {
        getList()
    }, [location]);

    return (
        <div className="container-container">
             <div className="content-main">
                 {data?.map(content =>(

                     <Content  key={`content_${content.id}`} data={content} domain={domain}/>
                 ))}

             </div>

            {page &&
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
