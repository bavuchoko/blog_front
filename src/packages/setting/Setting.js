import React, {useState} from 'react';
import {faBars} from "@fortawesome/free-solid-svg-icons/faBars";
import {faPlus} from "@fortawesome/free-solid-svg-icons/faPlus";
import {faChevronRight} from "@fortawesome/free-solid-svg-icons/faChevronRight";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function Setting() {
    const [categories, setCategories]=useState();



    return (
        <div className="setting-container">
            <div className="setting-container-container">
                <div className="setting-side"></div>
                <div className="setting-body">
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

                                        <div className="basic_item list-order-list">
                                            <div className="sub-indicator pl-[20px] pr-[20px]">
                                                <FontAwesomeIcon className="basic_item-bars" icon={faChevronRight}/>
                                            </div>
                                            <span>JAVA</span>
                                            <div className="order_btn-small">
                                                <button type="reset" className="btn-default-small btn-cancel">추가</button>
                                                <button type="submit" disabled="" className="btn-default-small btn_off btn-confirm">수정</button>
                                                <button type="submit" disabled="" className="btn-default-small btn_off btn-confirm">삭제</button>
                                            </div>
                                        </div>

                                        <div className="basic_item list-order-list">
                                            <div className="sub-indicator pl-[20px] pr-[20px]">
                                                <FontAwesomeIcon className="basic_item-bars" icon={faChevronRight}/>
                                            </div>
                                            <span><input type={"text"} className="category-input"/></span>
                                            <div className="order_btn">
                                                <button type="reset" className="btn-default btn-cancel">취소</button>
                                                <button type="submit" disabled="" className="btn-default btn_off btn-confirm">확인</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="add_item list-order-list">
                                        <FontAwesomeIcon className="basic_item-plus pl-[20px] pr-[20px]" icon={faPlus}/>
                                        <span>카테고리 추가</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Setting;
