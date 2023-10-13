import React, {useState} from 'react';
import Git from '../../../assets/icons/git.png'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDown, faAngleUp} from "@fortawesome/free-solid-svg-icons";
function View({data}) {

    const [open,setOpen] =useState(true)

    const replyOpneHandler = () => {
        setOpen(!open)
    }

    // const data =[
    //     {id:1, createdBy:{name:"개발자"}, body:"혹시 로컬이 아닌 gcp에 원격접속하여 aws ubuntu에 scp로 파일 전송중에 아무런 에러메시지도 않나오는 무반응 상태인데 이게 어떤 상황인지 알고 계실까요??",createDate:"2022.06.19 16:18:00"},
    //     {id:2, createdBy:{name:"개발자"}, body:"혹시 로컬이 아닌 gcp에 원격접속하여 aws ubuntu에 scp로 파일 전송중에 아무런 에러메시지도 않나오는 무반응 상태인데 이게 어떤 상황인지 알고 계실까요??",createDate:"2022.06.19 16:18:00"}
    // ]
    return (
        <div>
            <button onClick={()=>replyOpneHandler()} className="reply-open-btn">
                <span>댓글</span> <span className="reply-count">{data? data.length : 0}</span>
                {open ?
                    <FontAwesomeIcon className="reply-faAngleDown" icon={faAngleUp}/>
                    :
                    <FontAwesomeIcon className="reply-faAngleDown" icon={faAngleDown}/>
                }
            </button>
            {data && data.length > 0 ? (
                <ul className="reply-ul">
                    {data.map(reply => (
                        <li key={reply.id} className="replay-list">
                            <img src={Git} className="reply-user-profile"/>
                            <span className="reply-content">
                            <span className="reply-user-name">{reply.createdBy.name}</span>
                            <span className="reply-user-body">{reply.body}</span>
                            <span className="reply-user-date">{reply.createDate.substring(0, 16)}</span>
                        </span>

                        </li>

                    ))}
                </ul>
            ):(
                <></>
            )}
        </div>
    );
}

export default View;
