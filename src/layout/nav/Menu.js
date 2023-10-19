import React from 'react';
import {Link} from "react-router-dom";


function Menu({open, menuRef}) {

    const style = {
        display: open ? 'block' : 'none',
    };
    return (
        <ul className="user-menu" style={style}  ref={menuRef}>
            <li><Link to="/content/create" className="link_name">글쓰기</Link></li>
            <li className="link_menu_setting" ><Link to="/setting" className="link_name ">관리</Link></li>
            <li className="box_division"></li>
            <li><Link to="/tag" className="link_name">태그</Link></li>
            <li><Link to="/guest" className="link_name">방명록</Link></li>
        </ul>
    );
}

export default Menu;