import React, {useEffect, useRef, useState} from 'react';
import Select from "react-select";
import {getCategoryList} from "../../api/category/CateogryService";
function SelectBox({options, setSelectValue}) {

    const selectInputRef = useRef(null);
    const list = [];


    const mapOptionsRecursively = (options) => {
        if(options.length > 0){
            options.map(option => {
            const mappedOption = {
                value: option.name,
                label: option.name
            };
            list.push(mappedOption)
                if (option.child) {
                    mapOptionsRecursively(option.child);
                }
            });
        }
        return list
    };

    useEffect(() => {
        mapOptionsRecursively(options);
    }, [options]);
    
    return (
        <>
            <Select
                ref={selectInputRef}
                onChange={(e) => {
                    if (e) {
                        setSelectValue(e.value);
                    } else {
                        setSelectValue("");
                    }
                }}
                options={list}
                placeholder="카테고리"
            />
        </>
    );
}

export default SelectBox;