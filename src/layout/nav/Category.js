import React from 'react';
import {Link} from "react-router-dom";
import Close from '../../assets/icons/close.png'
function Category({open, setCategoryOpen, menus}) {

    const style = {
        display: open ? 'block' : 'none',
    };

    const close = () => {
        setCategoryOpen(false);
    }

    return (
        <div>
            <div className="modal_back" style={style}>
                <img className="close-modal" src={Close} onClick={close} alt={'close Icon'}/>
            </div>
            <ul className="category-menu" style={style}>
                {menus && menus.length === 0 &&
                    <li><Link to='/content' className="link_name">빈 목록</Link> </li>
                }
                {menus.map(menu => (
                    <li>
                        <Link to='/content'
                              state= {{
                                  category:menu.category,
                                  id : menu.id
                              }}
                              className="link_name">{menu.name}</Link>
                    </li>
                ))}
                {/*<li className="box_division"></li>*/}

            </ul>
        </div>
    );
}

export default Category;