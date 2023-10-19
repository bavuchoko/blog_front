import React from 'react';
import {Link} from "react-router-dom";
import Close from '../../assets/icons/close-white.png'
function Category({open, setCategoryOpen, categories, categoryRef}) {

    const style = {
        display: open ? 'block' : 'none',
    };

    const close = () => {
        setCategoryOpen(false);
    }
    return (
        <div  ref={categoryRef}>
            <div className="modal_back" style={style}>
                <img className="close-modal" src={Close} onClick={close} alt={'close Icon'}/>
            </div>
            <ul className="category-menu" style={style}>
                {!categories || categories.length === 0 ?(
                    <li><Link to='/content' className="link_name">빈 목록</Link> </li>
                ):(
                categories.map((category,index) => (
                    <div className="category-group"  key={index}>
                    <li className="link_name top-category"  key={category.id}>
                        <Link to={'/content?category='+category.name.toLowerCase()}>{category.name}</Link>
                        {/*{category.name}*/}
                    </li>
                        {category.child.map (child =>(
                            <li className="link_name sub-category" key={`sub_${child.id}`}>
                                <Link to={'/content?category='+child.name.toLowerCase()}>- {child.name}</Link>
                            </li>

                            ))}

                    </div>
                )))}
                {/*<li className="box_division"></li>*/}

            </ul>
        </div>
    );
}

export default Category;