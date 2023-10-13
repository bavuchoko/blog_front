import React from 'react';
import {Pagination} from "@mui/material";

function Contents(props) {

    const pageSearch = (e, value) => {
        console.log(value)
    }

    const data={
        page : {
            "size": 10,
            "totalElements": 100,
            "totalPages": 0,
            "number": 0
        }
    }


    return (
        <div>




            <Pagination
                count={data.page.totalElements}
                shape="rounded"
                color="primary"
                showFirstButton
                showLastButton
                onChange={pageSearch}
            />
        </div>
    );
}

export default Contents;
