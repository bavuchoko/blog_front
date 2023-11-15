import React from 'react';

function Content({data, domain}) {

    return (
        <div className="content-list flex">
            <div className={`${data.thumbnail? 'dp-width': ''}`}>
                <p className="content-list-title">{data.title}</p>
                <p className="content-list-body">{data.body}</p>
                <span className="content-list-category">{data.category}</span>
                <span className="txt_bar"></span>
                <span className="content-list-createDate">{data.createDate.substring(0,10)} {data.createDate.substring(11,16)}</span>
            </div>
            {data.thumbnail &&
                <div className="content-list-img">
                    <img src={domain + data.thumbnail.path + data.thumbnail.uploadName} />
                </div>
            }
        </div>
    );
}

export default Content;
