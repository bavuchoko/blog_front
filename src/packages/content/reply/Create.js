import React from 'react';

function Create(props) {
    return (
        <div className="reply-container">
            <textarea className="replay-create-area"  placeholder="내용을 입력하세요"></textarea>
            <input type={"text"} className="reply-user-info" placeholder={"이름"}/>
            <input type={"text"} className="reply-user-info" placeholder={"비밀번호"}/>
            <button className="reply-submit">저장</button>
        </div>
    );
}

export default Create;
