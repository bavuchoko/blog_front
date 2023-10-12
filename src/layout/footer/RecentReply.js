import React from 'react';

function RecentReply(props) {
    const data=[
        {id:1,body:"일이삼사오륙칠팔구싶일이삼awd"},
        {id:2,body:"테스트용 공지사항2"},
        {id:3,body:"테스트용 공지사항3"},
        {id:4,body:"테스트용 공지사항4"},
        {id:5,body:"테스트용 공지사항5"},
        {id:6,body:"테스트용 공지사항6"}
    ]

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

export default RecentReply;