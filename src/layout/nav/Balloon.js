import React from 'react';
import {Link} from "@mui/material";

function Balloon({open}) {
console.log(open)
    const style = {
        display: open ? 'block' : 'none',
    };
    return (
        <div className="balloon" style={style}>
            <div className="balloon_profile">
                <Link href="/" className="balloon_name">박종수입니다</Link>
                <span className="balloon_email">bavuchoko@naver.com</span>
                <Link href="/" className="balloon_setting">계정관리</Link>
            </div>
        </div>
    );
}

export default Balloon;