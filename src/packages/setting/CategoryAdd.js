import React, {useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons/faBars";
import {faChevronRight} from "@fortawesome/free-solid-svg-icons/faChevronRight";
import {faChevronDown} from "@fortawesome/free-solid-svg-icons/faChevronDown";
import {faMinus} from "@fortawesome/free-solid-svg-icons/faMinus";
import {faPlus} from "@fortawesome/free-solid-svg-icons/faPlus";
import {faCheck} from "@fortawesome/free-solid-svg-icons/faCheck";

function CategoryAdd(props) {
    // const [categories, setCategories] =useState([]);
    const categories=[
        {name:"JAVA", id:1, sub:[{name:"Spring", id:3}]   },
        {name:"DB", id:2}

    ]


    const [expandedMenus, setExpandedMenus] = useState({});
    const [clickedMenuId, setClickedMenuId] = useState(null);
    const [createMenus, setCreateMenus] = useState({});
    const [clickedCreateId, setClickedCreateId] = useState(null);

    const [create, setCreate] =useState(false)
    const [name, setName] =useState('')

    const toggleSubMenu = (id) => {
        setClickedMenuId(id)
        setExpandedMenus((prevState) => ({
            ...prevState,
            [id]: !prevState[id], // 클릭한 메뉴의 확장 상태 토글
        }));
    };


    const subCategoryCreator = (id) => {
        setClickedCreateId(id)
        setCreateMenus((prevState) => ({
            ...prevState,
            [id]: !prevState[id],
        }));
    };


    const addCategory = () => {
        setCreate(true);
    }
    const addCancel = () => {
        setCreate(false);
        setName('')
    }

    const createInput = (e) => {
        setName(e.target.value);
    }


    return (
        <>
            <p className="setting-title">카테고리 관리</p>
            <div className="categroy-setting">
                <p>카테고리를 생성하세요</p>
                <div className="set_order" id="category-app">
                    <div className="wrap_order">
                        <div className="list_order">
                            <div className="categories-setting">
                                <div className="basic_item list-order-list">
                                    <FontAwesomeIcon className="basic_item-bars pl-[20px] pr-[20px]" icon={faBars}/>
                                    <span>분류 전체보기</span>
                                </div>
                            {categories.map((category, index) =>(
                                <div key={`top_${category.id}`}>
                                <div className="basic_item list-order-list" key={category.id} >
                                    <div className="top-indicator pl-[20px] pr-[20px] w-[55px]" onClick={() => toggleSubMenu(category.id)}>
                                        {category.sub ?
                                            (
                                                <>
                                            {expandedMenus[category.id] ? (
                                                    <FontAwesomeIcon className="basic_item-bars" icon={faChevronDown}/>
                                                ) : (
                                                    <FontAwesomeIcon className="basic_item-bars" icon={faChevronRight}/>
                                                )
                                            }
                                                </>
                                            ):(
                                                <FontAwesomeIcon className="basic_item-bars" icon={faMinus}/>
                                            )
                                        }

                                    </div>
                                    <span>{category.name}</span>
                                    <div className="order_btn-small">
                                        <button type="reset" className="btn-default-small btn-cancel" onClick={()=>subCategoryCreator(category.id)}>추가</button>
                                        <button type="submit" disabled="" className="btn-default-small btn_off btn-confirm">수정</button>
                                        <button type="submit" disabled="" className="btn-default-small btn_off btn-confirm">삭제</button>
                                    </div>
                                </div>

                                    {createMenus[category.id] &&
                                        <div className="basic_item list-order-list" key={`create_${category.id}`}>
                                            <div className="sub-indicator pl-[20px] pr-[20px]">
                                                <FontAwesomeIcon className="basic_item-bars" icon={faCheck}/>
                                            </div>
                                            <span><input type={"text"} value={name} onChange={createInput}
                                                         className="category-input"/></span>
                                            <div className="order_btn">
                                                <button type="reset" className="btn-default btn-cancel"
                                                        onClick={()=>subCategoryCreator(category.id)}>취소
                                                </button>
                                                <button type="submit" disabled=""
                                                        className="btn-default btn_off btn-confirm">확인
                                                </button>
                                            </div>
                                        </div>
                                    }
                                {expandedMenus[category.id] && category.sub?.map((sub, rdex) =>(
                                    <div className="basic_item list-order-list" key={sub.id}>
                                        <div className="sub-indicator pl-[20px] pr-[20px]">
                                        <FontAwesomeIcon className="basic_item-bars" icon={faMinus}/>
                                        </div>
                                    <span>{sub.name}</span>
                                    <div className="order_btn-small">
                                    <button type="submit" disabled="" className="btn-default-small btn_off btn-confirm">수정</button>
                                    <button type="submit" disabled="" className="btn-default-small btn_off btn-confirm">삭제</button>
                                    </div>
                                    </div>
                                    ))}
                                </div>
                                )) }

                                {create &&
                                <div className="basic_item list-order-list">
                                    <div className="top-indicator pl-[20px] pr-[20px]">
                                        <FontAwesomeIcon className="basic_item-bars" icon={faCheck}/>
                                    </div>
                                    <span><input type={"text"} value={name} onChange={createInput} className="category-input"/></span>
                                    <div className="order_btn">
                                        <button type="reset" className="btn-default btn-cancel" onClick={addCancel}>취소</button>
                                        <button type="submit" disabled="" className="btn-default btn_off btn-confirm">확인</button>
                                    </div>
                                </div>
                                }
                            </div>
                            <div className="add_item list-order-list" onClick={addCategory}>
                                <FontAwesomeIcon className="basic_item-plus pl-[20px] pr-[20px]" icon={faPlus}/>
                                <span>카테고리 추가</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default CategoryAdd;